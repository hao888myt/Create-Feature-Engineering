ServerEvents.tags("block", event => {
    let ferromagnetic_blocks = [
        "anvilcraft:hollow_magnet_block",
        "anvilcraft:magnet_block",
        "anvilcraft:ferrite_core_magnet_block",

        "create:content_observer"
    ]
    ferromagnetic_blocks.forEach(block => {
        event.add("alexscaves:ferromagnetic_blocks", block)
    })

    // 苍绿催化体
    event.add("minecraft:needs_diamond_tool", "create_feature_engineering:paltaeria_catalyst")
    event.add("minecraft:mineable/pickaxe", "create_feature_engineering:paltaeria_catalyst")

    // 钢机壳
    event.add("minecraft:mineable/axe", "create_feature_engineering:steel_casing")
    event.add("minecraft:mineable/pickaxe", "create_feature_engineering:steel_casing")

    let anvils = [
        "minecraft:anvil",
        "minecraft:chipped_anvil",
        "minecraft:damaged_anvil",
        "anvilcraft:royal_anvil",
        "anvilcraft:ember_anvil",
        "anvilcraft:spectral_anvil",
        "spectrum:bedrock_anvil"
    ]

    anvils.forEach(anvil => {
        event.remove("alexscaves:ferromagnetic_blocks", anvil)
        event.remove("alexscaves:magnetron_weapons", anvil)
    })

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
