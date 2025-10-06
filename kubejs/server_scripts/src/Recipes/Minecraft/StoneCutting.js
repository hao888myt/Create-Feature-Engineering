ServerEvents.recipes(event => {
    // 切数字
    let numbers = [
        Item.of("kubejs:zero"),
        Item.of("kubejs:one"),
        Item.of("kubejs:two"),
        Item.of("kubejs:three"),
        Item.of("kubejs:four"),
        Item.of("kubejs:five"),
        Item.of("kubejs:six"),
        Item.of("kubejs:seven"),
        Item.of("kubejs:eight"),
        Item.of("kubejs:nine")
    ]
    numbers.forEach((item) => {
        event.stonecutting(item,"#kubejs:numbers")
    })

    // 科技主线
    let andesite_machine = [
        Item.of("create:andesite_tunnel", 4),
        Item.of("create:andesite_funnel", 4),
        Item.of("create:mechanical_roller", 2),
        Item.of("create:mechanical_harvester", 2),
        Item.of("create:mechanical_plough", 2),
        Item.of("create:portable_storage_interface", 2),
        Item.of("create:chain_conveyor", 4),
        Item.of("create:powered_latch", 4),
        Item.of("create:powered_toggle_latch", 4),
        Item.of("quark:crafter", 4)
    ]

    let andseite_remove = [
        "create:crafting/logistics/andesite_tunnel",
        "create:crafting/logistics/andesite_funnel",
        "create:crafting/kinetics/mechanical_roller",
        "create:crafting/kinetics/mechanical_harvester",
        "create:crafting/kinetics/mechanical_plough",
        "create:crafting/kinetics/portable_storage_interface",
        "create:crafting/kinetics/chain_conveyor",
        "create:crafting/logistics/powered_latch",
        "create:crafting/logistics/powered_toggle_latch"
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
        Item.of("create:smart_chute", 4),
        Item.of("create:pulse_repeater", 4),
        Item.of("create:pulse_extender", 4),
        Item.of("create:pulse_timer", 4)
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
        "create:crafting/logistics/pulse_repeater",
        "create:crafting/logistics/pulse_extender",
        "create:crafting/logistics/pulse_timer"
    ]

    let sturdy_machine = [
        Item.of("create:track_observer", 8),
        Item.of("create:track_station", 8),
        Item.of("create:track_signal", 8),
        Item.of("create:controls", 8),
        Item.of("railways:portable_fuel_interface", 2),
        Item.of("railways:semaphore", 4),
        Item.of("railways:track_coupler", 4),
        Item.of("railways:track_switch_andesite", 4),
        Item.of("railways:track_switch_brass", 4),
    ]

    let sturdy_remove = [
        "railways:crafting/portable_fuel_interface"
    ]

    let magnet_machine = [
        Item.of("anvilcraft:power_converter_big", 1),
        Item.of("anvilcraft:power_converter_middle", 3),
        Item.of("anvilcraft:power_converter_small", 9),
        Item.of("anvilcraft:load_monitor", 4),
        Item.of("anvilcraft:induction_light", 8)
    ]

    let magnet_remove = [
        "anvilcraft:power_converter_big",
        "anvilcraft:load_monitor",
        "anvilcraft:induction_light",
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
        Item.of("create:item_drain", 8),
        Item.of("create:spout", 4),
        Item.of("create:portable_fluid_interface", 2),
        Item.of("ratatouille:irrigation_tower", 2),
        Item.of("sliceanddice:sprinkler", 4),
        Item.of("functionalstorage:fluid_1", 4),
        Item.of("functionalstorage:fluid_2", 4),
        Item.of("functionalstorage:fluid_4", 4),
        Item.of("fluid:copper_tap", 4),
        Item.of("fluid:fluid_interface", 4)
    ]

    let copper_remove = [
        "create:crafting/kinetics/item_drain",
        "create:crafting/kinetics/spout",
        "create:crafting/kinetics/portable_fluid_interface",
        "ratatouille:irrigation_tower",
        "sliceanddice:sprinkler",
        "functionalstorage:fluid_1",
        "functionalstorage:fluid_2",
        "functionalstorage:fluid_4"
    ]

    let logistics_machine = [
        Item.of("create:stock_ticker", 2),
        Item.of("create:stock_link", 4),
        Item.of("create_factory_logistics:network_link",4),
        Item.of("create:package_frogport", 4),
        Item.of("create_factory_logistics:jar_packager", 4),
        Item.of("create:packager", 4),
        Item.of("create:repackager", 4),
        Item.of("create:redstone_requester", 4),
        Item.of("create:factory_gauge", 8),
        Item.of("create_factory_logistics:factory_fluid_gauge", 8),
        Item.of("create:redstone_link", 4),
        Item.of("create_connected:linked_transmitter", 4),
        Item.of("functionalstorage:storage_controller", 2),
        Item.of("functionalstorage:controller_extension", 4),
    ]

    let logistics_remove = [
        "create:crafting/logistics/packager",
        "create:crafting/logistics/redstone_requester",
        "create:crafting/logistics/factory_gauge",
        "create:crafting/logistics/stock_ticker",
        "create:crafting/logistics/stock_link",
        "create:crafting/logistics/package_frogport",
        "create_factory_logistics:network_link",
        "create_factory_logistics:factory_fluid_gauge",
        "create_factory_logistics:jar_packager",
        "create:crafting/logistics/redstone_link",
        "functionalstorage:storage_controller",
        "functionalstorage:controller_extension"
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

    // 混合线
    let agriculture_machine = [
        Item.of("createfisheryindustry:frame_trap", 8), 
        Item.of("createfisheryindustry:trap_nozzle", 4), 
        Item.of("createfisheryindustry:mesh_trap", 4), 
        Item.of("ratatouille:squeeze_basin", 2), 
        Item.of("ratatouille:compost_tower", 4), 
        Item.of("ratatouille:thresher", 4),
        Item.of("createeggproduction:empty_egg_collector_block", 4), 
        Item.of("createeggproduction:incubator", 2)
    ]

    let agriculture_remove = [
        "createfisheryindustry:frame_trap",
        "createfisheryindustry:trap_nozzle",
        "createfisheryindustry:mesh_trap",
        "ratatouille:squeeze_basin",
        "ratatouille:compost_tower",
        "ratatouille:thresher",
        "createeggproduction:empty_egg_collector_block",
        "createeggproduction:incubator"
    ]

    let optical_machine = [
        Item.of('create_optical:encased_mirror', 4), 
        Item.of('create_optical:polarizing_beam_splitter_block', 4), 
        Item.of('create_optical:absorption_polarizing_filter', 4),
        Item.of("create_optical:optical_sensor", 4),
        Item.of("anvilcraft:heliostats", 4),
    ]

    let optical_remove = [
        "create_optical:encased_mirror",
        "create_optical:polarizing_beam_splitter_block",
        "create_optical:absorption_polarizing_filter",
        "create_optical:optical_sensor",
        "anvilcraft:heliostats"
    ]

    agriculture_machine.forEach((item) => {
        event.stonecutting(item, "kubejs:agriculture_machine")
    })

    agriculture_remove.forEach((recipe) => {
        event.remove(recipe)
    })

    optical_machine.forEach((item) => {
        event.stonecutting(item, "kubejs:optical_machine")
    })

    optical_remove.forEach((recipe) => {
        event.remove(recipe)
    })
})