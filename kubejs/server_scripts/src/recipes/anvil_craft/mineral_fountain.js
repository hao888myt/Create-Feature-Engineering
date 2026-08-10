ServerEvents.recipes(event => {
    let { anvilcraft } = event.recipes

    let removes = [
        "anvilcraft:mineral_fountain_chance/void_stone_from_overworld",
        "anvilcraft:mineral_fountain_chance/void_stone_from_the_end"
    ].forEach(recipe => {
        event.remove(recipe)
    })
})