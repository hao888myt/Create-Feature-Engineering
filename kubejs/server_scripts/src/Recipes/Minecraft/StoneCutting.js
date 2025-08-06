ServerEvents.recipes(event => {
    
    // 科技主线
    let andesite_machine = [
        Item.of("create:andesite_tunnel", 4),
        Item.of("create:andesite_funnel", 4),
        Item.of("create:mechanical_roller", 1),
        Item.of("create:mechanical_harvester", 2),
        Item.of("create:mechanical_plough", 2),
        Item.of("create:encased_chain_drive", 16),
        Item.of("create:portable_storage_interface", 2)
    ]

    let andseite_remove = [
        "create:crafting/logistics/andesite_tunnel",
        "create:crafting/logistics/andesite_funnel",
        "create:crafting/kinetics/mechanical_roller",
        "create:crafting/kinetics/mechanical_harvester",
        "create:crafting/kinetics/mechanical_plough",
        "create:crafting/kinetics/portable_storage_interface"
    ]

    let brass_machine = [
        Item.of("create:brass_tunnel", 4),
        Item.of("create:brass_funnel", 4),
        Item.of("create:rotation_speed_controller", 2),
        Item.of("create:sequenced_gearshift", 8),
        Item.of("create:deployer", 4),
        Item.of("create:mechanical_crafter", 4),
        Item.of("create:stockpile_switch", 4),
        Item.of("create_connected:overstress_clutch", 4),
        Item.of("create_connected:inventory_access_port", 4),
        Item.of("create:content_observer", 4),
        Item.of("create:smart_fluid_pipe", 4),
        Item.of("create:smart_chute", 4)
    ]

    let brass_remove = [
        "create:crafting/logistics/brass_tunnel",
        "create:crafting/logistics/brass_funnel",
        "create:crafting/kinetics/rotation_speed_controller",
        "create:crafting/kinetics/sequenced_gearshift",
        "create:crafting/kinetics/mechanical_crafter",
        "create:crafting/logistics/stockpile_switch",
        "create_connected:crafting/kinetics/inventory_access_port",
        "create_connected:crafting/kinetics/overstress_clutch",
        "create:crafting/logistics/content_observer",
        "create:crafting/kinetics/smart_fluid_pipe",
        "create:crafting/kinetics/smart_chute",
    ]

    let sturdy_machine = [
        Item.of("createdieselgenerators:pumpjack_bearing", 2),
        "createdieselgenerators:pumpjack_crank",
        "createdieselgenerators:pumpjack_head",
        Item.of("anvilcraft:impact_pile", 4),
        Item.of("railways:portable_fuel_interface", 2)
    ]

    let sturdy_remove = [
        "createdieselgenerators:crafting/pumpjack_bearing",
        "createdieselgenerators:mechanical_crafting/pumpjack_crank",
        "createdieselgenerators:crafting/pumpjack_head",
        "anvilcraft:impact_pile",
        "railways:crafting/portable_fuel_interface"
    ]

    let magnet_machine = [
        Item.of("alexscaves:magnetic_levitation_rail", 16),
        Item.of("alexscaves:hologram_projector", 4),
        Item.of("alexscaves:magnetic_light", 2),
        Item.of("alexscaves:azure_magnet", 2),
        Item.of("alexscaves:scarlet_magnet", 2),
        Item.of("alexscaves:magnetic_activator", 4),
        Item.of("createaddition:connector", 4),
        Item.of("createaddition:large_connector", 2),
        Item.of("anvilcraft:power_converter_big", 1),
        Item.of("anvilcraft:power_converter_middle", 3),
        Item.of("anvilcraft:power_converter_small", 9),
        Item.of("anvilcraft:transmission_pole", 2),
        Item.of("anvilcraft:load_monitor", 4),
        Item.of("anvilcraft:induction_light", 8),
        Item.of("createaddition:portable_energy_interface", 2)
    ]

    let magnet_remove = [
        "alexscaves:magnetic_levitation_rail",
        "alexscaves:hologram_projector",
        "alexscaves:magnetic_light",
        "alexscaves:azure_magnet",
        "alexscaves:scarlet_magnet",
        "createaddition:crafting/small_connector_copper",
        "createaddition:crafting/large_connector_electrum",
        "anvilcraft:power_converter_big",
        "anvilcraft:transmission_pole",
        "anvilcraft:load_monitor",
        "anvilcraft:induction_light",
        "createaddition:crafting/portable_energy_interface"
    ]

    andesite_machine.forEach((item) => {
        event.stonecutting(item, "kubejs:andesite_machine")
    })
    
    andseite_remove.forEach((recipe) => {
        event.remove(recipe)
    })

    brass_machine.forEach((item) => {
        event.stonecutting(item, "kubejs:brass_machine")
    })

    brass_remove.forEach((recipe) => {
        event.remove(recipe)
    })

    sturdy_machine.forEach((item) => {
        event.stonecutting(item, "kubejs:sturdy_machine")
    })

    sturdy_remove.forEach((recipe) => {
        event.remove(recipe)
    })

    magnet_machine.forEach((item) => {
        event.stonecutting(item, "kubejs:magnet_machine")
    })

    magnet_remove.forEach((recipe) => {
        event.remove(recipe)
    })

    // 科技支线
    let copper_machine = [
        Item.of("create:portable_fluid_interface", 2)
    ]

    let copper_remove = [
        "create:crafting/kinetics/portable_fluid_interface"
    ]

    let logistics_machine = [
        Item.of("create:chain_conveyor", 8),
        Item.of("create:stock_ticker", 2),
        Item.of("create:stock_link", 4),
        Item.of("create:package_frogport", 4),
        Item.of("create:packager", 4),
        Item.of("create:repackager", 4),
        Item.of("create:redstone_requester", 2),
        Item.of("create:factory_gauge", 8),
    ]

    let logistics_remove = [
        "create:crafting/logistics/packager",
        "create:crafting/logistics/redstone_requester",
        "create:crafting/logistics/factory_gauge",
        "create:crafting/logistics/stock_ticker",
        "create:crafting/logistics/stock_link",
        "create:crafting/logistics/package_frogport",
        "create:crafting/kinetics/chain_conveyor"
    ]

    copper_machine.forEach((item) => {
        event.stonecutting(item, "kubejs:copper_machine")
    })

    copper_remove.forEach((recipe) => {
        event.remove(recipe)
    })
    
    logistics_machine.forEach((item) => {
        event.stonecutting(item, "kubejs:logistics_machine")
    })

    logistics_remove.forEach((recipe) => {
        event.remove(recipe)
    })
})