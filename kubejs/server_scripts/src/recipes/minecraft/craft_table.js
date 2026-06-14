ServerEvents.recipes(event => {
  //传送石
  //event.remove("waystones:warp_stone")

  // 
  event.remove({ mod: "beyonddimensions" })

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

  // 十字齿轮箱
  event.remove("create:crafting/kinetics/gearbox")
  event.shaped(
    Item.of("create:gearbox", 4), [
    " C ",
    "CAC",
    " C "
  ],
    {
      C: "create:cogwheel",
      A: "create:andesite_casing"
    }
  )

  // 竖十字齿轮箱
  event.remove("create:crafting/kinetics/vertical_gearbox")
  event.shaped(
    Item.of("create:vertical_gearbox", 4), [
    "C C",
    " A ",
    "C C"
  ],
    {
      C: "create:cogwheel",
      A: "create:andesite_casing"
    }
  )

  // 离合器
  event.remove("create:crafting/kinetics/clutch")
  event.shapeless(
    Item.of("create:clutch", 4),
    [
      "create:andesite_casing",
      "create:shaft",
      "minecraft:redstone"
    ]
  )

  // 链式传动箱
  event.remove("create:crafting/kinetics/encased_chain_drive")
  event.shapeless(Item.of("create:encased_chain_drive", 4), [
    "create:andesite_casing",
    Ingredient.of("#c:nuggets/iron", 3)
  ])
  event.remove("create:crafting/kinetics/encased_chain_drive_from_zinc")
  event.shapeless(Item.of("create:encased_chain_drive", 4), [
    "create:andesite_casing",
    Ingredient.of("#c:nuggets/zinc", 3)
  ])

  // 可调节链式传动箱
  event.remove("create:crafting/kinetics/adjustable_chain_gearshift")
  event.shapeless(Item.of("create:adjustable_chain_gearshift", 4), [
    Item.of("create:encased_chain_drive", 4),
    "create:electron_tube"
  ])

  // 链式齿轮箱
  event.remove("create_connected:crafting/kinetics/encased_chain_cogwheel")
  event.shapeless(Item.of("create_connected:encased_chain_cogwheel", 4), [
    Item.of("create:encased_chain_drive", 4),
    "create:cogwheel"
  ])

  // 传动研究包复制
  let conveying_copy = [
    "create:gearbox",
    "create:vertical_gearbox",
    "create:encased_chain_drive",
    "create:adjustable_chain_gearshift",
    "create:chain_conveyor",
    "create_connected:parallel_gearbox",
    "create_connected:vertical_parallel_gearbox",
    "create_connected:six_way_gearbox",
    "create_connected:vertical_six_way_gearbox",
    "create_connected:encased_chain_cogwheel"
  ]
  conveying_copy.forEach(item => {
    event.shapeless(Item.of(item, 4), [
      item,
      'researchd:research_pack[researchd:research_pack="create_feature_engineering:conveying"]'
    ])
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
      A: "#c:plates/gold",
      B: "create:andesite_alloy"
    }
  )

  // 烈焰人燃烧室
  event.shapeless(
    Item.of("create:blaze_burner"),
    [
      "create:empty_blaze_burner",
      "spectrum:shimmerstone_gem"
    ]
  )

  // 传送带
  event.shaped(
    Item.of("create:belt_connector", 6),
    [
      "DDD",
      "RRR"
    ],
    {
      D: "minecraft:dried_kelp",
      R: "#neoforge:rubber"
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
      R: "#neoforge:rubber"
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

  // 玫瑰石英
  event.remove("create:crafting/materials/rose_quartz")
  event.shapeless(
    Item.of("create:rose_quartz"),
    [
      "minecraft:quartz",
      Item.of("minecraft:redstone", 4)
    ]
  )

  // 喷气背包
  event.remove("create_jetpack:jetpack")
  event.shaped(
    "create_jetpack:jetpack",
    [
      "BSB",
      "BCB",
      "H H"
    ],
    {
      B: "#c:plates/brass",
      C: "create:copper_backtank",
      H: "create:chute",
      S: "create:shaft"
    }
  )
})
