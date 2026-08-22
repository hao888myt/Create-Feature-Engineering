ServerEvents.recipes(event => {
    let removes = [
        "anvilcraft:mineral_fountain_chance/void_stone_from_overworld",
        "anvilcraft:mineral_fountain_chance/void_stone_from_the_end",
        "anvilcraft:mineral_fountain_chance/earth_core_shard_ore_from_overworld",

        "anvilcraft:mineral_fountain/deepslate_zinc_ore"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    event.custom({
        "type": "anvilcraft:mineral_fountain",
        "from_block": {
            "blocks": "minecraft:deepslate"
        },
        "need_block": {
            "blocks": "#c:storage_blocks/raw_zinc"
        },
        "to_block": {
            "block": "create:deepslate_zinc_ore"
        }
    })
})