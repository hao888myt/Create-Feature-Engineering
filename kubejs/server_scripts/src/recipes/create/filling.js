ServerEvents.recipes(event => {
  let create = event.recipes.create

  let removes = [
    "create:crafting/materials/electron_tube"
  ].forEach(recipe => {
    event.remove(recipe)
  })

  //电子管
  create.filling(Item.of("create:electron_tube", 4), [Fluid.of("create_feature_engineering:molten_iron", 180), "create:polished_rose_quartz"])

  // 沃土
  create.filling(Item.of("farmersdelight:rich_soil"), [Fluid.of("minecraft:water", 1000), "farmersdelight:organic_compost"])
})
