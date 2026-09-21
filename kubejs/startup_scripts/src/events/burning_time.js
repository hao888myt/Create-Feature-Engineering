ItemEvents.modification(event => {
    event.modify("anvilcraft:plywood", item => {
        item.setBurnTime(225)
    })
})
