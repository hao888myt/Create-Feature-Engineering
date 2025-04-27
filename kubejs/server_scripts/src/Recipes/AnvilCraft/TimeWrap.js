ServerEvents.recipes(event =>{

    /**
    * @param {string} input 输入物品
    * @param {number} input_number 物品数量
    * @param {string} result 输出物品
    * @param {number} result_number 输出数量
    */

    function timeWrap(input, input_number, result, result_number){
        let recipe = {
            "type": "anvilcraft:anvil_processing",
            "anvil_recipe_type": "timewarp",
            "icon": {
              "item": result
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
                  "count": result_number,
                  "item": result
                }
              }
            ],
            "predicates": [
              {
                "type": "has_block",
                "match_block": {
                  "blocks": [
                    "anvilcraft:corrupted_beacon"
                  ],
                  "state": {
                    "lit": "true"
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
                    "min": input_number
                  },
                  "items": [
                    input
                  ]
                },
                "offset": [
                  0.0,
                  -1.0,
                  0.0
                ]
              }
            ]
          }
        event.custom(recipe)
    }

    function timeWrapTag(input, input_number, result, result_number){
        let recipe = {
            "type": "anvilcraft:anvil_processing",
            "anvil_recipe_type": "timewarp",
            "icon": {
              "item": result
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
                  "count": result_number,
                  "item": result
                }
              }
            ],
            "predicates": [
              {
                "type": "has_block",
                "match_block": {
                  "blocks": [
                    "anvilcraft:corrupted_beacon"
                  ],
                  "state": {
                    "lit": "true"
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
                    "min": input_number
                  },
                  "tag": input
                },
                "offset": [
                  0.0,
                  -1.0,
                  0.0
                ]
              }
            ]
          }
        event.custom(recipe)
    }

    //木头转化远古木
    timeWrapTag('minecraft:logs', 1, 'quark:ancient_log', 1)
    timeWrapTag('minecraft:planks', 1, 'quark:ancient_planks', 1)

    //有机肥料转化沃土
    timeWrap('nethersdelight:soul_compost', 1, 'nethersdelight:rich_soul_soil', 1)
    timeWrap('farmersdelight:organic_compost', 1, 'farmersdelight:rich_soil', 1)

    //磁铁块还原粗磁铁
    timeWrap('anvilcraft:magnet_block', 1, 'spelunkery:raw_magnetite', 3)
})