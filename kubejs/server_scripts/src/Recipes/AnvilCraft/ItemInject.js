ServerEvents.recipes(event =>{

    /**
    * 调用方法用于创建Goety仪式配方
    * @param {string} input_item 输入物品
    * @param {number} input_number 物品数量
    * @param {string} input_block 输入方块
    * @param {string} result 输出方块
    */

    function itemInject (input_item, input_block, output){
        let recipe = {
            "type": "anvilcraft:anvil_processing",
            "anvil_recipe_type": "item_inject",
            "icon": {
              "item": output
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
                  "block": output
                }
              }
            ],
            "predicates": [
              {
                "type": "has_block",
                "match_block": {
                  "blocks": [
                    input_block
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
                    input_item
                  ]
                },
                "offset": [
                  0.0,
                  0.0,
                  0.0
                ]
              }
            ]
          }
        event.custom(recipe)
    }

    function itemsInject (input_item, input_number, input_block, output){
      let recipe = {
          "type": "anvilcraft:anvil_processing",
          "anvil_recipe_type": "item_inject",
          "icon": {
            "item": output
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
                "block": output
              }
            }
          ],
          "predicates": [
            {
              "type": "has_block",
              "match_block": {
                "blocks": [
                  input_block
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
                  input_item
                ]
              },
              "offset": [
                0.0,
                0.0,
                0.0
              ]
            }
          ]
        }
      event.custom(recipe)
  }

    //粗锌块压入深板岩
    itemInject('create:raw_zinc_block', 'minecraft:deepslate', 'anvilcraft:deepslate_zinc_ore')

    //粗锡块压入深板岩
    itemInject('create_dd:raw_tin_block', 'minecraft:deepslate', 'anvilcraft:deepslate_tin_ore')

    //镶金黑石配方修复
    event.remove('anvilcraft:item_inject/gilded_blackstone')
    itemInject('minecraft:raw_gold_block', 'minecraft:blackstone', 'minecraft:gilded_blackstone')

    //下界金矿配方修复
    event.remove('anvilcraft:item_inject/nether_gold_ore')
    itemInject('minecraft:raw_gold_block', 'minecraft:netherrack', 'minecraft:nether_gold_ore')

    //紫水晶矿物压入
    itemInject('spectrum:amethyst_storage_block', 'minecraft:stone', 'spectrum:amethyst_ore')
    itemInject('spectrum:amethyst_storage_block', 'minecraft:deepslate', 'spectrum:deepslate_amethyst_ore')
    itemInject('spectrum:amethyst_storage_block', 'spectrum:blackslag', 'spectrum:blackslag_amethyst_ore')

    //黄水晶矿物压入
    itemInject('spectrum:citrine_storage_block', 'minecraft:stone', 'spectrum:citrine_ore')
    itemInject('spectrum:citrine_storage_block', 'minecraft:deepslate', 'spectrum:deepslate_citrine_ore')
    itemInject('spectrum:citrine_storage_block', 'spectrum:blackslag', 'spectrum:blackslag_citrine_ore')

    //托帕石矿物压入
    itemInject('spectrum:topaz_storage_block', 'minecraft:stone', 'spectrum:topaz_ore')
    itemInject('spectrum:topaz_storage_block', 'minecraft:deepslate', 'spectrum:deepslate_topaz_ore')
    itemInject('spectrum:topaz_storage_block', 'spectrum:blackslag', 'spectrum:blackslag_topaz_ore')

    //缟玛瑙矿物压入
    itemInject('spectrum:onyx_storage_block', 'minecraft:stone', 'spectrum:onyx_ore')
    itemInject('spectrum:onyx_storage_block', 'minecraft:deepslate', 'spectrum:deepslate_onyx_ore')
    itemInject('spectrum:onyx_storage_block', 'spectrum:blackslag', 'spectrum:blackslag_onyx_ore')

    //月长石矿物压入
    itemInject('spectrum:moonstone_storage_block', 'minecraft:stone', 'spectrum:moonstone_ore')
    itemInject('spectrum:moonstone_storage_block', 'minecraft:deepslate', 'spectrum:deepslate_moonstone_ore')
    itemInject('spectrum:moonstone_storage_block', 'spectrum:blackslag', 'spectrum:blackslag_moonstone_ore')

    //火花石矿物压入
    itemInject('spectrum:shimmerstone_block', 'minecraft:stone', 'spectrum:shimmerstone_ore')
    itemInject('spectrum:shimmerstone_block', 'minecraft:deepslate', 'spectrum:deepslate_shimmerstone_ore')
    itemInject('spectrum:shimmerstone_block', 'spectrum:blackslag', 'spectrum:blackslag_shimmerstone_ore')

    //石青矿物压入
    itemsInject('spectrum:raw_azurite', 4, 'minecraft:stone', 'spectrum:azurite_ore')
    itemsInject('spectrum:raw_azurite', 4, 'minecraft:deepslate', 'spectrum:deepslate_azurite_ore')
    itemsInject('spectrum:raw_azurite', 4, 'spectrum:blackslag', 'spectrum:blackslag_azurite_ore')

    //孔雀石矿物压入
    itemsInject('spectrum:raw_malachite', 3, 'minecraft:stone', 'spectrum:malachite_ore')
    itemsInject('spectrum:raw_malachite', 3, 'minecraft:deepslate', 'spectrum:deepslate_malachite_ore')
    itemsInject('spectrum:raw_malachite', 3, 'spectrum:blackslag', 'spectrum:blackslag_malachite_ore')

    //绯红矿石压入
    itemInject('spectrum:stratine_gem', 'minecraft:netherrack', 'spectrum:stratine_ore')

    //苍绿矿石压入
    itemInject('spectrum:paltaeria_gem', 'minecraft:end_stone', 'spectrum:paltaeria_ore')

    //石子压入
    itemInject('spelunkery:stone_pebble', 'minecraft:cobblestone', 'minecraft:stone')

    //深板岩石子压入
    itemInject('spelunkery:deepslate_pebble', 'minecraft:cobbled_deepslate', 'minecraft:deepslate')

})