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
})
