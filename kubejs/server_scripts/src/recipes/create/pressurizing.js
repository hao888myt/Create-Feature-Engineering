ServerEvents.recipes(event => {
    let vintageimprovements = event.recipes.vintageimprovements
    // 润滑油
    vintageimprovements.pressurizing(Fluid.of("create_feature_engineering:lubricant", 50),
        Fluid.of("create_feature_engineering:heavy_oil", 100)).heated()

    // 单晶硅板
    vintageimprovements.pressurizing(CreateItem.of("create_feature_engineering:silicon_sheet", 0.5),
        Ingredient.of("#spectrum:gemstone_clusters")).heated()

    // 黑曜石
    vintageimprovements.pressurizing(Item.of("minecraft:obsidian", 2),
        [
            Fluid.of("minecraft:lava", 500),
            Fluid.of("minecraft:water", 500)
        ])
})
