ServerEvents.recipes(event => {
    let create = event.recipes.create

    let removes = [
        "create:crushing/netherrack"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    // 余烬面粉
    create.milling(Item.of("create:cinder_flour", 2), "minecraft:netherrack")
})
