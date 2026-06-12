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
})
