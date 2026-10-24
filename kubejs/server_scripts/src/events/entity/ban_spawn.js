EntityEvents.spawned(event => {
    let ban = [
        "alexsmobs:fly",
        "alexsmobs:crimson_mosquito",
        "alexsmobs:centipede",
        "alexsmobs:cockroach",
        "alexsmobs:murmur",
        "alexsmobs:skreecher",
        "alexsmobs:tarantula_hawk",
        "alexsmobs:cachalot_whale",
        "alexsmobs:soul_vulture",
    ]

    let id = event.getEntity().type

    ban.forEach(entity => {
        if (entity == id)
            event.cancel()
    })
})