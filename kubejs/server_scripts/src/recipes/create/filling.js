ServerEvents.recipes(event => {
  let create = event.recipes.create

  let removes = [
    "create:crafting/materials/electron_tube"
  ].forEach(recipe => {
    event.remove(recipe)
  })

  //电子管
  create.filling("create:electron_tube", [Fluid.of("create_feature_engineering:molten_iron", 90), "create:polished_rose_quartz"])
})
