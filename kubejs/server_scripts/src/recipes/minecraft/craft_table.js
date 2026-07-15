ServerEvents.recipes(event => {
  //传送石
  //event.remove("waystones:warp_stone")

  let minecraft = event.recipes.minecraft

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

    "farmersdelight:organic_compost_from_rotten_flesh",
    "farmersdelight:organic_compost_from_tree_bark",

    "anvilcraft_pigsplus:block_breaker",

    "createdieselgenerators:crafting/basin_lid",

    "ratatouille:crafting/compost_tower",

    "create:crafting/kinetics/controls",

    "create:crafting/materials/rose_quartz",

    "create:crafting/logistics/brass_funnel",
    "create:crafting/logistics/brass_tunnel",
    "create:crafting/kinetics/smart_chute",

    "anvilcraft_pigsplus:redstone_conduit_block",
    "create:crafting/kinetics/rotation_speed_controller",

    "create_connected:crafting/kinetics/empty_fan_catalyst",

    "create_jetpack:jetpack",

    "storagedrawers:controller_io"
  ].forEach(recipe => {
    event.remove(recipe)
  })

  // 数字0
  minecraft.crafting_shaped(Item.of("create_feature_engineering:zero", 8), [
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
    minecraft.crafting_shaped(Item.of(number[0]), [
      "NNN",
      "N N",
      "NNN"
    ], {
      N: number[1]
    })
  })

  // 十字齿轮箱
  minecraft.crafting_shaped(
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
  minecraft.crafting_shaped(
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
  minecraft.crafting_shapeless(
    Item.of("create:clutch", 4),
    [
      "create:andesite_casing",
      "create:shaft",
      "minecraft:redstone"
    ]
  )

  // 链式传动箱
  minecraft.crafting_shapeless(Item.of("create:encased_chain_drive", 4), [
    "create:andesite_casing",
    Ingredient.of("#c:nuggets/iron", 3)
  ])
  minecraft.crafting_shapeless(Item.of("create:encased_chain_drive", 4), [
    "create:andesite_casing",
    Ingredient.of("#c:nuggets/zinc", 3)
  ])

  // 可调节链式传动箱
  minecraft.crafting_shapeless(Item.of("create:adjustable_chain_gearshift", 4), [
    Item.of("create:encased_chain_drive", 4),
    "create:electron_tube"
  ])

  // 链式齿轮箱
  minecraft.crafting_shapeless(Item.of("create_connected:encased_chain_cogwheel", 4), [
    Item.of("create:encased_chain_drive", 4),
    "create:cogwheel"
  ])

  // 动力收割机
  minecraft.crafting_shaped(Item.of("create:mechanical_harvester", 4), [
    "III",
    "AAA",
    " C "
  ], {
    A: "#c:ingots/andesite_alloy",
    I: "#c:plates/iron",
    C: "create:andesite_casing",
  })

  // 动力犁
  minecraft.crafting_shaped(Item.of("create:mechanical_plough", 4), [
    "AAA",
    "III",
    " C "
  ], {
    A: "#c:ingots/andesite_alloy",
    I: "#c:plates/iron",
    C: "create:andesite_casing",
  })

  // 有机堆肥
  minecraft.crafting_shapeless(Item.of("farmersdelight:organic_compost", 4), [
    Item.of("minecraft:dirt", 4),
    Item.of("minecraft:bone_meal", 3),
    Item.of("farmersdelight:tree_bark", 2)
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
    minecraft.crafting_shapeless(Item.of(item, 4), [
      item,
      'researchd:research_pack[researchd:research_pack="create_feature_engineering:conveying"]'
    ])
  })

  // 方块破坏器
  minecraft.crafting_shaped(
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
      C: Ingredient.of("#c:cobblestones")
    }
  )

  // 黄铜手部零件
  minecraft.crafting_shaped(
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
  minecraft.crafting_shapeless(
    Item.of("create:blaze_burner"),
    [
      "create:empty_blaze_burner",
      "spectrum:shimmerstone_gem"
    ]
  )

  // 传送带
  minecraft.crafting_shaped(
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
  minecraft.crafting_shaped(
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
  minecraft.crafting_shaped(
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

  // 堆肥塔
  minecraft.crafting_shaped(
    "ratatouille:compost_tower",
    [
      "Z",
      "B",
      "Z"
    ],
    {
      B: "minecraft:barrel",
      Z: "#c:plates/zinc"
    }
  )

  // 列车驾驶台
  minecraft.crafting_shapeless(Item.of("create:controls", 2), [
    "create:railway_casing",
    "minecraft:lever"
  ])

  // 玫瑰石英
  minecraft.crafting_shapeless(
    Item.of("create:rose_quartz"),
    [
      "minecraft:quartz",
      Item.of("minecraft:redstone", 4)
    ]
  )

  // 粘液球
  minecraft.crafting_shapeless("minecraft:slime_ball", [
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

  // 黄铜隧道
  minecraft.crafting_shaped(Item.of("create:brass_tunnel", 8), [
    "E ",
    "PP",
    "DD",
  ], {
    E: "create:electron_tube",
    P: "create:precision_mechanism",
    D: "minecraft:dried_kelp"
  })

  // 黄铜漏斗
  minecraft.crafting_shaped(Item.of("create:brass_funnel", 8), [
    "E",
    "P",
    "D",
  ], {
    E: "create:electron_tube",
    P: "create:precision_mechanism",
    D: "minecraft:dried_kelp"
  })

  // 智能溜槽
  minecraft.crafting_shaped(Item.of("create:smart_chute", 4), [
    "E",
    "C",
    "P",
  ], {
    E: "create:electron_tube",
    P: "create:precision_mechanism",
    C: "create:chute"
  })

  // 红石传导块
  minecraft.crafting_shaped(Item.of("anvilcraft_pigsplus:redstone_conduit_block", 32), [
    "BRB",
    "RPR",
    "BRB",
  ], {
    R: "minecraft:redstone",
    P: "create:precision_mechanism",
    B: "#c:ingots/brass"
  })

  // 鼓风机触媒
  minecraft.crafting_shaped(Item.of("create_connected:empty_fan_catalyst", 4), [
    "BIB",
    "I I",
    "BIB",
  ], {
    I: "minecraft:iron_bars",
    B: "#c:ingots/brass"
  })

  // 转速控制器
  minecraft.crafting_shapeless(Item.of("create:rotation_speed_controller", 4), [
    "create:brass_casing",
    "create:precision_mechanism"
  ])

  // 喷气背包
  minecraft.crafting_shaped(
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

  // 磨制方解石
  minecraft.crafting_shaped(
    Item.of("spectrum:polished_calcite", 4),
    [
      "CC",
      "CC"
    ],
    {
      C: "minecraft:calcite"
    }
  )

  // 磨制玄武岩
  minecraft.crafting_shaped(
    Item.of("spectrum:polished_basalt", 4),
    [
      "BB",
      "BB"
    ],
    {
      B: "minecraft:smooth_basalt"
    }
  )

  // 抽屉管理器传动方块
  minecraft.crafting_shaped(
    Item.of("storagedrawers:controller_io", 4),
    [
      "SSS",
      "CDC",
      "SSS"
    ],
    {
      S: "#c:stones",
      D: "#storagedrawers:drawers",
      C: "minecraft:comparator"
    }
  )

  let stone_to_stones = [
    "storagedrawers:compacting_drawers_2",
    "storagedrawers:compacting_drawers_3",
    "storagedrawers:compacting_half_drawers_2",
    "storagedrawers:compacting_half_drawers_3",
    "storagedrawers:controller",

    "minecraft:comparator",
    "minecraft:repeater"
  ].forEach(item => {
    event.replaceInput({
      output: item
    }, "minecraft:stone", Ingredient.of("#c:stones"))
  })

  let cobblestone_to_cobblestones = [
    "anvilcraft:block_devourer",
    "anvilcraft:block_placer",

    "create:redstone_contact",

    "minecraft:dispenser",
    "minecraft:dropper",
    "minecraft:observer",
    "minecraft:piston"
  ].forEach(item => {
    event.replaceInput({
      output: item
    }, "minecraft:cobblestone", Ingredient.of("#c:cobblestones"))
  })

  // 发射器
  minecraft.crafting_shaped("minecraft:dispenser",
    [
      "ST ",
      "SDT",
      "ST "
    ],
    {
      S: "#c:strings",
      T: "minecraft:stick",
      D: "minecraft:dropper"
    }
  )

  // 抽屉
  minecraft.crafting_shapeless("storagedrawers:oak_full_drawers_1", Ingredient.of("#c:chests/wooden"))
  minecraft.crafting_shaped(Item.of("storagedrawers:oak_full_drawers_2", 2), [
    "C",
    " ",
    "C"
  ], {
    C: "#c:chests/wooden"
  })
  minecraft.crafting_shaped(Item.of("storagedrawers:oak_full_drawers_4", 4), [
    "C C",
    "   ",
    "C C"
  ], {
    C: "#c:chests/wooden"
  })

  // 七彩基座
  let pedestals = [
    ["minecraft:amethyst_shard", "spectrum:pedestal_basic_amethyst", "spectrum:crafting_table/pedestal_basic_amethyst"],
    ["spectrum:topaz_shard", "spectrum:pedestal_basic_topaz", "spectrum:crafting_table/pedestal_basic_topaz"],
    ["spectrum:citrine_shard", "spectrum:pedestal_basic_citrine", "spectrum:crafting_table/pedestal_basic_citrine"]
  ].forEach(pedestal => {
    minecraft.crafting_shaped(pedestal[1], [
      "SSS",
      "BGB",
      "CRC"
    ], {
      S: pedestal[0],
      B: "spectrum:polished_basalt",
      C: "spectrum:polished_calcite",
      R: "minecraft:redstone",
      G: "#c:gems/source"
    }).id(pedestal[2])
  })
})
