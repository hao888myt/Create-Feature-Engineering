ServerEvents.recipes(event => {
  let create = event.recipes.create

  let removes = [
    "create:crafting/materials/electron_tube",
    "create:crafting/logistics/factory_gauge",
    "fluidlogistics:factory_gauge_from_fluid_factory_gauge",

    "fluidlogistics:fluid_factory_gauge",
    "fluidlogistics:fluid_factory_gauge_from_ingredients"
  ].forEach(recipe => {
    event.remove(recipe)
  })

  // 电子管
  create.filling(Item.of("create:electron_tube", 4), [Fluid.of("create_feature_engineering:molten_iron", 180), "create:polished_rose_quartz"])

  // 安山合金
  create.filling(Item.of("create:andesite_alloy", 4), [Fluid.of("create_feature_engineering:molten_steel", 45), "minecraft:andesite"])

  // 工厂仪表
  create.filling(Item.of("create:factory_gauge", 4), [Fluid.of("create_feature_engineering:molten_gold", 90), "create:stock_link"])

  // 流体工厂仪表
  create.filling(Item.of("fluidlogistics:fluid_factory_gauge", 4), [Fluid.of("create_feature_engineering:molten_copper", 90), "create:stock_link"])

  // 沃土
  create.filling(Item.of("farmersdelight:rich_soil"), [Fluid.of("minecraft:water", 250), "farmersdelight:organic_compost"])

  // 苔藓块
  create.filling(Item.of("minecraft:moss_block", 4), [Fluid.of("ratatouille:compost_tea", 100), "minecraft:moss_block"])
})
