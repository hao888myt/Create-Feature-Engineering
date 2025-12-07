ServerEvents.recipes(event => {
    const create = event.recipes.create

    // 纸浆
    create.mixing(Item.of("create:pulp", 4), [Item.of("anvilcraft:wood_fiber", 2), Fluid.of("minecraft:water", 250)])

    // 熔融钢
    create.mixing(Fluid.of("createmetallurgy:molten_steel", 180), [Item.of("minecraft:coal", 3), Fluid.of("createmetallurgy:molten_iron", 360)]).heated()

    //植本质
    create.mixing(Item.of("create:tree_fertilizer", 8), [Item.of("minecraft:bone_meal", 4), "spectrum:vegetal"])

    // 矿石饲料
    create.mixing([
        Item.of("kubejs:ore_feed", 16),
        Item.of("kubejs:ore_feed", 8).withChance(0.5)],
        [
            Item.of("minecraft:coal", 4),
            Item.of("spelunkery:rough_cinnabar", 2),
            Item.of("create:crushed_raw_iron", 2),
            Item.of("spelunkery:rough_lazurite", 10),
            Item.of("create:crushed_raw_copper", 2),
            Item.of("minecraft:glow_berries", 4)
        ])

    // 液态数字
    create.mixing(Fluid.of("kubejs:liquid_number", 1000), ["8x #kubejs:number", Fluid.of("minecraft:water", 1000)])

    // 电解水
    create.mixing([Fluid.of("kubejs:hydrogen", 500), Fluid.of("kubejs:oxygen", 250), "anvilcraft:capacitor_empty"], [Fluid.of("minecraft:water", 500, "anvilcraft:capacitor")])
})