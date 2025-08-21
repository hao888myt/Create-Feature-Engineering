ServerEvents.recipes(event => {
    const create = event.recipes.create

    //风帆
    event.remove('immersive_aircraft:sail')
    create.cutting(Item.of('immersive_aircraft:sail', 2), '#minecraft:wool_carpets')

    // 模具
    create.cutting(Item.of("createdieselgenerators:mold", 4), "#forge:plates/iron")
  })