ServerEvents.recipes(event => {
    let create = event.recipes.create

    // 树皮压纸
    create.pressing(Item.of("minecraft:paper"), Item.of("farmersdelight:tree_bark"))
})
