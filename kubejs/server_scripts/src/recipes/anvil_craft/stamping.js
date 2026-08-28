ServerEvents.recipes((event) => {
    event.custom({
        "type": "anvilcraft:stamping",
        "ingredients": [
            {
                "items": "create:pulp"
            }
        ],
        "results": [
            {
                "id": "create:cardboard"
            }
        ]
    })
});
