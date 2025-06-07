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

    // 水晶注液
    FillingCrystal("citrine")
    FillingCrystal("topaz")
    function FillingCrystal(mateirial){
      create.filling(Item.of(`spectrum:small_${mateirial}_bud`), [Item.of(`spectrum:${mateirial}_shard`), Fluid.of("minecraft:water", 250)])
      create.filling(Item.of(`spectrum:medium_${mateirial}_bud`), [Item.of(`spectrum:small_${mateirial}_bud`), Fluid.of("minecraft:water", 250)])
      create.filling(Item.of(`spectrum:large_${mateirial}_bud`), [Item.of(`spectrum:medium_${mateirial}_bud`), Fluid.of("minecraft:water", 250)])
      create.filling(Item.of(`spectrum:${mateirial}_cluster`), [Item.of(`spectrum:large_${mateirial}_bud`), Fluid.of("minecraft:water", 250)])
    }
    create.filling(Item.of(`minecraft:small_amethyst_bud`), [Item.of(`minecraft:amethyst_shard`), Fluid.of("minecraft:water", 250)])
    create.filling(Item.of(`minecraft:medium_amethyst_bud`), [Item.of(`minecraft:small_amethyst_bud`), Fluid.of("minecraft:water", 250)])
    create.filling(Item.of(`minecraft:large_amethyst_bud`), [Item.of(`minecraft:medium_amethyst_bud`), Fluid.of("minecraft:water", 250)])
    create.filling(Item.of(`minecraft:amethyst_cluster`), [Item.of(`minecraft:large_amethyst_bud`), Fluid.of("minecraft:water", 250)])
  })