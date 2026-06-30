ServerEvents.recipes(event => {
    let create = event.recipes.create

    let removes = [
        "create:crushing/netherrack"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    // 余烬面粉
    create.milling(Item.of("create:cinder_flour", 2), "minecraft:netherrack", 140)

    event.forEachRecipe({ type: "create:milling" }, recipe => {
        let { json } = recipe

        let processing_time = json.get("processing_time")

        processing_time = 140

        event.remove(recipe.getId())
        json.remove("processing_time")
        json.add("processing_time", processing_time)
        event.custom(json).id(recipe.getId())
    })
})
