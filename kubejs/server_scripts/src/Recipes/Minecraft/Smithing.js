ServerEvents.recipes(event =>{
    event.smithing('alexscaves:conversion_crucible', 'kubejs:andesite_mechanism', 'kubejs:candy_machine', 'minecraft:cauldron')
    
    //熔铸搅拌器
    event.remove('createmetallurgy:foundry_mixer')
    event.smithing('createmetallurgy:foundry_mixer', 'kubejs:sturdy_mechanism', 'kubejs:sturdy_machine', 'createmetallurgy:sturdy_whisk')

    //柴油机
    event.remove('createdieselgenerators:diesel_engine')
    event.smithing('createdieselgenerators:diesel_engine', 'createdieselgenerators:engine_piston', 'kubejs:sturdy_machine', 'create:fluid_tank')

    //电动马达

    //交流发电机

    //蓄电池

    //特斯拉线圈
    event.remove('createaddition:tesla_coil')
    event.smithing('createaddition:tesla_coil', 'kubejs:sturdy_mechanism', 'kubejs:sturdy_machine', '#anvilcraft:capacitor')

    //心灵结印箱
    event.remove('spectrum:pedestal/tier1/heartbound_chest')
    event.smithing('spectrum:heartbound_chest', 'minecraft:paper', 'kubejs:crystal_machine', '#c:chests')

    //黑洞箱
    event.remove('spectrum:pedestal/tier3/black_hole_chest')
    event.smithing('spectrum:black_hole_chest', 'spectrum:polished_basalt', 'kubejs:onyx_machine', 'spectrum:stratine_gem')

    //装配箱
    event.remove('spectrum:pedestal/tier3/restocking_chest')
    event.smithing('spectrum:restocking_chest', 'spectrum:polished_calcite', 'kubejs:onyx_machine', 'spectrum:stratine_fragments')

    //垃圾桶
    event.remove('trashcans:item_trash_can')
    event.remove('trashcans:liquid_trash_can')
    event.remove('trashcans:energy_trash_can')
    event.smithing('trashcans:energy_trash_can', 'kubejs:quitoxic_mechanism', 'kubejs:quitoxic_machine', '#forge:dusts/redstone')
    event.smithing('trashcans:liquid_trash_can', 'kubejs:quitoxic_mechanism', 'kubejs:quitoxic_machine', '#c:empty_buckets')
    event.smithing('trashcans:item_trash_can', 'kubejs:quitoxic_mechanism', 'kubejs:quitoxic_machine', '#c:chests')

    //药水工作站
    event.remove('spectrum:pedestal/tier3/potion_workshop')
    event.smithing('spectrum:potion_workshop', '#c:copper_ingots', 'kubejs:quitoxic_machine', 'spectrum:stratine_fragments')
})