ServerEvents.recipes(event => {
    let ars_nouveau = event.recipes.ars_nouveau

    let removes = [
        "ars_nouveau:cobblestone",
        "ars_nouveau:stone"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    let crushes = [
        ["spectrum:frostbite_crystal", Item.of("spectrum:frostbite_essence", 16)],
        ["spectrum:blazing_crystal", Item.of("spectrum:incandescent_essence", 16)],
        ["minecraft:andesite", "anvilcraft:cinerite"],
        ["minecraft:granite", "minecraft:red_sand"],
        ["minecraft:diorite", "anvilcraft:quartz_sand"],
        ["#c:cobblestones", "minecraft:gravel"],
        ["minecraft:gravel", "minecraft:sand"],
        ["minecraft:end_stone", "anvilcraft:end_dust"],
        ["minecraft:netherrack", "anvilcraft:nether_dust"]
    ].forEach(crush => {
        ars_nouveau.crush(
            crush[0],
            [
                {
                    stack: crush[1],
                    chance: 1.0
                }
            ]
        )
    })
})
