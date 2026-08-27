ServerEvents.recipes(event => {
    let create = event.recipes.create

    let removes = [
        "create:crafting/logistics/stock_link",

        "create:crafting/logistics/factory_gauge",
        "create:crafting/logistics/redstone_requester",

        "createdieselgenerators:cutting/bar_mold",
        "createdieselgenerators:cutting/bowl_mold",
        "createdieselgenerators:cutting/lines_mold",
        "createdieselgenerators:cutting/chain_mold"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    let recipes = [
        [Item.of("create:andesite_funnel", 2), "#c:ingots/andesite_alloy", "minecraft:dried_kelp", false],

        ["create:fluid_tank", "create_fantasizing:andesite_crate", "#c:plates/copper", false],
        ["create:item_vault", "create_fantasizing:andesite_crate", "#c:plates/iron", false],
        ["ratatouille:compost_tower", "create_fantasizing:andesite_crate", "#c:plates/zinc", false],

        ["create:transmitter", "#vintageimprovements:springs/copper", "minecraft:redstone"],
        [Item.of("create:stock_link", 2), "create_fantasizing:andesite_crate", "create:transmitter", false],

        [Item.of("create:factory_gauge", 4), "create:precision_mechanism", "create:stock_link",],
        [Item.of("create:redstone_requester", 4), "create:item_vault", "create:stock_link",],

        ["fluidlogistics:multi_fluid_tank", "create_fantasizing:andesite_crate", "#c:plates/brass", false],
        [Item.of("create:smart_fluid_pipe", 4), "create:fluid_pipe", "create:electron_tube"],

        ['createdieselgenerators:mold[createdieselgenerators:mold_type="kubejs:plate"]', "#c:plates/iron", "#c:plates", false],
        ['createdieselgenerators:mold[createdieselgenerators:mold_type="kubejs:nugget"]', "#c:nuggets/iron", "#c:nuggets", false],
        ['createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:bar"]', "#c:plates/iron", "#c:ingots", false],
        ['createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:bowl"]', "#c:plates/iron", "minecraft:bowl", false],
        ['createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:chain"]', "#c:plates/iron", "#c:chains", false],
        ['createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:lines"]', "#c:plates/iron", "#c:rods", false]
    ]
    recipes.forEach(recipe => {
        create.deploying(recipe[0], [Ingredient.of(recipe[1]), Ingredient.of(recipe[2])])
        removeRecipe(recipe, 3, event)
    })
})
