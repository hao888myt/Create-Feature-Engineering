// priority: 1000
ServerEvents.tags("item", event => {
    event.add("lychee:fire_immune", "spectrum:bedrock_dust")
    event.add("lychee:fire_immune", "spectrum:shimmerstone_gem")

    //添加催化剂标签
    event.add("create_feature_engineering:catalysts", "create_feature_engineering:paltaeria_catalyst")
    event.add("create_feature_engineering:catalysts", "create_feature_engineering:stratine_catalyst")
    event.add("create_feature_engineering:catalysts", "create_feature_engineering:hover_catalyst")
    event.add("create_feature_engineering:catalysts", "create_feature_engineering:gravity_catalyst")

    let ingots = [
        ["steel", "create_feature_engineering:steel_ingot"],
        ["andesite_alloy", "create:andesite_alloy"],
        ["azure_neodymium", "alexscaves:azure_neodymium_ingot"],
        ["scarlet_neodymium", "alexscaves:scarlet_neodymium_ingot"]
    ]
    ingots.forEach(ingot => {
        event.add(`c:ingots/${ingot[0]}`, ingot[1])
    })

    //添加橡胶标签
    event.add("neoforge:rubber", "create_feature_engineering:rubber")

    //添加树脂标签
    event.add("create_feature_engineering:sap", "anvilcraft:resin")
    event.add("create_feature_engineering:sap", "alexscaves:pewen_sap")

    let crystal_blocks = [
        "minecraft:amethyst_block", 
        "spectrum:citrine_block", 
        "spectrum:topaz_block", 
        "spectrum:onyx_block", 
        "spectrum:moonstone_block"
    ]
    crystal_blocks.forEach(crystal_block => {
        event.add("create_feature_engineering:crystal_blocks", crystal_block)
    })
})
