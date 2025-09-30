ServerEvents.recipes(event => {
    /**
    * @param {string} input 输入方块
    * @param {string} result 输出物品
    * @param {float} chance 概率
    */

    function smashLeaves(input, result, chance){
        let recipe = {
            "type": "anvilcraft:anvil_processing",
            "anvil_recipe_type": "block_smash",
            "icon": {
              "item": result
            },
            "outcomes": [
              {
                "type": "spawn_item",
                "chance": chance,
                "offset": [
                  0.0,
                  -1.0,
                  0.0
                ],
                "result": {
                  "item": result
                }
              },
              {
                "type": "set_block",
                "chance": 1.0,
                "offset": [
                  0.0,
                  -1.0,
                  0.0
                ],
                "result": {
                  "block": "minecraft:air"
                }
              }
            ],
            "predicates": [
              {
                "type": "has_block",
                "match_block": {
                  "blocks": [
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

    function smashBlock(input, result){
      let recipe ={
        "type": "anvilcraft:anvil_processing",
        "anvil_recipe_type": "block_smash",
        "icon": {
          "item": result
        },
        "outcomes": [
          {
            "type": "set_block",
            "chance": 1.0,
            "offset": [
              0.0,
              -1.0,
              0.0
            ],
            "result": {
              "block": result
            }
          }
        ],
        "predicates": [
          {
            "type": "has_block",
            "match_block": {
              "blocks": [
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

    //光谱世界树叶处理
    COLORS.forEach((color) => {
      smashLeaves(`spectrum:${color}_leaves`, `spectrum:${color}_sapling`, 0.2)
    })

    event.custom({
        "type": "anvilcraft:anvil_processing",
        "anvil_recipe_type": "block_smash",
        "icon": {
          "item": "minecraft:bedrock"
        },
        "outcomes": [
          {
            "type": "set_block",
            "chance": 1.0,
            "offset": [
              0.0,
              -1.0,
              0.0
            ],
            "result": {
              "block": "minecraft:bedrock"
            }
          }
        ],
        "predicates": [
          {
            "type": "has_block",
            "match_block": {
              "blocks": [
                "spectrum:ruin"
              ],
              "state": {
                "conversion": "default"
              }
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
        "anvil_recipe_type": "block_smash",
        "icon": {
          "item": "spectrum:stratine_ore"
        },
        "outcomes": [
          {
            "type": "set_block",
            "chance": 0.6,
            "offset": [
              0.0,
              -1.0,
              0.0
            ],
            "result": {
              "block": "spectrum:stratine_ore"
            }
          }
        ],
        "predicates": [
          {
            "type": "has_block_ingredient",
            "match_block": {
              "blocks": [
                "kubejs:stradpole_skeleton"
              ]
            },
            "offset": [
              0.0,
              -1.0,
              0.0
            ]
          },
          {
            "type": "has_block_ingredient",
            "match_block": {
              "blocks": [
                "minecraft:lava"
              ]
            },
            "offset": [
              0.0,
              -2.0,
              0.0
            ]
          }
        ]
    })
})