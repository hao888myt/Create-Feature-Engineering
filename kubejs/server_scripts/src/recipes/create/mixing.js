ServerEvents.recipes(event => {
    const create = event.recipes.create

    // 纸浆
    create.mixing(Item.of("create:pulp", 4), [Item.of("anvilcraft:wood_fiber", 2), Fluid.of("minecraft:water", 250)])

    //植本质
    create.mixing(Item.of("create:tree_fertilizer", 8), [Item.of("minecraft:bone_meal", 4), "spectrum:vegetal"])

    // 液态数字
    create.mixing(Fluid.of("create_feature_engineering:liquid_number", 1000), [Ingredient.of("#create_feature_engineering:numbers", 8), Fluid.of("minecraft:water", 1000)])

    // 电解水
    create.mixing([Fluid.of("create_feature_engineering:hydrogen", 500), Fluid.of("create_feature_engineering:oxygen", 250), "anvilcraft:capacitor_empty"], [Fluid.of("minecraft:water", 500), "anvilcraft:capacitor"])
})