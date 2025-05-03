ServerEvents.recipes(event =>{
    //安山机器
    //动力钻头
    event.remove("create:crafting/kinetics/mechanical_drill")
    event.smithing('create:mechanical_drill', 'kubejs:andesite_mechanism', "kubejs:andesite_machine", "#forge:ingots/iron")

    //动力锯
    event.remove("create:crafting/kinetics/mechanical_saw")
    event.smithing('create:mechanical_saw', 'kubejs:andesite_mechanism', "kubejs:andesite_machine", '#forge:plates/iron')

    //动力冲压机
    event.remove("create:crafting/kinetics/mechanical_press")
    event.smithing('create:mechanical_press', 'kubejs:andesite_mechanism', "kubejs:andesite_machine", '#forge:storage_blocks/iron')

    //动力搅拌器
    event.remove("create:crafting/kinetics/mechanical_mixer")
    event.smithing('create:mechanical_mixer', 'kubejs:andesite_mechanism', "kubejs:andesite_machine", "create:andesite_alloy")

    //动力砂带磨床
    event.remove("createmetallurgy:crafting/content/mechanical_belt_grinder")
    event.remove("vintageimprovements:craft/belt_grinder")
    event.smithing('createmetallurgy:mechanical_belt_grinder', 'kubejs:andesite_mechanism', "kubejs:andesite_machine", "#kubejs:sandpaper_belt")


    //黄铜机器
    //动力臂
    event.remove("create:crafting/kinetics/mechanical_arm")
    event.smithing('create:mechanical_arm', "create:precision_mechanism", "kubejs:brass_machine", "#forge:plates/brass")


    //坚固机器
    //熔铸搅拌器
    event.remove('createmetallurgy:foundry_mixer')
    event.smithing('createmetallurgy:foundry_mixer', 'kubejs:sturdy_mechanism', 'kubejs:sturdy_machine', 'createmetallurgy:sturdy_whisk')

    //柴油机
    event.remove('createdieselgenerators:diesel_engine')
    event.smithing('createdieselgenerators:diesel_engine', 'createdieselgenerators:engine_piston', 'kubejs:sturdy_machine', 'create:fluid_tank')


    //电磁机器
    //电动马达
    // event.remove("createaddition:mechanical_crafting/electric_motor")

    //交流发电机
    // event.remove("createaddition:mechanical_crafting/alternator")

    //蓄电池

    //特斯拉线圈
    // event.remove('createaddition:tesla_coil')
    // event.smithing('createaddition:tesla_coil', 'kubejs:sturdy_mechanism', 'kubejs:sturdy_machine', '#anvilcraft:capacitor')

    //心灵结印箱
    // event.remove('spectrum:pedestal/tier1/heartbound_chest')
    // event.smithing('spectrum:heartbound_chest', 'minecraft:paper', 'kubejs:crystal_machine', '#c:chests')

    //黑洞箱
    // event.remove('spectrum:pedestal/tier3/black_hole_chest')
    // event.smithing('spectrum:black_hole_chest', 'spectrum:polished_basalt', 'kubejs:onyx_machine', 'spectrum:stratine_gem')

    //装配箱
    // event.remove('spectrum:pedestal/tier3/restocking_chest')
    // event.smithing('spectrum:restocking_chest', 'spectrum:polished_calcite', 'kubejs:onyx_machine', 'spectrum:stratine_fragments')

    //垃圾桶
    // event.remove('trashcans:item_trash_can')
    // event.remove('trashcans:liquid_trash_can')
    // event.remove('trashcans:energy_trash_can')
    // event.smithing('trashcans:energy_trash_can', 'kubejs:quitoxic_mechanism', 'kubejs:quitoxic_machine', '#forge:dusts/redstone')
    // event.smithing('trashcans:liquid_trash_can', 'kubejs:quitoxic_mechanism', 'kubejs:quitoxic_machine', '#c:empty_buckets')
    // event.smithing('trashcans:item_trash_can', 'kubejs:quitoxic_mechanism', 'kubejs:quitoxic_machine', '#c:chests')

    //药水工作站
    // event.remove('spectrum:pedestal/tier3/potion_workshop')
    // event.smithing('spectrum:potion_workshop', '#c:copper_ingots', 'kubejs:quitoxic_machine', 'spectrum:stratine_fragments')
})