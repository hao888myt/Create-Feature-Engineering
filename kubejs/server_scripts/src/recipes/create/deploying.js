ServerEvents.recipes(event => {
    let create = event.recipes.create

    let recipes = [
        [Item.of("create:andesite_funnel", 2), "#c:ingots/andesite", "minecraft:dried_kelp", false]
    ]
    recipes.forEach(recipe => {
        create.deploying(recipe[0], [Ingredient.of(recipe[1]), Ingredient.of(recipe[2])])
        removeRecipe(recipe, 3, event)
    })
})
