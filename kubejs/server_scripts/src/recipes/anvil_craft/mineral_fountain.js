ServerEvents.recipes(event => {
    let removes = [
        "anvilcraft:mineral_fountain_replacement/void_stone_from_overworld",
        "anvilcraft:mineral_fountain_replacement/void_stone_from_the_end",
        "anvilcraft:mineral_fountain_replacement/earth_core_shard_ore_from_overworld",

        "anvilcraft:mineral_fountain_active/deepslate_zinc_ore"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    event.custom({
        "type": "anvilcraft:mineral_fountain_active",
        "around": [
            {
                "block": {
                    "blocks": "#c:storage_blocks/raw_zinc"
                },
                "count": 4
            }
        ],
        "from_block": {
            "blocks": "minecraft:deepslate"
        },
        "to_block": {
            "block": "create:deepslate_zinc_ore"
        }
    })
})