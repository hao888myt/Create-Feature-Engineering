ServerEvents.recipes(event => {
    class Pedestal {
        /**
         * @param {Array<string|number>} result 
         * @param {Array<string>} pattern 
         * @param {Object<string, string>} key 
         * @param {number} time 
         */
        constructor(result, pattern, key, time = 40) {
            this.id = result[0]
            this.count = result[1]

            this.pattern = pattern
            this.key = key

            this.time = time

            this.magenta = 0
            this.yellow = 0
            this.cyan = 0
            this.black = 0
            this.white = 0

            this.tier = "basic"
            this.group = ""
            this.required_advancement = ""
            this.required_advancements = []

            this.recipe_id = this.id

            return this
        }

        // #region 只是设置颜色
        setMagenta(count) {
            this.magenta = count
            return this
        }

        setYellow(count) {
            this.yellow = count
            return this
        }

        setCyan(count) {
            this.cyan = count
            return this
        }

        setBlack(count) {
            this.black = count
            this.tier = "advanced"
            return this
        }

        setWhite(count) {
            this.white = count
            this.tier = "complex"
            return this
        }

        setMYC(magenta, yellow, cyan) {
            this.magenta = magenta
            this.yellow = yellow
            this.cyan = cyan
            return this
        }

        setMYCB(magenta, yellow, cyan, black) {
            this.magenta = magenta
            this.yellow = yellow
            this.cyan = cyan
            this.black = black
            this.tier = "advanced"
            return this
        }

        setMYCBW(magenta, yellow, cyan, black, white) {
            this.magenta = magenta
            this.yellow = yellow
            this.cyan = cyan
            this.black = black
            this.white = white
            this.tier = "complex"
            return this
        }

        // #endregion

        CMY() {
            this.tier = "simple"
            return this
        }

        onyx() {
            this.tier = "advanced"
            return this
        }

        moon() {
            this.tier = "complex"
            return this
        }

        setTime(time) {
            this.time = time
            return this
        }

        setGroup(group) {
            this.group = group
            return this
        }

        setExperience(experience) {
            this.experience = experience
            return this
        }

        addRequiredAdvancement(advancement) {
            this.required_advancements.push(advancement)
            return this
        }

        addRequiredAdvancements(advancements) {
            advancements.forEach(advancement => {
                this.addRequiredAdvancement(advancement)
            })
            return this
        }

        setId(id) {
            this.recipe_id = id
            return this
        }

        build() {
            event.custom({
                "type": "spectrum:pedestal",
                "group": this.group,
                "time": this.time,
                "tier": this.tier,
                "colors": {
                    "spectrum:magenta": this.magenta,
                    "spectrum:yellow": this.yellow,
                    "spectrum:cyan": this.cyan,
                    "spectrum:black": this.black,
                    "spectrum:white": this.white
                },
                "experience": this.experience,
                "pattern": this.pattern,
                "key": this.key,
                "result": {
                    "id": this.id,
                    "count": this.count
                },
                "required_advancements": this.required_advancements
            }).id(`${this.recipe_id}`)
        }
    }

    let removes = [
        "ars_nouveau:sourcestone",

        "ars_nouveau:imbuement_chamber",
        "ars_nouveau:source_jar",

        "ars_nouveau:agronomic_sourcelink",
        "ars_nouveau:volcanic_sourcelink",

        "ars_nouveau:arcane_pedestal",
        "ars_nouveau:ritual_brazier",

        "ars_nouveau:basic_spell_turret",
        "ars_nouveau:enchanting_apparatus",
        "ars_nouveau:arcane_core",

        "ars_nouveau:vitalic_sourcelink",

        "spectrum:pedestal/tier1/bottle_of_fading",
        "spectrum:pedestal/tier1/bottle_of_fading_essence",

        "spectrum:pedestal/tier2/fusion_shrine_basalt",
        "spectrum:pedestal/tier2/fusion_shrine_calcite",

        "ars_nouveau:mycelial_sourcelink",

        "spectrum:pedestal/tier3/enchanter",
        "spectrum:pedestal/tier3/black_hole_chest",
        "spectrum:pedestal/tier3/spirit_instiller"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    new Pedestal(["ars_nouveau:sourcestone", 8],
        [
            "SSS",
            "SGS",
            "SSS"
        ],
        {
            S: "#c:stones",
            G: "ars_nouveau:source_gem"
        }
    ).addRequiredAdvancement("spectrum:place_pedestal")
        .build()

    new Pedestal(["ars_nouveau:source_jar", 1],
        [
            "PPP",
            "G G",
            "PPP"
        ],
        {
            P: "ars_nouveau:archwood_slab",
            G: "#c:glass_blocks"
        }
    ).addRequiredAdvancement("spectrum:build_basic_pedestal_structure")
        .CMY()
        .build()

    new Pedestal(["ars_nouveau:agronomic_sourcelink", 1],
        [
            " S ",
            "GWG",
            " S "
        ],
        {
            S: "ars_nouveau:source_gem",
            G: "minecraft:gold_ingot",
            W: "#c:crops"
        }
    ).addRequiredAdvancement("spectrum:build_basic_pedestal_structure")
        .CMY()
        .build()

    new Pedestal(["ars_nouveau:volcanic_sourcelink", 1],
        [
            " S ",
            "GHG",
            " S "
        ],
        {
            S: "ars_nouveau:source_gem",
            G: "minecraft:gold_ingot",
            H: "spectrum:shimmerstone_gem"
        }
    ).addRequiredAdvancements([
        "spectrum:build_basic_pedestal_structure",
        "spectrum:collect_shimmerstone"
    ])
        .CMY()
        .build()

    new Pedestal(["ars_nouveau:arcane_pedestal", 4],
        [
            "SGS",
            "NSN",
            "NSN"
        ],
        {
            S: "ars_nouveau:sourcestone",
            G: "ars_nouveau:source_gem",
            N: "#c:nuggets/gold"
        }
    ).addRequiredAdvancement("spectrum:place_pedestal")
        .build()

    new Pedestal(["ars_nouveau:ritual_brazier", 1],
        [
            "SGS",
            "ISI",
            "ISI"
        ],
        {
            S: "ars_nouveau:sourcestone",
            G: "ars_nouveau:source_gem",
            I: "#c:ingots/gold"
        }
    ).addRequiredAdvancement("spectrum:place_pedestal")
        .setTime(100)
        .setMYC(2, 2, 2)
        .build()

    new Pedestal(["ars_nouveau:imbuement_chamber", 1],
        [
            "PGP",
            "PFP",
            "PGP"
        ],
        {
            P: "ars_nouveau:archwood_planks",
            G: "minecraft:gold_ingot",
            F: "#ars_nouveau:shady_wizard_fruits"
        }
    ).addRequiredAdvancement("spectrum:build_basic_pedestal_structure")
        .CMY()
        .setMYC(1, 1, 1)
        .build()

    new Pedestal(["ars_nouveau:basic_spell_turret", 1],
        [
            "RSR",
            "SGS",
            "RSR"
        ],
        {
            R: "minecraft:redstone",
            S: "#c:ingots/gold",
            G: "ars_nouveau:source_gem"
        }
    ).setTime(50)
        .CMY()
        .setMYC(1, 1, 1)
        .addRequiredAdvancement("spectrum:build_basic_pedestal_structure")
        .build()

    new Pedestal(["ars_nouveau:enchanting_apparatus", 1],
        [
            "GTG",
            "SFS",
            "GTG"
        ],
        {
            G: "#c:ingots/gold",
            S: "ars_nouveau:source_gem",
            F: "spectrum:shimmerstone_gem",
            T: "ars_nouveau:sourcestone"
        }
    ).setTime(200)
        .CMY()
        .setMYC(4, 4, 4)
        .addRequiredAdvancements([
            "spectrum:build_basic_pedestal_structure",
            "spectrum:collect_shimmerstone"
        ])
        .build()

    new Pedestal(["ars_nouveau:vitalic_sourcelink", 1],
        [
            " S ",
            "GAG",
            " S "
        ],
        {
            S: "ars_nouveau:source_gem",
            G: "minecraft:gold_ingot",
            A: "sauce:anima_essence"
        }
    ).addRequiredAdvancements([
        "spectrum:build_basic_pedestal_structure",
        "ars_nouveau:imbuement_chamber"
    ])
        .CMY()
        .build()

    new Pedestal(["ars_nouveau:arcane_core", 1],
        [
            "SFS",
            "GFG",
            "SFS"
        ],
        {
            F: "spectrum:shimmerstone_gem",
            G: "#c:ingots/gold",
            S: "ars_nouveau:sourcestone"
        }
    ).setTime(200)
        .CMY()
        .setMYC(4, 4, 4)
        .addRequiredAdvancements([
            "spectrum:build_basic_pedestal_structure",
            "spectrum:collect_shimmerstone"
        ])
        .build()

    new Pedestal(["spectrum:bottle_of_fading", 1],
        [
            "FSF",
            "PBP",
            "FSF"
        ],
        {
            F: "minecraft:fermented_spider_eye",
            B: "minecraft:glass_bottle",
            S: "spectrum:shimmerstone_gem",
            P: "minecraft:blaze_powder"
        }
    ).setTime(100)
        .addRequiredAdvancement("spectrum:unlocks/items/bottle_of_fading")
        .setId("spectrum:pedestal/tier1/bottle_of_fading")
        .build()

    new Pedestal(["spectrum:bottle_of_fading", 1],
        [
            "FSF",
            "PBP",
            "FSF"
        ],
        {
            F: "minecraft:fermented_spider_eye",
            B: "minecraft:glass_bottle",
            S: "spectrum:shimmerstone_gem",
            P: "spectrum:incandescent_essence"
        }
    ).setTime(100)
        .addRequiredAdvancement("spectrum:unlocks/items/bottle_of_fading")
        .setId("spectrum:pedestal/tier1/bottle_of_fading_essence")
        .build()

    global.SpectrumColors.forEach(color => {
        if (color == "white" || color == "gray" || color == "black" || color == "brown" || color == "light_gray") return

        event.remove(`spectrum:pedestal/tier1/saplings/${color}`)

        new Pedestal([`spectrum:${color}_sapling`, 1],
            [
                "CEC",
                "VSV",
                "CEC"
            ],
            {
                C: `#c:dyes/${color}`,
                S: "#create_feature_engineering:magic_saplings",
                V: "spectrum:vegetal",
                E: "ars_nouveau:earth_essence"
            }
        ).setTime(160)
            .CMY()
            .setGroup("colored_saplings")
            .setMYC(2, 2, 2)
            .addRequiredAdvancement(`spectrum:unlocks/colored_saplings/${color}_sapling`)
            .setId(`spectrum:pedestal/tier1/saplings/${color}`)
            .build()
    })

    new Pedestal(["spectrum:fusion_shrine_basalt", 1], [
        "BPB",
        "CMC",
        "BPB",
    ], {
        B: "spectrum:polished_basalt",
        C: "spectrum:polished_calcite",
        P: "#spectrum:pigments",
        M: "ars_nouveau:manipulation_essence"
    }).setTime(100)
        .CMY()
        .setGroup("fusion_shrines")
        .setMYC(4, 4, 4)
        .addRequiredAdvancement("spectrum:unlocks/blocks/fusion_shrine")
        .setId("spectrum:pedestal/tier2/fusion_shrine_basalt")
        .build()

    new Pedestal(["spectrum:fusion_shrine_calcite", 1], [
        "CPC",
        "CMC",
        "CPC",
    ], {
        C: "spectrum:polished_calcite",
        P: "#spectrum:pigments",
        M: "ars_nouveau:manipulation_essence"
    }).setTime(100)
        .CMY()
        .setGroup("fusion_shrines")
        .setMYC(4, 4, 4)
        .addRequiredAdvancement("spectrum:unlocks/blocks/fusion_shrine")
        .setId("spectrum:pedestal/tier2/fusion_shrine_calcite")
        .build()

    let brown_black = [
        "black",
        "brown"
    ].forEach(color => {
        event.remove(`spectrum:pedestal/tier1/saplings/${color}`)

        new Pedestal([`spectrum:${color}_sapling`, 1],
            [
                "CEC",
                "VSV",
                "CEC"
            ],
            {
                C: `#c:dyes/${color}`,
                S: "#create_feature_engineering:magic_saplings",
                V: "spectrum:vegetal",
                E: "ars_nouveau:earth_essence"
            }
        ).setTime(160)
            .setGroup("colored_saplings")
            .setMYCB(2, 2, 2, 2)
            .addRequiredAdvancement(`spectrum:unlocks/colored_saplings/${color}_sapling`)
            .setId(`spectrum:pedestal/tier1/saplings/${color}`)
            .build()
    })

    new Pedestal(["ars_nouveau:mycelial_sourcelink", 4],
        [
            " S ",
            "GFG",
            " S "
        ],
        {
            S: "ars_nouveau:source_gem",
            G: "minecraft:gold_ingot",
            F: "spectrum:bottle_of_fading"
        }
    ).addRequiredAdvancements([
        "spectrum:midgame/build_advanced_pedestal_structure",
        "spectrum:craft_bottle_of_fading"
    ])
        .onyx()
        .build()

    new Pedestal(["spectrum:enchanter", 1], [
        "FLF",
        "BAB",
        "BCB",
    ], {
        C: "spectrum:polished_calcite",
        F: "spectrum:stratine_fragments",
        B: "spectrum:polished_basalt",
        A: "ars_nouveau:abjuration_essence",
        L: "minecraft:lapis_block"
    }).setTime(100)
        .CMY()
        .setMYCB(0, 4, 0, 2)
        .addRequiredAdvancement("spectrum:unlocks/blocks/enchanter")
        .setId("spectrum:pedestal/tier3/enchanter")
        .build()

    new Pedestal(["spectrum:black_hole_chest", 1], [
        "MFM",
        "CSC",
        "BBB",
    ], {
        C: "spectrum:polished_calcite",
        S: "spectrum:stratine_gem",
        F: "spectrum:stratine_fragments",
        B: "spectrum:polished_basalt",
        M: "ars_nouveau:manipulation_essence"
    }).setTime(100)
        .CMY()
        .setMYCB(4, 8, 4, 2)
        .addRequiredAdvancement("spectrum:unlocks/blocks/black_hole_chest")
        .setId("spectrum:pedestal/tier3/black_hole_chest")
        .build()

    new Pedestal(["spectrum:spirit_instiller", 1], [
        "CEC",
        "DBD",
        "ACA",
    ], {
        C: "spectrum:polished_calcite",
        D: "ars_nouveau:conjuration_essence",
        E: "sauce:anima_essence",
        B: "spectrum:polished_basalt",
        A: "spectrum:raw_azurite"
    }).setTime(100)
        .CMY()
        .setMYCB(0, 0, 0, 2)
        .addRequiredAdvancement("spectrum:unlocks/blocks/spirit_instiller")
        .setId("spectrum:pedestal/tier3/spirit_instiller")
        .build()

    event.custom({
        "type": "spectrum:fusion_shrine",
        "required_advancement": "spectrum:midgame/crumble_midnight_aberration",
        "time": 200,
        "fluid": {
            "fluid": "spectrum:midnight_solution"
        },
        "ingredients": [
            "spectrum:midnight_aberration",
            "spectrum:onyx_shard",
            "spectrum:neolith",
            "spectrum:raw_azurite",
        ],
        "result": {
            "id": "spectrum:midnight_aberration",
            "count": 16
        },
        "start_crafting_effect": "single_visual_explosion_on_shrine",
        "during_crafting_effects": [
            "nothing",
            "maybe_place_midnight_solution"
        ],
        "finish_crafting_effect": "place_midnight_solution"
    })

    let white_gray = [
        "white",
        "gray",
        "light_gray"
    ].forEach(color => {
        event.remove(`spectrum:pedestal/tier1/saplings/${color}`)

        new Pedestal([`spectrum:${color}_sapling`, 1],
            [
                "CEC",
                "VSV",
                "CEC"
            ],
            {
                C: `#c:dyes/${color}`,
                S: "#create_feature_engineering:magic_saplings",
                V: "spectrum:vegetal",
                E: "ars_nouveau:earth_essence"
            }
        ).setTime(160)
            .setGroup("colored_saplings")
            .setMYCBW(2, 2, 2, 2, 2, 2)
            .addRequiredAdvancement(`spectrum:unlocks/colored_saplings/${color}_sapling`)
            .setId(`spectrum:pedestal/tier1/saplings/${color}`)
            .build()
    })

    new Pedestal(["anvilcraft:spectral_anvil", 1], [
        "EPE",
        "RAR",
        "EPE",
    ], {
        E: "sauce:anima_essence",
        A: "#minecraft:anvil",
        R: "spectrum:radiating_ender",
        P: "spectrum:ethereal_platform"
    }).setTime(80)
        .setMYCB(4, 4, 4, 4)
        .addRequiredAdvancements([
            "spectrum:unlocks/blocks/ender_blocks",
            "spectrum:unlocks/blocks/ethereal_platform"
        ])
        .build()
})
