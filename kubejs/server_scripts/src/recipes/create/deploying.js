ServerEvents.recipes(event => {
    let create = event.recipes.create

    let removes = [
        "create:crafting/logistics/factory_gauge",
        "create:crafting/logistics/redstone_requester"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    let recipes = [
        [Item.of("create:andesite_funnel", 2), "#c:ingots/andesite_alloy", "minecraft:dried_kelp", false],

        ["create:fluid_tank", "create_fantasizing:andesite_crate", "#c:plates/copper", false],
        ["create:item_vault", "create_fantasizing:andesite_crate", "#c:plates/iron", false],
        ["ratatouille:compost_tower", "create_fantasizing:andesite_crate", "#c:plates/zinc", false],

        ["create:transmitter", "#vintageimprovements:springs/copper", "minecraft:redstone"],

        [Item.of("create:factory_gauge", 4), "create:precision_mechanism", "create:stock_link",],
        [Item.of("create:redstone_requester", 4), "create:item_vault", "create:stock_link",],

        ["fluidlogistics:multi_fluid_tank", "create_fantasizing:andesite_crate", "#c:plates/brass", false]
    ]
    recipes.forEach(recipe => {
        create.deploying(recipe[0], [Ingredient.of(recipe[1]), Ingredient.of(recipe[2])])
        removeRecipe(recipe, 3, event)
    })
})
