ServerEvents.recipes(event => {
    const create = event.recipes.create

    // 磁流核电子管
    create.deploying(Item.of("create:electron_tube", 8), ["alexscaves:telecore", "create:polished_rose_quartz"])
})