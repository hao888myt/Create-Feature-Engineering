ServerEvents.recipes(event => {
    let { create } = event.recipes

    let removes = [
        "create:cutting/andesite_alloy"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    let recipes = [
        [Item.of("create:fluid_pipe", 4), "#c:plates/copper", false],
        [Item.of("create:shaft", 6), "#c:ingots/andesite_alloy", false],
        [Item.of("minecraft:iron_bars", 4), "#c:plates/iron", false]
    ]

    recipes.forEach(recipe => {
        create.cutting(recipe[0], Ingredient.of(recipe[1]), 125)
        removeRecipe(recipe, 2, event)
    })

    event.forEachRecipe({ type: "create:cutting" }, recipe => {
        let { json } = recipe

        let processing_time = json.get("processing_time")

        if (processing_time == 50)
            processing_time = 75
        else if (processing_time == 100)
            processing_time = 125

        event.remove(recipe.getId())
        json.remove("processing_time")
        json.add("processing_time", processing_time)
        event.custom(json).id(recipe.getId())
    })
})  
