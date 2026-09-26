ServerEvents.recipes(event => {
    let lychee = event.recipes.lychee
    let post = PostBuilder.create()
    let contextual = ContextualBuilder.create()

    event.custom({
        "type": "lychee:item_inside",
        "item_in": "create_feature_engineering:salted_fish",
        "block_in": "minecraft:water",
        "post": [
            {
                "type": "random",
                "rolls": 1,
                "entries": [
                    {
                        "weight": 2,
                        "type": "drop_item",
                        "id": "create_feature_engineering:salted_fish"
                    },
                    {
                        "weight": 1,
                        "type": "drop_item",
                        "id": "minecraft:cod"
                    }
                ]
            },
            {
                "type": "place",
                "block": "create_feature_engineering:saline[level = 0]"
            }
        ]
    })
})