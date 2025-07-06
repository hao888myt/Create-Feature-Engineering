ServerEvents.recipes(event => {
    const createmetallurgy = event.recipes.createmetallurgy

    // 青钕合金锭
    event.remove('create_oppenheimered:mixing/azure_neodymium')
    createmetallurgy.casting_in_table("alexscaves:azure_neodymium_ingot", [Fluid.of("kubejs:molten_azure_neodymium", 90), "createmetallurgy:graphite_ingot_mold"], 60)
    createmetallurgy.casting_in_basin("alexscaves:block_of_azure_neodymium", Fluid.of("kubejs:molten_azure_neodymium", 810), 320)
    
    // 赤钕合金锭
    event.remove('create_oppenheimered:mixing/scarlet_neodymium')
    createmetallurgy.casting_in_table("alexscaves:scarlet_neodymium_ingot", [Fluid.of("kubejs:molten_scarlet_neodymium", 90), "createmetallurgy:graphite_ingot_mold"], 60)
    createmetallurgy.casting_in_basin("alexscaves:block_of_scarlet_neodymium", Fluid.of("kubejs:molten_scarlet_neodymium", 810), 320)
})