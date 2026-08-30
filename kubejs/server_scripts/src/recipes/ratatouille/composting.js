ServerEvents.recipes(event => {
    let removes = [
        "ratatouille:composting/composting"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    event.custom({
        "type": "ratatouille:composting",
        "ingredients": [
            {
                "item": "ratatouille:compost_mass"
            }
        ],
        "processing_time": 200,
        "results": [
            {
                "amount": 100,
                "id": "ratatouille:compost_residue_fluid"
            },
            {
                "amount": 50,
                "id": "ratatouille:compost_tea"
            },
            {
                "amount": 25,
                "id": "ratatouille:bio_gas"
            }
        ]
    })
})