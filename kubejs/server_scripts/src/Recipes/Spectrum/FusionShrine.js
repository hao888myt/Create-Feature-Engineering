ServerEvents.recipes(event =>{

    //基岩头盔
    event.remove('spectrum:fusion_shrine/bedrock/helmet')
    event.custom({
        "type": "spectrum:fusion_shrine",
        "group": "bedrock_armor",
        "time": 1200,
        "experience": 16.0,
        "fluid": {
          "fluid": "spectrum:midnight_solution"
        },
        "copy_nbt": true,
        "ingredients": [
          {
            "item": 'minecraft:netherite_helmet'
          },
          {
            "item": "spectrum:bedrock_dust",
            "count": 5
          },
          {
            "item": "spectrum:black_pigment",
            "count": 5
          },
          {
            "item": "spectrum:onyx_powder",
            "count": 5
          },
          {
            "item": "spectrum:stratine_fragments",
            "count": 2
          }
        ],
        "result": {
          "item": "spectrum:bedrock_helmet",
          "nbt": {
            "Enchantments": [
              {
                "id": "minecraft:projectile_protection",
                "lvl": "5s"
              }
            ]
          }
        },
        "required_advancement": "spectrum:unlocks/equipment/bedrock_tools",
        "world_conditions": [],
        "start_crafting_effect": "nothing",
        "during_crafting_effects": [],
        "finish_crafting_effect": "single_visual_explosion_on_shrine"
      })
    
    //基岩胸甲
    event.remove('spectrum:fusion_shrine/bedrock/chestplate')
    event.custom({
        "type": "spectrum:fusion_shrine",
        "group": "bedrock_armor",
        "time": 1200,
        "experience": 16.0,
        "fluid": {
          "fluid": "spectrum:midnight_solution"
        },
        "copy_nbt": true,
        "ingredients": [
          {
            "item": "minecraft:netherite_chestplate"
          },
          {
            "item": "spectrum:bedrock_dust",
            "count": 8
          },
          {
            "item": "spectrum:black_pigment",
            "count": 8
          },
          {
            "item": "spectrum:onyx_powder",
            "count": 8
          },
          {
            "item": "spectrum:stratine_gem",
            "count": 1
          },
          {
            "item": "minecraft:rose_bush",
            "count": 1
          }
        ],
        "result": {
          "item": "spectrum:bedrock_chestplate",
          "nbt": {
            "Enchantments": [
              {
                "id": "minecraft:protection",
                "lvl": "5s"
              }
            ]
          }
        },
        "required_advancement": "spectrum:unlocks/equipment/bedrock_tools",
        "world_conditions": [],
        "start_crafting_effect": "nothing",
        "during_crafting_effects": [],
        "finish_crafting_effect": "single_visual_explosion_on_shrine"
      })
    
    //基岩护腿
    event.remove('spectrum:fusion_shrine/bedrock/leggings')
    event.custom({
        "type": "spectrum:fusion_shrine",
        "group": "bedrock_armor",
        "time": 1200,
        "experience": 16.0,
        "fluid": {
          "fluid": "spectrum:midnight_solution"
        },
        "copy_nbt": true,
        "ingredients": [
          {
            "item": "minecraft:netherite_leggings"
          },
          {
            "item": "spectrum:bedrock_dust",
            "count": 7
          },
          {
            "item": "spectrum:black_pigment",
            "count": 7
          },
          {
            "item": "spectrum:onyx_powder",
            "count": 7
          },
          {
            "item": "spectrum:stratine_fragments",
            "count": 4
          }
        ],
        "result": {
          "item": "spectrum:bedrock_leggings",
          "nbt": {
            "Enchantments": [
              {
                "id": "minecraft:blast_protection",
                "lvl": "5s"
              }
            ]
          }
        },
        "required_advancement": "spectrum:unlocks/equipment/bedrock_tools",
        "world_conditions": [],
        "start_crafting_effect": "nothing",
        "during_crafting_effects": [],
        "finish_crafting_effect": "single_visual_explosion_on_shrine"
      })

    //基岩靴子
    event.remove('spectrum:fusion_shrine/bedrock/boots')
    event.custom({
        "type": "spectrum:fusion_shrine",
        "group": "bedrock_armor",
        "time": 1200,
        "experience": 16.0,
        "fluid": {
          "fluid": "spectrum:midnight_solution"
        },
        "copy_nbt": true,
        "ingredients": [
          {
            "item": "minecraft:netherite_boots"
          },
          {
            "item": "spectrum:bedrock_dust",
            "count": 4
          },
          {
            "item": "spectrum:black_pigment",
            "count": 4
          },
          {
            "item": "spectrum:onyx_powder",
            "count": 4
          },
          {
            "item": "spectrum:stratine_fragments",
            "count": 2
          }
        ],
        "result": {
          "item": "spectrum:bedrock_boots",
          "nbt": {
            "Enchantments": [
              {
                "id": "minecraft:fire_protection",
                "lvl": "5s"
              }
            ]
          }
        },
        "required_advancement": "spectrum:unlocks/equipment/bedrock_tools",
        "world_conditions": [],
        "start_crafting_effect": "nothing",
        "during_crafting_effects": [],
        "finish_crafting_effect": "single_visual_explosion_on_shrine"
      })

    // event.custom({
    //   "type": "spectrum:fusion_shrine",
    //   "time": 80,
    //   "experience": 2.0,
    //   "fluid": {
    //     "fluid": "minecraft:lava"
    //   },
    //   "ingredients": [
    //     {
    //       "item": 'minecraft:twisting_vines'
    //     },
    //     {
    //       "item": 'minecraft:weeping_vines'
    //     },
    //     {
    //       "item": 'minecraft:magma_block'
    //     },
    //     {
    //       "tag": 'forge:ingots/industrial_iron'
    //     }
    //   ],
    //   "result": {
    //     "item": 'create_dd:ember_alloy'
    //   },
    //   "required_advancement": "spectrum:unlocks/blocks/fusion_shrine"
    // })

    let { spectrum } = event.recipes
    //缟玛瑙粉末催化
    spectrum.fusion_shrine(200, 0.0, Fluid.of("minecraft:lava"), ['spectrum:onyx_powder', 'spectrum:citrine_shard', 'spectrum:topaz_shard', 'minecraft:amethyst_shard'], Item.of('spectrum:onyx_shard', 3))
      .required_advancement('spectrum:create_onyx_shard')
    
    
})