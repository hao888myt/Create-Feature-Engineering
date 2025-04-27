ServerEvents.recipes(event =>{
    event.custom({
        "type": "anvilcraft:anvil_processing",
        "anvil_recipe_type": "multiblock_crafting",
        "icon": {
          "item": 'kubejs:adulterated_base_block'
        },
        "outcomes": [
          {
            "type": "spawn_item",
            "chance": 1.0,
            "offset": [
              0.0,
              -2.0,
              0.0
            ],
            "result": {
              "item": 'kubejs:adulterated_base_block'
            }
          }
        ],
        "predicates": [
          {
            "type": "has_multi_block",
            "key": {
              " ": 'minecraft:air',
              "C": 'minecraft:calcite',
              "Q": 'spelunkery:rough_quartz_block',
              "R": 'spectrum:red_block',
              "G": 'spectrum:green_block',
              "B": 'spectrum:blue_block',
              "Y": 'spectrum:yellow_block'
            },
            "layers": [
              [
                "   ",
                "   ",
                "   "
              ],
              [
                "   ",
                "   ",
                "   "
              ],
              [
                "CGC",
                "RQB",
                "CYC"
              ]
            ]
          }
        ]
      })

      event.custom({
        "type": "anvilcraft:anvil_processing",
        "anvil_recipe_type": "multiblock_crafting",
        "icon": {
          "item": 'kubejs:base_block'
        },
        "outcomes": [
          {
            "type": "spawn_item",
            "chance": 1.0,
            "offset": [
              0.0,
              -2.0,
              0.0
            ],
            "result": {
              "item": 'kubejs:base_block'
            }
          }
        ],
        "predicates": [
          {
            "type": "has_multi_block",
            "key": {
              " ": 'minecraft:air',
              "C": 'minecraft:calcite',
              "Q": 'spelunkery:rough_quartz_block',
              "W": 'spectrum:white_block'
            },
            "layers": [
              [
                "   ",
                "   ",
                "   "
              ],
              [
                "   ",
                "   ",
                "   "
              ],
              [
                "CWC",
                "WQW",
                "CWC"
              ]
            ]
          }
        ]
      })
})