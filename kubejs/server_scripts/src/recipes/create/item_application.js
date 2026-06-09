ServerEvents.recipes((event) => {
    const create = event.recipes.create

    // 科技主线
    let andesite_machine = [
        ["create:mechanical_drill", Ingredient.of("#c:ingots/iron")],
        ["create:mechanical_saw", Ingredient.of("#c:plates/iron")],
        ["create:mechanical_press", Ingredient.of("#c:storage_blocks/iron")],
        ["create:mechanical_mixer", "create:whisk"],
        ["create:encased_fan", "create:propeller"],
        ["create:millstone", Ingredient.of("#c:stones")],
        ["vintageimprovements:spring_coiling_machine", "vintageimprovements:spring_coiling_machine_wheel"],
        ["vintageimprovements:curving_press", "vintageimprovements:iron_spring"]
    ]

    let brass_machine = [
        ["create:mechanical_arm", Ingredient.of("#c:plates/brass")],
    ]

    // let sturdy_machine = [
        
    // ]
    let sturdy_casing = [
        ["create:track_signal", "create:electron_tube"],
        ["create:controls", "minecraft:lever"],
        ["create:track_station", "minecraft:compass"]
    ]

    let magnet_machine = [
        ["alexscaves:quarry", "alexscaves:heart_of_iron"],
    ]

    andesite_machine.forEach((items) => {
        event.remove({output: items[0]})
        create.item_application(items[0], ["create_feature_engineering:andesite_machine", items[1]])
    })
    event.remove("create:crafting/kinetics/deployer")
    event.remove("vintageimprovements:craft/belt_grinder")
    create.item_application("create:deployer", ["create:andesite_casing", "create:brass_hand"])


    brass_machine.forEach((items) => {
        event.remove({output: items[0]})
        create.item_application(items[0], ["create_feature_engineering:brass_machine", items[1]])
    })
    event.remove("fluid:smart_fluid_interface")
    create.item_application("fluid:smart_fluid_interface", ["fluid:fluid_interface", "create_feature_engineering:copper_mechanism"])
    event.remove("fluid:centrifugal_pump")
    create.item_application("fluid:centrifugal_pump", ["create:mechanical_pump", "create:propeller"])

    
    sturdy_casing.forEach((items) => {
        event.remove({output: items[0]})
        create.item_application(items[0], ["create:railway_casing", items[1]])
    })

    event.remove({output: "createdieselgenerators:large_diesel_engine"})
    // create.item_application("create_feature_engineering:steel_casing", ["#c:stripped_logs", "#c:ingots/steel"])


    magnet_machine.forEach((items) => {
        // event.remove({output: items[0]})
        create.item_application(items[0], ["create_feature_engineering:magnet_machine", items[1]])
    })

    // 科技支线
    let copper_machine = [
        ["create:hose_pulley", "minecraft:dried_kelp_block"],
        ["vintageimprovements:vacuum_chamber", "create:mechanical_pump"]
    ]

    copper_machine.forEach((items) => {
        event.remove( {output: items[0]})
        create.item_application(items[0], ["create_feature_engineering:copper_machine", items[1]])
    })

    // 混合线
    let agriculture_machine = [
        // ["ratatouille:spreader", "create:propeller"]
    ]

    let optical_machine = [
        ["create_optical:optical_receptor", "create_optical:copper_coil"],
        ["create_optical:heavy_optical_receptor", "create_optical:golden_coil"],
        ["create_optical:beam_condenser", "create_optical:rose_quartz_catalyst_coil"],
        ["create_optical:hologram_source", "create_optical:zinc_coil"],
        ["create_optical:optical_source", "create_optical:optical_device"],
        ["create_optical:beam_focuser", "create_optical:mirror"],
        ["anvilcraft:ruby_prism", "create_feature_engineering:royal_prism"],
        ["anvilcraft:ruby_laser", "create_feature_engineering:royal_optical_device"],
    ]

    agriculture_machine.forEach((items) => {
        event.remove({output: items[0]})
        create.item_application(items[0], ["create_feature_engineering:agriculture_machine", items[1]])
    })

    optical_machine.forEach((items) => {
        event.remove({output: items[0]})
        create.item_application(items[0], ["create_feature_engineering:optical_machine", items[1]])
    })
    event.remove("create_optical:thermal_optical_source")
    create.item_application("create_optical:thermal_optical_source", ["create_optical:optical_source", Ingredient.of("#create_feature_engineering:fluid_tanks")])

    // 动力泵
    event.remove({output: "create:mechanical_pump"})
    create.item_application("create:mechanical_pump", ["create:fluid_pipe", "create:cogwheel"])

    // 烈焰人燃烧室
    create.item_application("create:empty_blaze_burner", ["minecraft:netherrack", Ingredient.of("#c:plates/iron")])
})
