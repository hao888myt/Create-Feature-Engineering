ServerEvents.recipes((event) => {
    const create = event.recipes.create
    
    // 下界箱子
    event.remove("netherchested:nether_chest")
    create.item_application("netherchested:nether_chest", ["#forge:chests", "minecraft:nether_bricks"])


    // 科技主线
    let andesite_machine = [
        ["createmetallurgy:mechanical_belt_grinder", "#kubejs:sandpaper_belt"],
        ["create:mechanical_drill", "#forge:ingots/iron"],
        ["create:mechanical_saw", "#forge:plates/iron"],
        ["create:mechanical_press", "#forge:storage_blocks/iron"],
        ["create:mechanical_mixer", "create:whisk"],
        ["create:encased_fan", "create:propeller"],
        ["create:millstone", "#forge:stone"]
    ]

    let brass_machine = [
        ["create:mechanical_arm", "#forge:plates/brass"],
    ]

    let sturdy_machine = [
        ["createmetallurgy:foundry_mixer", "createmetallurgy:sturdy_whisk"],
        ["createdieselgenerators:diesel_engine", "createdieselgenerators:engine_piston"],
        ["createdieselgenerators:pumpjack_hole", "create:fluid_pipe"]
    ]

    let magnet_machine = [
        ["moreburners:electric_burner", "create:empty_blaze_burner"],
        ["alexscaves:quarry", "alexscaves:heart_of_iron"],
        ["anvilcraft:heater", "moreburners:copper_coil"],
        ["anvilcraft:charge_collector", "anvilcraft:magnet_ingot"],
        ["createaddition:electric_motor", "#forge:plates/brass"],
        ["createaddition:alternator", "#forge:plates/iron"],
        ["createaddition:modular_accumulator", "#anvilcraft:capacitor"],
        ["createaddition:tesla_coil", "createaddition:copper_spool"]
    ]

    andesite_machine.forEach((items) => {
        event.remove({output: items[0]})
        create.item_application(items[0], ["kubejs:andesite_machine", items[1]])
    })
    event.remove("create:crafting/kinetics/deployer")
    create.item_application("create:deployer", ["create:andesite_casing", "create:brass_hand"])


    brass_machine.forEach((items) => {
        event.remove({output: items[0]})
        create.item_application(items[0], ["kubejs:brass_machine", items[1]])
    })


    sturdy_machine.forEach((items) => {
        event.remove({output: items[0]})
        create.item_application(items[0], ["kubejs:sturdy_machine", items[1]])
    })

    event.remove({output: "createdieselgenerators:large_diesel_engine"})
    event.remove({output: "railways:fuel_tank"})
    create.item_application("railways:fuel_tank", ["create:fluid_tank", "#forge:plates/obsidian"])
    create.item_application("createdieselgenerators:large_diesel_engine", ["createdieselgenerators:diesel_engine", "#forge:storage_blocks/brass"])
    create.item_application("kubejs:steel_casing", ["#forge:stripped_logs", "#forge:ingots/steel"])


    magnet_machine.forEach((items) => {
        event.remove({output: items[0]})
        create.item_application(items[0], ["kubejs:magnet_machine", items[1]])
    })

    // 科技支线
    let copper_machine = [
        ["create:hose_pulley", "minecraft:dried_kelp_block"],
    ]

    let copper_casing = [
        ["create:item_drain", "minecraft:iron_bars"],
        ["create:spout", "minecraft:dried_kelp"]
    ]

    copper_machine.forEach((items) => {
        event.remove( {output: items[0]})
        create.item_application(items[0], ["kubejs:copper_machine", items[1]])
    })

    copper_casing.forEach((items) => {
        event.remove( {output: items[0]})
        create.item_application(items[0], ["create:copper_casing", items[1]])
    })

    event.remove({output: "create:mechanical_pump"})
    create.item_application("create:mechanical_pump", ["create:fluid_pipe", "create:cogwheel"])

    // 烈焰人燃烧室
    create.item_application("create:blaze_burner", ["minecraft:netherrack", "create:iron_sheet"])
})