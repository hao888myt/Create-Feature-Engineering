ServerEvents.recipes(event => {
    const vintageimprovements = event.recipes.vintageimprovements
    // 焦炭配方
    vintageimprovements.pressurizing(Item.of("createmetallurgy:coke").withChance(0.75), 
    "minecraft:coal").heated()

    // 润滑油
    vintageimprovements.pressurizing(Fluid.of("kubejs:lubricant", 50), 
    Fluid.of("createdieselgenerators:diesel", 100)).heated()
})