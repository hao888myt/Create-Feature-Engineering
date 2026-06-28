ServerEvents.recipes(event => {
  //传送石
  //event.remove("waystones:warp_stone")

  // 
  event.remove({ mod: "beyonddimensions" })

  let removes = [
    "create:crafting/kinetics/gearbox",
    "create:crafting/kinetics/vertical_gearbox",
    "create:crafting/kinetics/clutch",
    "create:crafting/kinetics/encased_chain_drive",
    "create:crafting/kinetics/encased_chain_drive_from_zinc",
    "create:crafting/kinetics/adjustable_chain_gearshift",
    "create_connected:crafting/kinetics/encased_chain_cogwheel",
    "create:crafting/kinetics/mechanical_harvester",
    "create:crafting/kinetics/mechanical_plough",

    "anvilcraft_pigsplus:block_breaker",

    "createdieselgenerators:crafting/basin_lid",

    "create:crafting/materials/rose_quartz",

    "create_jetpack:jetpack"
  ].forEach(recipe => {
    event.remove(recipe)
  })

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
  event.shapeless(
    Item.of("create:clutch", 4),
    [
      "create:andesite_casing",
      "create:shaft",
      "minecraft:redstone"
    ]
  )

  // 链式传动箱
  event.shapeless(Item.of("create:encased_chain_drive", 4), [
    "create:andesite_casing",
    Ingredient.of("#c:nuggets/iron", 3)
  ])
  event.shapeless(Item.of("create:encased_chain_drive", 4), [
    "create:andesite_casing",
    Ingredient.of("#c:nuggets/zinc", 3)
  ])

  // 可调节链式传动箱
  event.shapeless(Item.of("create:adjustable_chain_gearshift", 4), [
    Item.of("create:encased_chain_drive", 4),
    "create:electron_tube"
  ])

  // 链式齿轮箱
  event.shapeless(Item.of("create_connected:encased_chain_cogwheel", 4), [
    Item.of("create:encased_chain_drive", 4),
    "create:cogwheel"
  ])

  // 动力收割机
  event.shaped(Item.of("create:mechanical_harvester", 4), [
    "III",
    "AAA",
    " C "
  ], {
    A: "#c:ingots/andesite",
    I: "#c:plates/iron",
    C: "create:andesite_casing",
  })

  // 动力犁
  event.shaped(Item.of("create:mechanical_plough", 4), [
    "AAA",
    "III",
    " C "
  ], {
    A: "#c:ingots/andesite",
    I: "#c:plates/iron",
    C: "create:andesite_casing",
  })

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

  // 方块破坏器
  event.shaped(
    Item.of("anvilcraft_pigsplus:block_breaker"),
    [
      "CCC",
      "HRS",
      "CCC"
    ],
    {
      H: "minecraft:hopper",
      R: "minecraft:redstone",
      S: "minecraft:stonecutter",
      C: "minecraft:cobblestone"
    }
  )

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
    Item.of("create:belt_connector", 3),
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
    Item.of("create:belt_connector", 3),
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
  event.shapeless(
    Item.of("create:rose_quartz"),
    [
      "minecraft:quartz",
      Item.of("minecraft:redstone", 4)
    ]
  )

  // 粘液球
  event.shapeless("minecraft:slime_ball", [
    Ingredient.of("#c:resin"),
    "minecraft:lime_dye"
  ])

  // 过滤器
  let filters = [
    "create:filter",
    "create:attribute_filter",
    "create:package_filter",
    "createdieselgenerators:entity_filter"
  ].forEach(filter => {
    event.replaceInput({ output: filter }, Ingredient.of("#minecraft:wool"), "minecraft:paper")
  })

  // 喷气背包
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
