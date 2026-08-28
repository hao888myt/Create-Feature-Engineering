ServerEvents.recipes(event => {
    let create = event.recipes.create

    let removes = [
        "create:crafting/kinetics/chain_conveyor",
        "create:mixing/brass_ingot",

        "createaddition:mixing/bioethanol"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    // 传动研究包
    create.mixing(Item.of('researchd:research_pack[researchd:research_pack="create_feature_engineering:conveying"]'), [
        Item.of("create:shaft", 1),
        Item.of("create:cogwheel", 1),
        Item.of("create:large_cogwheel", 1)
    ]).id(`${global.ModPackId}:conveying`)

    // 物流研究包
    create.mixing(Item.of('researchd:research_pack[researchd:research_pack="create_feature_engineering:logistics"]'), [
        "create:cardboard_block",
        "create:belt_connector",
        "create:andesite_funnel"
    ]).id(`${global.ModPackId}:logistics`)

    // 传送带
    create.mixing(Item.of("create:belt_connector"), [
        Item.of("minecraft:dried_kelp"),
        Ingredient.of("#neoforge:rubber")
    ])

    // 锁链传动轮
    create.mixing(Item.of("create:chain_conveyor", 3), [
        Item.of("create:shaft", 3),
        Item.of("minecraft:chain", 3),
        Item.of("create:andesite_casing")
    ])

    // 板条箱
    let crates = [
        ["create_fantasizing:andesite_crate", "create:andesite_casing"],
        ["create_fantasizing:brass_crate", "create:brass_casing"],
        ["create_fantasizing:sturdy_crate", "create:railway_casing"],
        ["create_fantasizing:copper_fluid_barrel", "create:copper_casing"],
        ["create_fantasizing:zinc_fluid_barrel", "create_fantasizing:zinc_casing"],
        ["create_fantasizing:gold_fluid_barrel", "create_fantasizing:gold_casing"],
        ["create_fantasizing:diamond_fluid_barrel", "create_fantasizing:diamond_casing"],
    ].forEach(crate => {
        create.mixing(Item.of(crate[0], 3), Item.of(crate[1], 3))
    })
    create.mixing(Item.of("create_fantasizing:iron_crate", 8), Item.of("create:item_vault", 4))

    // 熔融钢
    create.mixing(Fluid.of("create_feature_engineering:molten_steel", 90), [
        Item.of("minecraft:coal"),
        Fluid.of("create_feature_engineering:molten_iron", 180)
    ]).heated()

    // 黄铜
    create.mixing(Fluid.of("create_feature_engineering:molten_brass", 180), [
        Fluid.of("create_feature_engineering:molten_zinc", 90),
        Fluid.of("create_feature_engineering:molten_copper", 90)
    ])
    create.mixing("create:brass_ingot", ["create:zinc_ingot", "minecraft:copper_ingot"]).heated()

    // 纸浆
    create.mixing(Item.of("create:pulp", 4), [Item.of("anvilcraft:wood_fiber", 2), Fluid.of("minecraft:water", 250)])

    // 液态数字
    create.mixing(Fluid.of("create_feature_engineering:liquid_number", 1000), [Ingredient.of("#create_feature_engineering:numbers", 8), Fluid.of("minecraft:water", 1000)])

    // 电解水
    create.mixing([Fluid.of("create_feature_engineering:hydrogen", 500), Fluid.of("create_feature_engineering:oxygen", 250), "anvilcraft:capacitor_empty"], [Fluid.of("minecraft:water", 500), "anvilcraft:capacitor"])
})
