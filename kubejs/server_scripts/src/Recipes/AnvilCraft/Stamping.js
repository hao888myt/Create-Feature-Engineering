ServerEvents.recipes(event => {


    event.custom({
        "type": "anvilcraft:anvil_processing",
        "anvil_recipe_type": "stamping",
        "icon": {
            "item": 'kubejs:crystal_mechanism'
        },
        "outcomes": [
            {
                "type": "spawn_item",
                "chance": 1.0,
                "offset": [
                    0.0,
                    -0.75,
                    0.0
                ],
                "result": {
                    "count": 1,
                    "item": 'kubejs:crystal_mechanism'
                }
            }
        ],
        "predicates": [
            {
                "type": "has_block",
                "match_block": {
                    "blocks": [
                        'anvilcraft:stamping_platform'
                    ]
                },
                "offset": [
                    0.0,
                    -1.0,
                    0.0
                ]
            },
            {
                "type": "has_item_ingredient",
                "match_item": {
                    "count": {
                    "min": 1
                    },
                    "items": [
                    'spectrum:topaz_shard'
                    ]
                },
                "offset": [
                    0.0,
                    -0.75,
                    0.0
                ]
            },
            {
                "type": "has_item_ingredient",
                "match_item": {
                    "count": {
                    "min": 1
                    },
                    "items": [
                    'spectrum:citrine_shard'
                    ]
                },
                "offset": [
                    0.0,
                    -0.75,
                    0.0
                ]
            },
            {
                "type": "has_item_ingredient",
                "match_item": {
                    "count": {
                    "min": 1
                    },
                    "items": [
                    'minecraft:amethyst_shard'
                    ]
                },
                "offset": [
                    0.0,
                    -0.75,
                    0.0
                ]
            },
            {
                "type": "has_item_ingredient",
                "match_item": {
                    "count": {
                    "min": 1
                    },
                    "items": [
                    'spectrum:polished_calcite_slab'
                    ]
                },
                "offset": [
                    0.0,
                    -0.75,
                    0.0
                ]
            }
        ]
    })
})