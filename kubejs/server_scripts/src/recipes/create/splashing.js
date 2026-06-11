ServerEvents.recipes(event => {
    let create = event.recipes.create

    let removes = [
        "create:splashing/sand",
        "create:splashing/red_sand",
        "create:splashing/gravel",
        "create:splashing/soul_sand",

        "create:splashing/ice",
        "create:splashing/magma_block"
    ]

    removes.forEach(remove => {
        event.remove(remove)
    })
})
