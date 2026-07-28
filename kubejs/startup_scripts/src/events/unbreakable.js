ItemEvents.modification(event => {
    let unbreakable = [
        "anvilcraft:magnet",
        "waystones:warp_stone"
    ].forEach(id => {
        event.modify(id, item => {
            item.setUnbreakable()
        })
    })
})
