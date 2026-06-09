ServerEvents.recipes(event => {
    const vintageimprovements = event.recipes.vintageimprovements
    // 焦炭
    // vintageimprovements.pressurizing(Item.of("createmetallurgy:coke").withChance(0.75), 
    // "minecraft:coal").heated()

    // 润滑油
    vintageimprovements.pressurizing(Fluid.of("create_feature_engineering:lubricant", 50),
        Fluid.of("create_feature_engineering:heavy_oil", 100)).heated()

    // 单晶硅板
    vintageimprovements.pressurizing(CreateItem.of("create_feature_engineering:silicon_plate", 0.5),
        Ingredient.of("#spectrum:gemstone_clusters")).heated()

    // 金属冷却
    let metals = [
        "iron",
        "gold",
        "copper",
        "zinc",
        "brass",
        "tungshen",
        "steel",
        "netherite",
        "aluminum",
        "lead",
        "sliver",
        "tin",
        "obdurium",
        "electrum",
        "bronze"
    ]
    // metals.forEach(metal => {
    //     vintageimprovements.pressurizing(`3x #forge:ingots/${metal}`,
    //         [
    //             Fluid.of(`createmetallurgy:molten_${metal}`, 270),
    //             Fluid.of("fluid:powder_snow", 50)
    //         ], 80).secondaryFluidInput(1)
    // })
})
