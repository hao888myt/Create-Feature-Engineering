ItemEvents.modification(event => {
    let unbreakable = [
        "anvilcraft:magnet"
    ]

    unbreakable.forEach(id => {
        event.modify(id, item => {
            item.setUnbreakable()
        })
    })
})
