ServerEvents.recipes(event => {
  //传送石
  //event.remove("waystones:warp_stone")

  // 数字0
  event.shaped(Item.of("create_feature_engineering:zero", 8), [
    "ZZZ",
    "Z Z",
    "ZZZ"
  ], {
    Z: "minecraft:paper"
  })

  // 不可堆叠数字
  let unstackable_numbers = [
    ["create_feature_engineering:unstackable_zero", "create_feature_engineering:zero"],
    ["create_feature_engineering:unstackable_one", "create_feature_engineering:one"],
    ["create_feature_engineering:unstackable_two", "create_feature_engineering:two"],
    ["create_feature_engineering:unstackable_three", "create_feature_engineering:three"],
    ["create_feature_engineering:unstackable_four", "create_feature_engineering:four"],
    ["create_feature_engineering:unstackable_five", "create_feature_engineering:five"],
    ["create_feature_engineering:unstackable_six", "create_feature_engineering:six"],
    ["create_feature_engineering:unstackable_seven", "create_feature_engineering:seven"],
    ["create_feature_engineering:unstackable_eight", "create_feature_engineering:eight"],
    ["create_feature_engineering:unstackable_nine", "create_feature_engineering:nine"]
  ]
  unstackable_numbers.forEach(number => {
    event.shaped(Item.of(number[0]), [
      "NNN",
      "N N",
      "NNN"
    ], {
      N: number[1]
    })
  })

  // 超越维度
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
    event.remove({ output: item })
  })

  // 黄铜手部零件
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

  // 安山构件
  event.shaped(
    Item.of("create_feature_engineering:andesite_mechanism"),
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

  // 铜构件
  event.shaped(
    Item.of("create_feature_engineering:copper_mechanism"),
    [
      " B ",
      "ACA",
      " B "
    ],
    {
      A: "#create_feature_engineering:sap",
      B: "#forge:plates/copper",
      C: "create_feature_engineering:andesite_mechanism"
    }
  )

  // 烈焰人燃烧室
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

  // 工作盆盖板
  event.remove("createdieselgenerators:crafting/basin_lid")
  event.shaped(
    Item.of("createdieselgenerators:basin_lid", 3),
    [
      " C ",
      "AAA",
    ],
    {
      A: "create:andesite_alloy",
      C: "minecraft:clock"
    }
  )

  //各种机器
  let machines = (machine, casing, mechanism) => {
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

  machines("create_feature_engineering:andesite_machine", "create:andesite_casing", "create_feature_engineering:andesite_mechanism")
  machines("create_feature_engineering:copper_machine", "create:copper_casing", "create_feature_engineering:copper_mechanism")
  machines("create_feature_engineering:brass_machine", "create:brass_casing", "create:precision_mechanism")
  machines("create_feature_engineering:sturdy_machine", "create:railway_casing", "create_feature_engineering:sturdy_mechanism")
  machines("create_feature_engineering:magnet_machine", "create_feature_engineering:steel_casing", "create_feature_engineering:magnet_mechanism")

  machines("create_feature_engineering:logistics_machine", "create:cardboard_block", "create_feature_engineering:logistics_mechanism")

  //化合物基质
  let item_to_block = (item, block, number) => {
    if (number == 4) {
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
    else if (number == 9) {
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

  //螺旋桨
  // event.remove("immersive_aircraft:propeller")
  // event.shaped(
  //   Item.of("immersive_aircraft:propeller"),
  //   [
  //     "AA ",
  //     " A ",
  //     " AA"
  //   ],
  //   {
  //     A: "#forge:plates/iron"
  //   }
  // )

  // 玫瑰石英
  event.remove("create:crafting/materials/rose_quartz")
  event.shapeless(
    Item.of("create:rose_quartz"),
    [
      "minecraft:quartz",
      Item.of("minecraft:redstone", 4)
    ]
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
    copy(item, "create_feature_engineering:andesite_mechanism")
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
