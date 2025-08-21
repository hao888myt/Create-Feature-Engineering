ServerEvents.recipes(event => {
    event.custom({
        "type": "lychee:block_crushing",
        "falling_block": "anvilcraft:royal_anvil",
        "item_in": [
            {
                "item": "anvilcraft:cursed_gold_ingot"
            }
        ],
        "post": [
            {
                "type": "execute",
                "command": "summon minecraft:lightning_bolt"
            }
        ]
    })

    event.custom({
        "type": "lychee:block_crushing",
        "contextual": {
        "type": "location",
        "offsetY": -1,
        "predicate": {
            "block": {
                    "blocks": [
                        "anvilcraft:royal_anvil", 
                        "anvilcraft:royal_smithing_table", 
                        "anvilcraft:royal_steel_block", 
                        "anvilcraft:smooth_royal_steel_block", 
                        "anvilcraft:cut_royal_steel_block", 
                        "anvilcraft:cut_royal_steel_pillar", 
                        "anvilcraft:cut_royal_steel_slab", 
                        "anvilcraft:cut_royal_steel_stairs",
                        "anvilcraft:royal_grindstone"
                    ]
                }
            }   
        },
        "item_in": [
            {
                "item": "anvilcraft:cursed_gold_ingot"
            }
        ],
        "post": [
            {
                "type": "execute",
                "command": "summon minecraft:lightning_bolt"
            }
        ]
    })
})