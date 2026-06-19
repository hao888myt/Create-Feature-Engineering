ServerEvents.recipes(event => {
    let ars_nouveau = event.recipes.ars_nouveau

    // 霜冻水晶粉碎
    ars_nouveau.crush(
        "spectrum:frostbite_crystal",
        [
            {
                stack: Item.of("spectrum:frostbite_essence", 16),
                chance: 1.0,
            }
        ]
    )

    // 炽热水晶粉碎
    ars_nouveau.crush(
        "spectrum:blazing_crystal", // input block
        [
            {
                stack: Item.of("spectrum:incandescent_essence", 16),
                chance: 1.0,
            }
        ]
    )
})
