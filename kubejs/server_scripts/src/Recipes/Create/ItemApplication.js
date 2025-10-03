ServerEvents.recipes((event) => {
    const create = event.recipes.create
    
    // 保险库
    event.remove({mod: "create_bs"})
    event.remove("create:crafting/kinetics/item_vault")
    create.item_application("create:item_vault", ["create_bs:wooden_item_vault", "#forge:ingots/iron"])
    create.item_application("create_bs:copper_item_vault", ["create:item_vault", "#forge:plates/copper"])
    create.item_application("create_bs:iron_item_vault", ["create_bs:copper_item_vault", "#forge:plates/iron"])
    create.item_application("create_bs:gold_item_vault", ["create_bs:iron_item_vault", "#forge:plates/gold"])
    create.item_application("create_bs:crystal_item_vault", ["create_bs:gold_item_vault", "#forge:glass"])
    create.item_application("create_bs:diamond_item_vault", ["create_bs:crystal_item_vault", "#forge:gems/diamond"])
    create.item_application("create_bs:obsidian_item_vault", ["create_bs:diamond_item_vault", "#forge:plates/obsidian"])
    create.item_application("create_bs:netherite_item_vault", ["create_bs:obsidian_item_vault", "#forge:plates/netherite"])

    // 科技主线
    let andesite_machine = [
        ["createmetallurgy:mechanical_belt_grinder", "createmetallurgy:sandpaper_belt"],
        ["create:mechanical_drill", "#forge:ingots/iron"],
        ["create:mechanical_saw", "#forge:plates/iron"],
        ["create:mechanical_press", "#forge:storage_blocks/iron"],
        ["create:mechanical_mixer", "create:whisk"],
        ["create:encased_fan", "create:propeller"],
        ["create:millstone", "#forge:stone"],
        ["vintageimprovements:spring_coiling_machine", "vintageimprovements:spring_coiling_machine_wheel"],
        ["createaddition:rolling_mill", "create:shaft"],
        ["ratatouille:mechanical_demolder", "#forge:slimeballs"],
        ["vintageimprovements:curving_press", "vintageimprovements:iron_spring"]
    ]

    let brass_machine = [
        ["create:mechanical_arm", "#forge:plates/brass"],
        ["fluid:pipette", "kubejs:copper_mechanism"],
    ]

    let sturdy_machine = [
        ["createmetallurgy:foundry_mixer", "createmetallurgy:sturdy_whisk"],
        ["createdieselgenerators:diesel_engine", "createdieselgenerators:engine_piston"],
        ["createdieselgenerators:pumpjack_hole", "create:fluid_pipe"]
    ]
    let sturdy_casing = [
        ["create:track_signal", "create:electron_tube"],
        ["create:controls", "minecraft:lever"],
        ["create:track_station", "minecraft:compass"]
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
    event.remove("vintageimprovements:craft/belt_grinder")
    create.item_application("create:deployer", ["create:andesite_casing", "create:brass_hand"])


    brass_machine.forEach((items) => {
        event.remove({output: items[0]})
        create.item_application(items[0], ["kubejs:brass_machine", items[1]])
    })
    event.remove("fluid:smart_fluid_interface")
    create.item_application("fluid:smart_fluid_interface", ["fluid:fluid_interface", "kubejs:copper_mechanism"])
    event.remove("fluid:centrifugal_pump")
    create.item_application("fluid:centrifugal_pump", ["create:mechanical_pump", "create:propeller"])


    sturdy_machine.forEach((items) => {
        event.remove({output: items[0]})
        create.item_application(items[0], ["kubejs:sturdy_machine", items[1]])
    })
    sturdy_casing.forEach((items) => {
        event.remove({output: items[0]})
        create.item_application(items[0], ["create:railway_casing", items[1]])
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
        ["vintageimprovements:vacuum_chamber", "create:mechanical_pump"]
    ]

    copper_machine.forEach((items) => {
        event.remove( {output: items[0]})
        create.item_application(items[0], ["kubejs:copper_machine", items[1]])
    })

    // 混合线
    let agriculture_machine = [
        ["ratatouille:spreader", "create:propeller"]
    ]

    let optical_machine = [
        ["create_optical:optical_receptor", "create_optical:copper_coil"],
        ["create_optical:heavy_optical_receptor", "create_optical:golden_coil"],
        ["create_optical:beam_condenser", "create_optical:rose_quartz_catalyst_coil"],
        ["create_optical:hologram_source", "create_optical:zinc_coil"],
        ["create_optical:optical_source", "create_optical:optical_device"],
        ["create_optical:beam_focuser", "create_optical:mirror"],
        ["anvilcraft:ruby_prism", "kubejs:royal_prism"],
        ["anvilcraft:ruby_laser", "kubejs:royal_optical_device"],
    ]

    agriculture_machine.forEach((items) => {
        event.remove({output: items[0]})
        create.item_application(items[0], ["kubejs:agriculture_machine", items[1]])
    })

    optical_machine.forEach((items) => {
        event.remove({output: items[0]})
        create.item_application(items[0], ["kubejs:optical_machine", items[1]])
    })
    event.remove("create_optical:thermal_optical_source")
    create.item_application("create_optical:thermal_optical_source", ["create_optical:optical_source", "#kubejs:fluid_tanks"])

    // 动力泵
    event.remove({output: "create:mechanical_pump"})
    create.item_application("create:mechanical_pump", ["create:fluid_pipe", "create:cogwheel"])

    // 烈焰人燃烧室
    create.item_application("create:empty_blaze_burner", ["minecraft:netherrack", "#forge:plates/iron"])
})