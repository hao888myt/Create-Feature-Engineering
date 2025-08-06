ItemEvents.modification((event) => {
    let unbreakable_items = [
        "supplementaries:wrench",
        "usefulslime:slime_sling",
        "anvilcraft:magnet"
    ]

    unbreakable_items.forEach(item => {
        event.modify(item, (item) => {
            item.maxDamage = -1
        })
    })
})