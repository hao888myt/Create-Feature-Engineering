// priority: 1000
ServerEvents.tags("item", event => {
    let fire_immune = [
        "spectrum:bedrock_dust",
        "spectrum:shimmerstone_gem",
        "minecraft:slime_ball"
    ].forEach(item => {
        event.add("lychee:fire_immune", item)
    })

    let fusion_shrines = [
        "spectrum:fusion_shrine_basalt",
        "spectrum:fusion_shrine_calcite"
    ].forEach(fusion_shrine => {
        event.add(`${global.ModPackId}:fusion_shrines`, fusion_shrine)
    })

    global.SuperHeating.forEach(item => {
        event.add("anvilcraft:super_heating_boost_production", item[0])
    })

    //添加催化剂标签
    event.add("create_feature_engineering:catalysts", "create_feature_engineering:paltaeria_catalyst")
    event.add("create_feature_engineering:catalysts", "create_feature_engineering:stratine_catalyst")
    event.add("create_feature_engineering:catalysts", "create_feature_engineering:hover_catalyst")
    event.add("create_feature_engineering:catalysts", "create_feature_engineering:gravity_catalyst")

    let ingots = [
        ["steel", "create_feature_engineering:steel_ingot"],
        ["andesite_alloy", "create:andesite_alloy"]
    ].forEach(ingot => {
        event.add(`c:ingots/${ingot[0]}`, ingot[1])
    })

    let sheets = [
        ["andesite_alloy", "vintageimprovements:andesite_sheet"]
    ].forEach(ingot => {
        event.add(`c:plates/${ingot[0]}`, ingot[1])
    })

    //添加橡胶标签
    event.add("neoforge:rubber", "create_feature_engineering:rubber")

    //添加树脂标签
    event.add("create_feature_engineering:sap", "anvilcraft:resin")

    let crystal_blocks = [
        "minecraft:amethyst_block",
        "spectrum:citrine_block",
        "spectrum:topaz_block",
        "spectrum:onyx_block",
        "spectrum:moonstone_block"
    ].forEach(crystal_block => {
        event.add("create_feature_engineering:crystal_blocks", crystal_block)
    })

    let golem_shards = [
        "spectrum:topaz_shard",
        "spectrum:citrine_shard",
        "spectrum:onyx_shard",
        "spectrum:moonstone_shard",

        "minecraft:amethyst_cluster",
        "spectrum:topaz_cluster",
        "spectrum:citrine_cluster",
        "spectrum:onyx_cluster",
        "spectrum:moonstone_cluster"
    ].forEach(shard => {
        event.add("ars_nouveau:golem/shard", shard)
    })

    let magic_saplings = [
        "ars_nouveau:blue_archwood_sapling",
        "ars_nouveau:red_archwood_sapling",
        "ars_nouveau:purple_archwood_sapling",
        "ars_nouveau:green_archwood_sapling",
        "ars_elemental:yellow_archwood_sapling"
    ].forEach(shard => {
        event.add(`${global.ModPackId}:magic_saplings`, shard)
    })

    let skip_block_interaction = [
        "create_fantasizing:copper_fluid_barrel",
        "create_fantasizing:zinc_fluid_barrel",
        "create_fantasizing:gold_fluid_barrel",
        "create_fantasizing:diamond_fluid_barrel",
        "create_fantasizing:andesite_crate",
        "create_fantasizing:iron_crate",
        "create_fantasizing:brass_crate",
        "create_fantasizing:sturdy_crate",
        
        "ars_nouveau:arcane_pedestal",
        "ars_nouveau:arcane_platform",
        "ars_nouveau:dominion_wand"
    ].forEach(item => {
        event.add(`${global.ModPackId}:skip_block_interaction`, item)
    })

    let skip_block_interaction_all = [
        "create_fantasizing:block_placer"
    ].forEach(item => {
        event.add(`${global.ModPackId}:skip_block_interaction_all`, item)
    })
})
