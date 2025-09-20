ServerEvents.recipes(event =>{
    //皇家钢锭
    event.remove('anvilcraft:heating/iron_ingot_diamond_amethyst_shard_anvilcraft_gems_to_royal_steel_ingot')
    event.custom({
        "type": "anvilcraft:anvil_processing",
        "anvil_recipe_type": "super_heating",
        "icon": {
          "item": 'anvilcraft:royal_steel_ingot'
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
              "count": 3,
              "item": 'anvilcraft:royal_steel_ingot'
            }
          }
        ],
        "predicates": [
          {
            "type": "has_block",
            "match_block": {
              "blocks": [
                "anvilcraft:heater"
              ],
              "state": {
                "overload": "false"
              }
            },
            "offset": [
              0.0,
              -2.0,
              0.0
            ]
          },
          {
            "type": "has_block",
            "match_block": {
              "blocks": [
                "minecraft:cauldron"
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
                'spectrum:citrine_shard'
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
              "tag": 'forge:gems/amethyst'
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
                'minecraft:diamond'
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
              "tag": 'anvilcraft:gems'
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
              "tag": 'forge:ingots/overcharge_alloy'
            },
            "offset": [
              0.0,
              -1.0,
              0.0
            ]
          }
        ]
      })
    

    let dust_to_ingot = [
        ["forge:dusts/iron", "minecraft:iron_ingot"],
        ["forge:dusts/gold", "minecraft:gold_ingot"],
        ["forge:dusts/copper", "minecraft:copper_ingot"],
        ["forge:dusts/zinc", "create:zinc_ingot"],
        ["forge:dusts/tungsten", "anvilcraft:tungsten_ingot"],
    ]
    dust_to_ingot.forEach(pair => {
        event.custom({
            "type": "anvilcraft:anvil_processing",
            "anvil_recipe_type": "super_heating",
            "icon": {
              "item": pair[1]
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
                  "count": 2,
                  "item": pair[1]
                }
              }
            ],
            "predicates": [
              {
                "type": "has_block",
                "match_block": {
                  "blocks": [
                    "anvilcraft:heater"
                  ],
                  "state": {
                    "overload": "false"
                  }
                },
                "offset": [
                  0.0,
                  -2.0,
                  0.0
                ]
              },
              {
                "type": "has_block",
                "match_block": {
                  "blocks": [
                    "minecraft:cauldron"
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
                  "tag": pair[0]
                },
                "offset": [
                  0.0,
                  -1.0,
                  0.0
                ]
              }
            ]
          })
    })
})