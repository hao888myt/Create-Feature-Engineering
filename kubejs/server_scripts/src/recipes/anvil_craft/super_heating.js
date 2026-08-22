ServerEvents.recipes(event => {
    let removes = [
        "anvilcraft:super_heating/royal_steel_block_base",
        "anvilcraft:super_heating/royal_steel_block_bonus_1",
        "anvilcraft:super_heating/royal_steel_block_bonus_2",
        "anvilcraft:super_heating/royal_steel_ingot_base",
        "anvilcraft:super_heating/royal_steel_ingot_bonus_1",
        "anvilcraft:super_heating/royal_steel_ingot_bonus_2"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    global.SuperHeating.forEach(items => {
        event.custom({
            "type": "anvilcraft:super_heating",
            "ingredients": [
                {
                    "count": 8,
                    "items": items[0]
                },
                {
                    "items": "anvilcraft:earth_core_shard"
                },
            ],
            "results": [
                {
                    "count": 24,
                    "id": items[1]
                }
            ]
        })
    })
})