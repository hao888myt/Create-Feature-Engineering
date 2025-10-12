ServerEvents.recipes(event => {
    const vintageimprovements = event.recipes.vintageimprovements
    // 焦炭
    vintageimprovements.pressurizing(Item.of("createmetallurgy:coke").withChance(0.75), 
    "minecraft:coal").heated()

    // 润滑油
    vintageimprovements.pressurizing(Fluid.of("kubejs:lubricant", 50), 
    Fluid.of("kubejs:heavy_oil", 100)).heated()

    // 单晶硅板
    vintageimprovements.pressurizing(Item.of("kubejs:silicon_plate").withChance(0.5), 
    "#spectrum:gemstone_clusters").heated()
})