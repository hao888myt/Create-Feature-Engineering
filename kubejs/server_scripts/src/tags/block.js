ServerEvents.tags("block", event => {
    // 苍绿催化体
    event.add("minecraft:needs_diamond_tool", "create_feature_engineering:paltaeria_catalyst")
    event.add("minecraft:mineable/pickaxe", "create_feature_engineering:paltaeria_catalyst")

    let faucet_fillable = [
        "create:fluid_tank",
        "create:creative_fluid_tank",
        "create_connected:fluid_vessel",
        "create_connected:creative_fluid_vessel",
        "fluidlogistics:multi_fluid_tank",
        "fluidlogistics:horizontal_multi_fluid_tank",
        "fluidlogistics:infinite_fluid_tank",
        "createdieselgenerators:canister",
        "createdieselgenerators:oil_barrel"
    ]

    faucet_fillable.forEach(block => {
        event.add("fluidlogistics:faucet_fillable", block)
    })

    let drawers = [
        "storagedrawers:compacting_drawers_2",
        "storagedrawers:compacting_drawers_3",

        "storagedrawers:compacting_half_drawers_2",
        "storagedrawers:compacting_half_drawers_3",
    ].forEach(drawer => {
        event.add("storagedrawers:drawers", drawer)

        if (drawer.includes("half")) {
            event.add("storagedrawers:half_drawers", drawer)
        } else {
            event.add("storagedrawers:full_drawers", drawer)
        }
    })
    let golem_cluster = [
        "spectrum:topaz_cluster",
        "spectrum:citrine_cluster",
        "spectrum:onyx_cluster",
        "spectrum:moonstone_cluster"
    ].forEach(block => {
        event.add("ars_nouveau:golem/cluster", block)
    })

    let golem_budding = [
        "spectrum:budding_topaz",
        "spectrum:budding_citrine",
        "spectrum:budding_onyx",
        "spectrum:budding_moonstone"
    ].forEach(block => {
        event.add("ars_nouveau:golem/budding", block)
    })
})
