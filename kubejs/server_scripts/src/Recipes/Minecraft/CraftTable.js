ServerEvents.recipes(event => {
    //传送石
    //event.remove("waystones:warp_stone")

    let beyond_dimension_remove = [
      "beyonddimensions:ars_source_pathway", 
      "beyonddimensions:net_interface", 
      "beyonddimensions:net_pathway", 
      "beyonddimensions:net_energy_pathway", 
      "beyonddimensions:net_terminal_block", 
      "beyonddimensions:net_pump_block", 
      "beyonddimensions:net_hopper_block", 
      "beyonddimensions:net_furnace_block", 
      "beyonddimensions:dimensional_connect_block", 
      "beyonddimensions:net_control"
    ]
    beyond_dimension_remove.forEach(item => {
      event.remove({output: item})
    })

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

    // 抽入升级和输出升级
    event.shapeless("functionalstorage:puller_upgrade", "functionalstorage:pusher_upgrade")
    event.shapeless("functionalstorage:pusher_upgrade", "functionalstorage:puller_upgrade")

    // 木制保险库
    event.shaped(
      Item.of("create_bs:wooden_item_vault", 4),
      [
        "W",
        "B",
        "W",
      ],
      {
        W: "#minecraft:wooden_slabs",
        B: "#forge:barrels"
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
        B: "create:andesite_alloy"
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
    //event.remove("trading_floor:trading_depot")
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

    // 传送带
    event.shaped(
      Item.of("create:belt_connector", 6),
      [
        "DDD",
        "RRR"
      ],
      {
        D: "minecraft:dried_kelp",
        R: "#forge:rubber"
      }
    )
    event.shaped(
      Item.of("create:belt_connector", 6),
      [
        "RRR",
        "DDD"
      ],
      {
        D: "minecraft:dried_kelp",
        R: "#forge:rubber"
      }
    )

    // 铸造盆
    event.remove("createmetallurgy:crafting/content/casting_basin")
    event.shaped(
      Item.of("createmetallurgy:casting_basin"),
      [
        "A A",
        "A A",
        "AAA"
      ],
      {
        A: "create:andesite_alloy"
      }
    )

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
    machines("kubejs:magnet_machine", "kubejs:steel_casing", "kubejs:magnet_mechanism")

    machines("kubejs:crystal_machine", "spectrum:polished_calcite", "kubejs:crystal_core")
    machines("kubejs:onyx_machine", "spectrum:polished_basalt", "kubejs:onyx_mechanism")

    machines("kubejs:logistics_machine", "create:cardboard_block", "kubejs:logistics_mechanism")

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

    // 玫瑰石英
    event.remove("create:crafting/materials/rose_quartz")
    event.shapeless(
      Item.of("create:rose_quartz"),
      [
        "minecraft:quartz",
        Item.of("minecraft:redstone", 4)
      ]
    )

    // 冶金学砂带
    event.remove("createmetallurgy:crafting/materials/sandpaper_belt")

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

    // 传动复制
    function copy(item, mechanism) {
      event.shapeless(
        Item.of(item, 4),
        [
          item,
          mechanism
        ]
      )
    }

    let andesite_copy = [
      "create_connected:encased_chain_cogwheel",
      "create:gearshift", 
      "create_connected:inverted_gearshift", 
      "create_connected:parallel_gearbox", 
      "create_connected:vertical_parallel_gearbox", 
      "create_connected:six_way_gearbox", 
      "create:encased_chain_drive", 
      "create_connected:cross_connector", 
      "create_connected:vertical_six_way_gearbox",
      "create:gearbox",
      "create:vertical_gearbox",
      "create:chain_conveyor",
      "create:powered_latch",
      "create:powered_toggle_latch"
    ]

    andesite_copy.forEach(item => {
      copy(item, "kubejs:andesite_mechanism")
    })

    let brass_copy = [
      "create_connected:brass_gearbox",
      "create_connected:vertical_brass_gearbox",
      "create:adjustable_chain_gearshift",
      "create:pulse_extender",
      "create:pulse_repeater",
      "create:pulse_timer"
    ]

    brass_copy.forEach(item => {
      copy(item, "create:precision_mechanism")
    })
})