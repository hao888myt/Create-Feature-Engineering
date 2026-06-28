ServerEvents.recipes(event => {
    let create = event.recipes.create

    let removes = [
        "create:splashing/sand",
        "create:splashing/red_sand",
        "create:splashing/gravel",
        "create:splashing/soul_sand",

        "create:splashing/ice",
        "create:splashing/magma_block"
    ].forEach(remove => {
        event.remove(remove)
    })

    let recipes = [
        ["minecraft:quartz", "anvilcraft:quartz_sand", false]
    ]

    recipes.forEach(recipe => {
        create.splashing(recipe[0], Ingredient.of(recipe[1]))
        removeRecipe(recipe, 2, event)
    })
})
