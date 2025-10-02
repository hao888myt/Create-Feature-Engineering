ServerEvents.recipes(event => {

    // 水晶核心
    event.custom({
        "type": "anvilcraft:anvil_processing",
        "anvil_recipe_type": "stamping",
        "icon": {
            "item": 'kubejs:crystal_core'
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
                    "item": 'kubejs:crystal_core'
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

    // 树脂
    event.remove("anvilcraft:stamping/logs_2_wood_fiber")
    event.custom({
        "type": "anvilcraft:anvil_processing",
        "anvil_recipe_type": "stamping",
        "icon": {
            "item": "anvilcraft:wood_fiber"
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
                    "item": "anvilcraft:wood_fiber"
                }
            },
            {
                "type": "spawn_item",
                "chance": 0.25,
                "offset": [
                    0.0,
                    -0.75,
                    0.0
                ],
                "result": {
                    "item": "anvilcraft:resin"
                }
            }
        ],
        "predicates": [
            {
                "type": "has_block",
                "match_block": {
                    "blocks": [
                        "anvilcraft:stamping_platform"
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
                    "tag": "forge:stripped_logs"
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

// 光谱配方转化
ServerEvents.recipes((event) => {
    let removes =[
        "spectrum:anvil_crushing/crystallarieum_growables/coal_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/copper_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/iron_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/gold_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/redstone_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/lapis_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/diamond_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/emerald_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/netherite_scrap_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/quartz_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/prismarine_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/glowstone_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/echo_shard_from_buds",
        "spectrum:anvil_crushing/bismuth/bismuth_from_buds"
    ]
    removes.forEach((remove) => {
        event.remove(remove)
    })

    event.forEachRecipe({ type: "spectrum:anvil_crushing" }, (recipe) => {
        const { json } = recipe;
        // console.log(recipe.getId());

        const result = json.get("result")
        const result_item = result.get("item")
        // console.log(result_item);
        var result_count = result.get("count")
        if (result_count == null) result_count = 1

        const ingredient = json.get("ingredient")
        var ingredient_item = ingredient.get("item")
        var ingredient_tag = ingredient.get("tag")
        // if (ingredient_item != null) console.log(ingredient_item);
        // if (ingredient_tag != null) console.log(ingredient_tag);


        if (ingredient_tag != null) {
            event.custom({
                "type": "anvilcraft:anvil_processing",
                "anvil_recipe_type": "stamping",
                "icon": {
                    "item": result_item
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
                            "count": result_count,
                            "item": result_item
                        }
                    }
                ],
                "predicates": [
                    {
                        "type": "has_block",
                        "match_block": {
                            "blocks": [
                                "anvilcraft:stamping_platform"
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
                            "tag": ingredient_tag
                        },
                        "offset": [
                            0.0,
                            -0.75,
                            0.0
                        ]
                    }
                ]
            })
            console.log(recipe.getId() + `使用tag ${ingredient_tag}`);
        }
        else {
            event.custom({
                "type": "anvilcraft:anvil_processing",
                "anvil_recipe_type": "stamping",
                "icon": {
                    "item": result_item
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
                            "count": result_count,
                            "item": result_item
                        }
                    }
                ],
                "predicates": [
                    {
                        "type": "has_block",
                        "match_block": {
                            "blocks": [
                                "anvilcraft:stamping_platform"
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
                                ingredient_item
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
        }
    })
    event.remove({ type: "spectrum:anvil_crushing" });
});