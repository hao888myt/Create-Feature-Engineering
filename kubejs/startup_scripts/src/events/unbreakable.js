ItemEvents.modification(event => {
    let unbreakable = [
        "anvilcraft:magnet",
        "waystones:warp_stone"
    ]

    unbreakable.forEach(id => {
        event.modify(id, item => {
            item.setUnbreakable()
        })
    })
})
