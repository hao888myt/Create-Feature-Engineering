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
                  "block": 'minecraft:air'
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
    var slaping_chance = 0.15
    smashLeaves('spectrum:white_leaves', 'spectrum:white_sapling', slaping_chance)
    smashLeaves('spectrum:orange_leaves', 'spectrum:orange_sapling', slaping_chance)
    smashLeaves('spectrum:magenta_leaves', 'spectrum:magenta_sapling', slaping_chance)
    smashLeaves('spectrum:light_blue_leaves', 'spectrum:light_blue_sapling', slaping_chance)
    smashLeaves('spectrum:yellow_leaves', 'spectrum:yellow_sapling', slaping_chance)
    smashLeaves('spectrum:lime_leaves', 'spectrum:lime_sapling', slaping_chance)
    smashLeaves('spectrum:pink_leaves', 'spectrum:pink_sapling', slaping_chance)
    smashLeaves('spectrum:gray_leaves', 'spectrum:gray_sapling', slaping_chance)
    smashLeaves('spectrum:light_gray_leaves', 'spectrum:light_gray_sapling', slaping_chance)
    smashLeaves('spectrum:cyan_leaves', 'spectrum:cyan_sapling', slaping_chance)
    smashLeaves('spectrum:purple_leaves', 'spectrum:purple_sapling', slaping_chance)
    smashLeaves('spectrum:blue_leaves', 'spectrum:blue_sapling', slaping_chance)
    smashLeaves('spectrum:brown_leaves', 'spectrum:brown_sapling', slaping_chance)
    smashLeaves('spectrum:green_leaves', 'spectrum:green_sapling', slaping_chance)
    smashLeaves('spectrum:red_leaves', 'spectrum:red_sapling', slaping_chance)
    smashLeaves('spectrum:black_leaves', 'spectrum:black_sapling', slaping_chance)

    event.custom({
        "type": "anvilcraft:anvil_processing",
        "anvil_recipe_type": "block_smash",
        "icon": {
          "item": 'minecraft:bedrock'
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
              "block": 'minecraft:bedrock'
            }
          }
        ],
        "predicates": [
          {
            "type": "has_block",
            "match_block": {
              "blocks": [
                'spectrum:ruin'
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
})