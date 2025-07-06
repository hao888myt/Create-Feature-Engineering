ItemEvents.modification((event) => {
    event.modify("supplementaries:wrench", (item) => {
        item.maxDamage = -1
    })
})