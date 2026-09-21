ServerEvents.recipes(event => {
    let removes = [
        "anvilcraft:item_compress/plywood"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    event.custom({
        "type": "anvilcraft:item_compress",
        "ingredients": [
            {
                "count": 2,
                "items": "anvilcraft:wood_fiber"
            },
            {
                "items": "anvilcraft:resin"
            }
        ],
        "results": [
            {
                "count": 8,
                "id": "anvilcraft:plywood"
            }
        ]
    })
})
