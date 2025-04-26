ServerEvents.recipes(event => {
    const create = event.recipes.create

    //人鱼宝石分液
    create.emptying([Fluid.water(), 'spectrum:mermaids_gem'], 'spectrum:mermaids_gem')

    //增强橡胶树分液
    // event.remove('create_dd:emptying/sap_from_rubber_wood')
    // event.remove('create_dd:emptying/sap_from_rubber_log')
    // create.emptying([Fluid.of('create_dd:sap', 250), Item.of('create_dd:stripped_rubber_log').withChance(0.4), Item.of('create_dd:crystallized_sap').withChance(0.2)], 'create_dd:stripped_rubber_log')
    // create.emptying([Fluid.of('create_dd:sap', 250), Item.of('create_dd:stripped_rubber_wood').withChance(0.4), Item.of('create_dd:crystallized_sap').withChance(0.2)], 'create_dd:stripped_rubber_wood')

    //异彩废液
    // create.emptying([Fluid.of('create_dd:chromatic_waste', 100), Item.of('kubejs:chromatic_compound_shard', 2)], 'kubejs:unstable_chromatic_compound')
  })