ServerEvents.recipes(event => {
    let create = event.recipes.create

    //电子管
    event.remove("create:crafting/materials/electron_tube")
    create.filling("create:electron_tube", [Fluid.of("create_feature_engineering:molten_iron", 90), "create:polished_rose_quartz"])
  })
