ServerEvents.recipes(event => {
    let create = event.recipes.create

    let removes = [
        "create:crafting/kinetics/chain_conveyor"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    // 传动研究包
    create.mixing(Item.of('researchd:research_pack[researchd:research_pack="create_feature_engineering:conveying"]', 2), [
        Item.of("create:shaft", 2),
        Item.of("create:cogwheel", 2),
        Item.of("create:large_cogwheel", 2),
        Item.of("create:andesite_casing")
    ]).id(`${global.ModPackId}:conveying`)

    // 物流研究包
    create.mixing(Item.of('researchd:research_pack[researchd:research_pack="create_feature_engineering:logistics"]', 4), [
        "create:cardboard_block",
        "create:belt_connector",
        "create:chain_conveyor",
        "create:andesite_funnel"
    ]).id(`${global.ModPackId}:logistics`)

    // 传送带
    create.mixing(Item.of("create:belt_connector"), [
        Item.of("minecraft:dried_kelp"),
        Ingredient.of("#neoforge:rubber")
    ])

    // 锁链传动轮
    create.mixing(Item.of("create:chain_conveyor", 2), [
        Item.of("create:shaft", 3),
        Item.of("minecraft:chain", 3),
        Item.of("create:andesite_casing")
    ])

    // 熔融钢
    create.mixing(Fluid.of("create_feature_engineering:molten_steel", 90), [
        Item.of("minecraft:coal"),
        Fluid.of("create_feature_engineering:molten_iron", 180)
    ]).heated()

    // 纸浆
    create.mixing(Item.of("create:pulp", 4), [Item.of("anvilcraft:wood_fiber", 2), Fluid.of("minecraft:water", 250)])

    // 液态数字
    create.mixing(Fluid.of("create_feature_engineering:liquid_number", 1000), [Ingredient.of("#create_feature_engineering:numbers", 8), Fluid.of("minecraft:water", 1000)])

    // 电解水
    create.mixing([Fluid.of("create_feature_engineering:hydrogen", 500), Fluid.of("create_feature_engineering:oxygen", 250), "anvilcraft:capacitor_empty"], [Fluid.of("minecraft:water", 500), "anvilcraft:capacitor"])
})
