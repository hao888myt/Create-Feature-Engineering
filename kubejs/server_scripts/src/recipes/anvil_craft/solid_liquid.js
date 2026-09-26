ServerEvents.recipes(event => {
    event.custom({
        "type": "anvilcraft:solid_liquid",
        "consume": 250,
        "fluid": "create_feature_engineering:saline",
        "ingredients": [
            { "items": "#minecraft:fishes" },
        ],
        "results": [
            { "id": "create_feature_engineering:salted_fish" }
        ]
    })
})
