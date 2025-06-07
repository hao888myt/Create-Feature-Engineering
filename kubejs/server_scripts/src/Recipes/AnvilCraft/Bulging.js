ServerEvents.recipes(event =>{
    function BulgingCrystal(modid, mateirial){
        event.custom({
        "type": "anvilcraft:anvil_processing",
        "anvil_recipe_type": "bulging",
        "icon": {
            "item": `${modid}:small_${mateirial}_bud`
        },
        "outcomes": [
            {
            "type": "spawn_item",
            "chance": 1.0,
            "offset": [
                0.0,
                -1.0,
                0.0
            ],
            "result": {
                "item": `${modid}:small_${mateirial}_bud`
            }
            }
        ],
        "predicates": [
            {
            "type": "has_fluid_cauldron",
            "deplete": 0,
            "match_block": "minecraft:water_cauldron",
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
                `${modid}:${mateirial}_shard`
                ]
            },
            "offset": [
                0.0,
                -1.0,
                0.0
            ]
            }
        ]
    })
    event.custom({
        "type": "anvilcraft:anvil_processing",
        "anvil_recipe_type": "bulging",
        "icon": {
            "item": `${modid}:medium_${mateirial}_bud`
        },
        "outcomes": [
            {
            "type": "spawn_item",
            "chance": 1.0,
            "offset": [
                0.0,
                -1.0,
                0.0
            ],
            "result": {
                "item": `${modid}:medium_${mateirial}_bud`
            }
            }
        ],
        "predicates": [
            {
            "type": "has_fluid_cauldron",
            "deplete": 0,
            "match_block": "minecraft:water_cauldron",
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
                `${modid}:small_${mateirial}_bud`
                ]
            },
            "offset": [
                0.0,
                -1.0,
                0.0
            ]
            }
        ]
    })
    event.custom({
        "type": "anvilcraft:anvil_processing",
        "anvil_recipe_type": "bulging",
        "icon": {
            "item": `${modid}:large_${mateirial}_bud`
        },
        "outcomes": [
            {
            "type": "spawn_item",
            "chance": 1.0,
            "offset": [
                0.0,
                -1.0,
                0.0
            ],
            "result": {
                "item": `${modid}:large_${mateirial}_bud`
            }
            }
        ],
        "predicates": [
            {
            "type": "has_fluid_cauldron",
            "deplete": 0,
            "match_block": "minecraft:water_cauldron",
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
                `${modid}:medium_${mateirial}_bud`
                ]
            },
            "offset": [
                0.0,
                -1.0,
                0.0
            ]
            }
        ]
    })
    event.custom({
        "type": "anvilcraft:anvil_processing",
        "anvil_recipe_type": "bulging",
        "icon": {
            "item": `${modid}:${mateirial}_cluster`
        },
        "outcomes": [
            {
            "type": "spawn_item",
            "chance": 1.0,
            "offset": [
                0.0,
                -1.0,
                0.0
            ],
            "result": {
                "item": `${modid}:${mateirial}_cluster`
            }
            }
        ],
        "predicates": [
            {
            "type": "has_fluid_cauldron",
            "deplete": 0,
            "match_block": "minecraft:water_cauldron",
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
                `${modid}:large_${mateirial}_bud`
                ]
            },
            "offset": [
                0.0,
                -1.0,
                0.0
            ]
            }
        ]
    })
    }

    // 水晶膨发
    BulgingCrystal("minecraft", "amethyst")
    BulgingCrystal("spectrum", "topaz")
    BulgingCrystal("spectrum", "citrine")
})