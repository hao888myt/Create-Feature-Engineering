ServerEvents.recipes(event => {
    const createmetallurgy = event.recipes.createmetallurgy

    // 熔融青钕合金
    createmetallurgy.alloying(Fluid.of("kubejs:molten_azure_neodymium", 90), 
        [
            Item.of("alexscaves:raw_azure_neodymium", 1),
            Fluid.of("createmetallurgy:molten_iron", 135)
    ]).heatRequirement("heated")

    // 熔融赤钕合金
    createmetallurgy.alloying(Fluid.of("kubejs:molten_scarlet_neodymium", 90), 
        [
            Item.of("alexscaves:raw_scarlet_neodymium", 1),
            Fluid.of("createmetallurgy:molten_iron", 135)
    ]).heatRequirement("heated")
})