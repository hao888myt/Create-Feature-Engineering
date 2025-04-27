ServerEvents.recipes(event => {
    const create = event.recipes.create

    //电子管
    event.remove('create:crafting/materials/electron_tube')
    create.filling('create:electron_tube', [Fluid.of('createmetallurgy:molten_iron', 90), 'create:polished_rose_quartz'])

    //火花石碎片变火花石碎块
    create.filling(Item.of('kubejs:shimmerstone_gem_lump').withChance(0.85), [Fluid.of('minecraft:lava', 200), 'kubejs:shimmerstone_gem_shard'])

    //以太石
    // event.remove('create_dd:filling/aethersite')
    // create.filling('create_dd:aethersite', [Fluid.of('create_dd:chromatic_waste', 50), '#forge:stone'])
  })