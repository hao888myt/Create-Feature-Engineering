ServerEvents.recipes(event => {
    const vintageimprovements = event.recipes.vintageimprovements
    vintageimprovements.pressurizing(Item.of("createmetallurgy:coke").withChance(0.75), "minecraft:coal").heated()
})