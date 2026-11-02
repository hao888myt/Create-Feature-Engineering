// kubejs/server_scripts/src/recipes/anvil_craft/multiblock_conversion.js

ServerEvents.recipes(event => {

    // ---------- 方块定义归一化 ----------
    function parsePropertyString(text) {
        var index = text.indexOf("=")
        if (index <= 0) {
            throw new Error("[multiblock] 无法解析方块属性: " + text)
        }
        var obj = {}
        obj[text.substring(0, index)] = text.substring(index + 1)
        return obj
    }

    function normalizeProperties(value) {
        var list = []
        if (value === undefined || value === null) {
            return list
        }
        if (!Array.isArray(value)) {
            value = [value]
        }
        for (var i = 0; i < value.length; i++) {
            var entry = value[i]
            if (typeof entry === "string") {
                list.push(parsePropertyString(entry))
            } else if (entry && typeof entry === "object") {
                var keys = Object.keys(entry)
                for (var k = 0; k < keys.length; k++) {
                    var single = {}
                    single[keys[k]] = String(entry[keys[k]])
                    list.push(single)
                }
            }
        }
        return list
    }

    /**
     * 支持：
     *   "minecraft:stone"
     *   "minecraft:oak_log[axis=x]"
     *   { id: "x" } / { item: "x" } / { block: "x" }
     *   { blocks: "x", properties: [{ half: "top_n" }] }
     *   { blocks: "x", properties: { half: "top_n" } }
     *   { blocks: "x", properties: ["half=top_n"] }
     */
    function toBlocks(value) {
        if (typeof value === "string") {
            var match = value.match(/^(.*?)\[(.*)\]$/)
            if (match) {
                var props = []
                var parts = match[2].split(",")
                for (var i = 0; i < parts.length; i++) {
                    var part = parts[i].trim()
                    if (part.length > 0) {
                        props.push(part)
                    }
                }
                var result = { blocks: match[1] }
                var normalized = normalizeProperties(props)
                if (normalized.length > 0) {
                    result.properties = normalized
                }
                return result
            }
            return { blocks: value }
        }

        if (value && typeof value === "object") {
            var blocks = value.blocks
            if (blocks === undefined) blocks = value.id
            if (blocks === undefined) blocks = value.item
            if (blocks === undefined) blocks = value.block
            if (blocks === undefined) {
                throw new Error("[multiblock] 无法识别方块定义: " + JSON.stringify(value))
            }

            var dict = { blocks: String(blocks) }
            var properties = normalizeProperties(value.properties)
            if (properties.length > 0) {
                dict.properties = properties
            }
            return dict
        }

        throw new Error("[multiblock] 无法识别方块定义: " + value)
    }


    class Canvas {
        constructor(size) {
            this.size = size || 3
            this.layers = []
            this.symbols = {}
        }

        addLayer(rows) {
            var layer = []
            for (var r = 0; r < this.size; r++) {
                var row = rows[r]
                var chars
                if (row === undefined || row === null) {
                    chars = []
                } else if (typeof row === "string") {
                    chars = row.split("")
                } else {
                    chars = row
                }
                var cells = []
                for (var c = 0; c < this.size; c++) {
                    var ch = chars[c]
                    cells.push(ch === undefined || ch === null ? " " : String(ch))
                }
                layer.push(cells)
            }
            this.layers.push(layer)
            return this
        }

        // 层数不足时在“下面”补空格层
        finish() {
            while (this.layers.length < this.size) {
                var layer = []
                for (var r = 0; r < this.size; r++) {
                    var cells = []
                    for (var c = 0; c < this.size; c++) {
                        cells.push(" ")
                    }
                    layer.push(cells)
                }
                this.layers.push(layer)
            }
            return this
        }

        define(key, block) {
            this.symbols[key] = toBlocks(block)
            return this
        }

        defineAll(map) {
            var keys = Object.keys(map)
            for (var i = 0; i < keys.length; i++) {
                this.define(keys[i], map[keys[i]])
            }
            return this
        }

        // 书写第 0 层是最顶，输出第 0 层必须是最底 -> 反转
        toGrid() {
            var bottomUp = this.layers.slice().reverse()
            var grid = []
            for (var i = 0; i < bottomUp.length; i++) {
                var layer = bottomUp[i]
                var rowsOut = []
                for (var r = 0; r < layer.length; r++) {
                    rowsOut.push(layer[r].join(""))
                }
                grid.push(rowsOut)
            }
            return grid
        }

        mapping() {
            var mapping = {}
            var keys = Object.keys(this.symbols)
            for (var i = 0; i < keys.length; i++) {
                mapping[keys[i]] = this.symbols[keys[i]]
            }
            return mapping
        }
    }


    class MultiblockConversion {
        constructor() {
            this.type = "anvilcraft:multiblock_conversion"
            this.input = new Canvas(3)
            this.output = new Canvas(3)
        }

        // 只建议 3 或 5
        setSize(size) {
            this.input = new Canvas(size)
            this.output = new Canvas(size)
            return this
        }

        /** 输入层：第一次调用 = 最顶层 */
        addInputLayer(rows) {
            this.input.addLayer(rows)
            return this
        }

        addInputLayers(layers) {
            for (var i = 0; i < layers.length; i++) {
                this.input.addLayer(layers[i])
            }
            return this
        }

        /** 输出层：第一次调用 = 最顶层 */
        addOutputLayer(rows) {
            this.output.addLayer(rows)
            return this
        }

        addOutputLayers(layers) {
            for (var i = 0; i < layers.length; i++) {
                this.output.addLayer(layers[i])
            }
            return this
        }

        defineInput(key, block) {
            this.input.define(key, block)
            return this
        }

        defineInputs(map) {
            this.input.defineAll(map)
            return this
        }

        defineOutput(key, block) {
            this.output.define(key, block)
            return this
        }

        defineOutputs(map) {
            this.output.defineAll(map)
            return this
        }

        build(id) {
            var json = {
                type: this.type,
                inputPattern: {
                    grid: this.input.finish().toGrid(),
                    mapping: this.input.mapping()
                },
                outputPattern: {
                    grid: this.output.finish().toGrid(),
                    mapping: this.output.mapping()
                }
            }

            if (id) {
                event.custom(json).id(id)
            } else {
                event.custom(json)
            }
        }
    }


    new MultiblockConversion()
        .defineInputs({
            "B": "create_feature_engineering:black",
            "W": "create_feature_engineering:white",
            "0": "minecraft:air"
        })
        .addInputLayer(["000", "000", "000"])
        .addInputLayer(["000", "000", "000"])
        .addInputLayer(["BWB", "WBW", "BWB"])
        .defineOutputs({
            "C": "anvilcraft:void_matter_block",
            "0": "minecraft:air"
        })
        .addOutputLayer(["000", "000", "000"])
        .addOutputLayer(["000", "000", "000"])
        .addOutputLayer(["000", " C ", "000"])
        .build(global.ModPackId + ":large_cauldron_from_heavy_iron")

    new MultiblockConversion()
        .defineInputs({
            "B": "create_feature_engineering:black",
            "W": "create_feature_engineering:white",
            "0": "minecraft:air"
        })
        .addInputLayer(["000", "000", "000"])
        .addInputLayer(["000", "000", "000"])
        .addInputLayer(["WBW", "BWB", "WBW"])
        .defineOutputs({
            "C": "anvilcraft:void_matter_block",
            "0": "minecraft:air"
        })
        .addOutputLayer(["000", "000", "000"])
        .addOutputLayer(["000", "000", "000"])
        .addOutputLayer(["000", " C ", "000"])
        .build(global.ModPackId + ":large_cauldron")
})