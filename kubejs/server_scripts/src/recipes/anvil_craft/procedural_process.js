ServerEvents.recipes(event => {
    class ProceduralProcess {
        constructor(icon, initial_block, result_block, loop = 1) {
            this.type = "anvilcraft:procedural_process"
            this.icon = { id: icon, count: 1 }
            this.initial_block = { blocks: initial_block }
            this.result_block = { block: result_block }
            this.loop = loop
            this.displayed_models = []
            this.steps = []
            this.multiple_loop_first_step = null
            this.recipe_id = ""
            this.index = 0

            return this
        }

        addItemInject(items) {
            this.steps.push({
                content: {
                    type: "anvilcraft:item_inject",
                    block_ingredient: { blocks: this.index != 0 ? "anvilcraft:wip_block" : this.initial_block.blocks },
                    block_result: { block: "anvilcraft:wip_block" },
                    ingredients: items.map(item => ({ items: item }))
                },
                index: this.index
            })
            this.index += 1
            return this
        }

        addBlockCompress(input) {
            this.steps.push({
                content: {
                    type: "anvilcraft:block_compress",
                    inputs: [
                        { blocks: input },
                        { blocks: this.index != 0 ? "anvilcraft:wip_block" : this.initial_block.blocks },
                    ],
                    result: { block: "anvilcraft:wip_block" }
                },
                index: this.index
            })
            this.index += 1
            return this
        }

        addBlockProcessing(input) {
            this.steps.push({
                content: {
                    type: "anvilcraft:block_processing",
                    inputs: [
                        { blocks: this.index != 0 ? "anvilcraft:wip_block" : this.initial_block.blocks },
                        input
                    ],
                    result: { block: "anvilcraft:wip_block" }
                },
                index: this.index
            })
            this.index += 1
            return this
        }

        build(id = null) {
            if (this.loop > 1) {
                let first = JSON.parse(JSON.stringify(this.steps[0]))
                let initial = this.initial_block.blocks
                if (first.content.block_ingredient?.blocks == initial) {
                    first.content.block_ingredient.blocks = "anvilcraft:wip_block"
                }
                if (first.content.inputs) {
                    first.content.inputs.forEach(i => {
                        if (i.blocks == initial) i.blocks = "anvilcraft:wip_block"
                    })
                }
                this.multiple_loop_first_step = first
            }

            let dict = {
                type: this.type,
                displayed_models: this.displayed_models,
                icon: this.icon,
                initial_block: this.initial_block,
                loop: this.loop,
                result_block: this.result_block,
                steps: this.steps
            }

            if (this.multiple_loop_first_step) {
                dict.multiple_loop_first_step = this.multiple_loop_first_step
            }

            if (id)
                event.custom(dict).id(id)
            else
                event.custom(dict)
        }
    }

    let removes = [
        "anvilcraft:magnetoelectric_core",
        "anvilcraft:precision_electromagnetic_processing/magnetoelectric_core",

        "createimp:batch_mechanical_crafter",
        "createimp:batch_repackager",
    ].forEach(recipe => {
        event.remove(recipe)
    })


    new ProceduralProcess("anvilcraft:magnetoelectric_core", "anvilcraft:hollow_magnet_block", "anvilcraft:magnetoelectric_core", 2)
        .addItemInject(["#c:wires/copper"])
        .addItemInject(["#c:glass_blocks"])
        .build(`${global.ModPackId}:magnetoelectric_core`)

    new ProceduralProcess("createimp:batch_mechanical_crafter", "create:mechanical_crafter", "createimp:batch_mechanical_crafter")
        .addItemInject(["anvilcraft:circuit_board"])
        .addItemInject(["anvilcraft:hardend_resin"])
        .addBlockCompress("create:railway_casing")
        .build(`${global.ModPackId}:batch_mechanical_crafter`)

    new ProceduralProcess("createimp:batch_repackager", "create:repackager", "createimp:batch_repackager")
        .addItemInject(["anvilcraft:circuit_board"])
        .addItemInject(["anvilcraft:hardend_resin"])
        .addBlockCompress("create:railway_casing")
        .build(`${global.ModPackId}:batch_repackager_from_repackager`)

    new ProceduralProcess("createimp:batch_repackager", "create:packager", "createimp:batch_repackager")
        .addItemInject(["anvilcraft:circuit_board"])
        .addItemInject(["anvilcraft:hardend_resin"])
        .addBlockCompress("create:railway_casing")
        .build(`${global.ModPackId}:batch_repackager_from_packager`)

    new ProceduralProcess("anvilcraft:royal_steel_block", "anvilcraft:void_matter_block", "anvilcraft:royal_steel_block")
        .addBlockCompress(["anvilcraft:magnet_block"])
        .addBlockCompress(["create_feature_engineering:steel_block"])
        .addBlockCompress(["minecraft:emerald_block", "anvilcraft:topaz_block", "anvilcraft:ruby_block", "anvilcraft:sapphire_block"])
        .addBlockProcessing({
            "blocks": "anvilcraft:heater",
            "properties": [
                {
                    "overload": "false"
                }
            ]
        })
        .build(`${global.ModPackId}:royal_steel_block`)
})