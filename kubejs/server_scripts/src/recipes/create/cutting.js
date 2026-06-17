ServerEvents.recipes(event => {
    let { create } = event.recipes

    let recipes = [
        [Item.of("create:fluid_pipe", 4), "#c:plates/copper", false],
        [Item.of("create:shaft", 6), "#c:ingots/andesite"]
    ]

    recipes.forEach(recipe => {
        create.cutting(recipe[0], Ingredient.of(recipe[1]))
        removeRecipe(recipe, 2, event)
    })
})
