ServerEvents.recipes(event => {
    const farmersdelight = event.recipes.farmersdelight
    farmersdelight.cutting("spectrum:glistering_melon", Item.of("minecraft:glistering_melon_slice"), 9)
})