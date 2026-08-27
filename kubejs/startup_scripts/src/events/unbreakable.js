ItemEvents.modification(event => {
    let unbreakable = [
        "anvilcraft:magnet",
        "waystones:warp_stone",
        "ars_nouveau:dowsing_rod"
    ].forEach(id => {
        event.modify(id, item => {
            item.setUnbreakable()
        })
    })
})
