ServerEvents.recipes(event => {
    const create = event.recipes.create

    //风帆
    event.remove('immersive_aircraft:sail')
    create.cutting(Item.of('immersive_aircraft:sail', 2), '#minecraft:wool_carpets')
  })