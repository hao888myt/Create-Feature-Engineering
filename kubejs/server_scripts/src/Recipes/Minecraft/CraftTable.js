ServerEvents.recipes(event => {

  

    //传送石
    event.remove("waystones:warp_stone")

    //夸克的磁铁
    event.remove("quark:oddities/crafting/magnet")
    event.shaped(
      Item.of("quark:magnet"),
      [
        "ABA",
        "CED",
        "ABA"
      ],
      {
        A: "#forge:cobblestone",
        B: "#c:iron_ingots",
        C: "minecraft:blue_dye",
        D: "minecraft:redstone",
        E: "anvilcraft:magnet_ingot"
      }
    )

    //铁杆
    event.remove("quark:automation/crafting/iron_rod")
    event.shaped(
      Item.of("quark:iron_rod"),
      [
        " A ",
        " A ",
        " B "
      ],
      {
        A: "#c:iron_ingots",
        B: "minecraft:obsidian"
      }
    )

    //黄铜手部零件
    event.shaped(
      Item.of("create:brass_hand"),
      [
        " B ",
        "AAA",
        " A "
      ],
      {
        A: "#forge:plates/gold",
        B: "#forge:ingots/andesite_alloy"
      }
    )

    //安山构件
    event.shaped(
      Item.of("kubejs:andesite_mechanism"),
      [
        " A ",
        "BCB",
        " A "
      ],
      {
        A: "create:large_cogwheel",
        B: "create:cogwheel",
        C: "create:andesite_alloy"
      }
    )

    //平行齿轮箱
    event.shapeless(
      Item.of("create_connected:parallel_gearbox", 2),
      [
        "create:gearbox",
        "kubejs:andesite_mechanism"
      ]
    )

    //六向齿轮箱
    event.shapeless(
      Item.of("create_connected:six_way_gearbox", 4),
      [
        "create:gearbox",
        "kubejs:andesite_mechanism",
        "kubejs:andesite_mechanism"
      ]
    )
    event.shapeless(
      Item.of("create_connected:six_way_gearbox", 2),
      [
        "create_connected:parallel_gearbox",
        "kubejs:andesite_mechanism"
      ]
    )

    //链式齿轮箱
    event.shapeless(
      Item.of("create_connected:encased_chain_cogwheel", 2),
      [
        "create:encased_chain_drive",
        "kubejs:andesite_mechanism"
      ]
    )

    //铜构件
    event.shaped(
      Item.of("kubejs:copper_mechanism"),
      [
        " B ",
        "ACA",
        " B "
      ],
      {
        A: "#kubejs:sap",
        B: "#forge:plates/copper",
        C: "kubejs:andesite_mechanism"
      }
    )

    //注液器
    event.remove("create:crafting/kinetics/spout")
    event.shaped(
      Item.of("create:spout"),
      [
        " A ",
        " B ",
        " C "
      ],
      {
        A: "create:copper_casing",
        B: "kubejs:copper_mechanism",
        C: "minecraft:dried_kelp"
      }
    )

    //分液池
    event.remove("create:crafting/kinetics/item_drain")
    event.shaped(
      Item.of("create:item_drain", 2),
      [
        " C ",
        " B ",
        " A "
      ],
      {
        A: "create:copper_casing",
        B: "kubejs:copper_mechanism",
        C: "minecraft:iron_bars"
      }
    )

    //软管滑轮
    event.remove("create:crafting/kinetics/hose_pulley")
    event.shaped(
      Item.of("create:hose_pulley"),
      [
        " A ",
        " B ",
        " C "
      ],
      {
        A: "create:copper_casing",
        B: "minecraft:dried_kelp_block",
        C: "kubejs:copper_mechanism"
      }
    )

    //移动式流体接口
    event.remove("create:crafting/kinetics/portable_fluid_interface")
    event.shapeless(
      Item.of("create:portable_fluid_interface", 2),
      [
        "create:copper_casing",
        "kubejs:copper_mechanism",
        "create:chute"
      ]
    )

    //烈焰人燃烧室
    event.shaped(
      Item.of("create:blaze_burner", 2),
      [
        " A ",
        "ABA",
        " A "
      ],
      {
        A: "#forge:plates/iron",
        B: "spectrum:shimmerstone_gem"
      }
    )
    event.shaped(
      Item.of("create:blaze_burner", 4),
      [
        " A ",
        "ABA",
        " A "
      ],
      {
        A: "#forge:plates/industrial_iron",
        B: "spectrum:shimmerstone_gem"
      }
    )

    //交易置物台
    event.remove("trading_floor:trading_depot")
    // event.shaped(
    //   Item.of("trading_floor:trading_depot"),
    //   [
    //     " A ",
    //     " B ",
    //     " C "
    //   ],
    //   {
    //     A: "#forge:storage_blocks/emerald",
    //     B: "create_dd:integrated_circuit",
    //     C: "create:depot"
    //   }
    // )

    //各种机器
    let machines = (machine, casing, mechanism) =>{
      event.shaped(
        Item.of(machine),
        [
          "AAA",
          "ABA",
          "AAA"
        ],
        {
          A: mechanism,
          B: casing
        }
      )
    }

    machines("kubejs:andesite_machine", "create:andesite_casing", "kubejs:andesite_mechanism")
    machines("kubejs:copper_machine", "create:copper_casing", "kubejs:copper_mechanism")
    machines("kubejs:brass_machine", "create:brass_casing", "create:precision_mechanism")
    machines("kubejs:sturdy_machine", "create:railway_casing", "kubejs:sturdy_mechanism")
    machines("kubejs:magnet_machine", "#create:casing/steel", "kubejs:magnet_mechanism")

    machines("kubejs:crystal_machine", "spectrum:polished_calcite", "kubejs:crystal_mechanism")
    machines("kubejs:onyx_machine", "spectrum:polished_basalt", "kubejs:onyx_mechanism")
    
    machines("kubejs:quitoxic_machine", "spectrum:quitoxic_powder", "kubejs:quitoxic_mechanism")

    //化合物基质
    let item_to_block = (item, block ,number) =>{
      if(number == 4){
        event.shaped(
          block,
          [
            "II ",
            "II ",
            "   "
          ],
          {
            I: item
          }
        )
      }
      else if(number == 9)
      {
        event.shaped(
          block,
          [
            "III",
            "III",
            "III"
          ],
          {
            I: item
          }
        )
      }
      event.shapeless(
        Item.of(item, number),
        [block]
      )
    }

    //item_to_block("create_dd:compound_base", "kubejs:base_block", 9)
    item_to_block("kubejs:adulterated_compound_base", "kubejs:adulterated_base_block", 9)
    //item_to_block("kubejs:chromatic_compound_shard", "create_dd:chromatic_compound", 4)

    //螺旋桨
    event.remove("immersive_aircraft:propeller")
    event.shaped(
      Item.of("immersive_aircraft:propeller"),
      [
        "AA ",
        " A ",
        " AA"
      ],
      {
        A: "#forge:plates/iron"
      }
    )

    // 修复黄铜锭
    event.remove("anvilcraft:brass_ingot")

    //冶金学砂带
    event.remove("createmetallurgy:crafting/materials/sandpaper_belt")
    event.shaped(
      Item.of("createmetallurgy:sandpaper_belt"),
      [
        "SSS",
        "S S",
        "SSS"
      ],
      {
        S: "#create:sandpaper"
      }
    )

    // 特斯拉球
    event.remove("alexscaves:tesla_bulb")
    event.shaped(
      Item.of("alexscaves:tesla_bulb", 4),
      [
        "EEE",
        "ETE",
        "EEE"
      ],
      {
        E: "alexscaves:energized_galena_neutral",
        T: "alexscaves:telecore"
      }
    )
})