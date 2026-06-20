ResearchdEvents.registerResearchPacks(event => {
    let research_packs = [
        ["conveying", "#81868A"],
        ["logistics", "#3C3F40"],
        ["smart", "#E8B74D"],
        ["fluid", "#bf5935"],
        ["chemical", "#94C2E6"],
        ["electrical", "#3077D4"],
        ["package", "#6B4F30"],
    ]

    research_packs.forEach(pack => {
        let color = hexToRgb(pack[1])
        event.create(`${global.ModPackId}:${pack[0]}`)
            .color(color[0], color[1], color[2])
    })
})

ResearchdEvents.registerResearches(event => {
    let rp = {
        conveying: "conveying",
        logistics: "logistics",
        smart: "smart",
        fluid: "fluid",
        chemical: "chemical",
        electrical: "electrical",
        package: "package"
    }

    /**
     * @param {string} id
     * @param {number} count
     */
    function consumeItem(id, count) {
        return ResearchMethodHelper.consumeItem(id, count)
    }

    /**
     * @param {*[][]} items
     */
    function consumeItems(items) {
        let result = []
        items.forEach(item => {
            result.push(consumeItem(item[0], item[1]))
        })
        return result
    }

    /**
     * @param {string} id 
     * @param {number} count 
     * @param {number} duration 单位：tick
     */
    function consumePack(id, count, duration) {
        return ResearchMethodHelper.consumePack(`${global.ModPackId}:${id}`, count, duration)
    }

    /**
     * @param {*[][]} packs
     */
    function consumePacks(packs) {
        let result = []
        packs.forEach(pack => {
            result.push(consumePack(pack[0], pack[1], pack[2]))
        })
        return ResearchMethodHelper.and(result)
    }

    /**
     * @param {string} recipe 
     * @returns 
     */
    function unlockRecipe(recipe) {
        return ResearchEffectHelper.unlockRecipe(recipe)
    }

    /**
     * @param {string[]} recipes
     * @returns 
     */
    function unlockRecipes(recipes) {
        return ResearchEffectHelper.unlockRecipes(recipes)
    }

    event.create("conveying")
        .translatableName("传动研究包")
        .translatableDescription("千里之行，始于足下")
        .iconStacks('researchd:research_pack[researchd:research_pack="create_feature_engineering:conveying"]')
        .method(consumeItem("create:andesite_alloy", 16))
        .effect(unlockRecipe("create_feature_engineering:conveying"))

    event.create("harvester_plough")
        .translatableName("开垦与收割")
        .translatableDescription("解锁动力犁和动力收割机")
        .icon("create:mechanical_harvester")
        .method(consumePack(rp.conveying, 8, 100))
        .effect(unlockRecipes([
            "kubejs:kjs/create_mechanical_harvester",
            "kubejs:kjs/create_mechanical_plough"
        ]))

    event.create("simple_process")
        .translatableName("简单加工")
        .translatableDescription("解锁卷簧机和动力砂轮")
        .icon("vintageimprovements:spring_coiling_machine")
        .method(consumePack(rp.conveying, 8, 100))
        .effect(unlockRecipes(["create:kjs/create_enchantment_industry_mechanical_grindstone", "create:kjs/vintageimprovements_spring_coiling_machine"]))
        .parent("conveying")

    event.create("logistics")
        .translatableName("物流研究包")
        .translatableDescription("用于研究物流系统")
        .iconStacks('researchd:research_pack[researchd:research_pack="create_feature_engineering:logistics"]')
        .method(consumePack(rp.conveying, 16, 100))
        .effect(unlockRecipe("create_feature_engineering:logistics"))
        .parent("conveying")

    event.create("gantry_carriage")
        .translatableName("起重机")
        .translatableDescription("解锁起重机")
        .icon("create:gantry_carriage")
        .method(consumePacks([
            [rp.conveying, 8, 100],
            [rp.logistics, 8, 100]
        ]))
        .effect(unlockRecipes(["create:crafting/kinetics/gantry_carriage", "create:crafting/kinetics/gantry_shaft"]))
        .parent("logistics")
    
    event.create("andesite_crate")
        .translatableName("安山板条箱")
        .translatableDescription("可调节容量的容器")
        .icon("create_fantasizing:andesite_crate")
        .method(consumePacks([
            [rp.conveying, 8, 100],
            [rp.logistics, 8, 100]
        ]))
        .effect(unlockRecipes(["create_fantasizing:andesite_crate", "create_fantasizing:andesite_crate_alternative"]))
        .parent("logistics")

    event.create("cart_assembler")
        .translatableName("矿车装配站")
        .translatableDescription("动态结构的起点")
        .icon("create:cart_assembler")
        .method(consumePacks([
            [rp.conveying, 8, 100],
            [rp.logistics, 8, 100]
        ]))
        .effect(unlockRecipe("create:crafting/kinetics/cart_assembler"))
        .parent("logistics")
    
    event.create("block_breaker")
        .translatableName("方块破坏器")
        .translatableDescription("解锁方块破坏器的配方")
        .icon("anvilcraft_pigsplus:block_breaker")
        .method(consumePacks([
            [rp.conveying, 8, 100],
            [rp.logistics, 8, 100]
        ]))
        .effect(unlockRecipe("anvilcraft_pigsplus:block_breaker"))
        .parent("logistics")
    
    event.create("port_packger")
        .translatableName("进阶物流")
        .translatableDescription("解锁物流蛙港和打包机的配方")
        .icon("create:packager")
        .method(consumePacks([
            [rp.conveying, 8, 100],
            [rp.logistics, 8, 100]
        ]))
        .effect(unlockRecipes([
            "create:kjs/create_package_frogport",
            "create:kjs/create_packager"
        ]))
        .parent("andesite_crate")
    
    event.create("fluid")
        .translatableName("流体研究包")
        .translatableDescription("解锁流体研究包")
        .iconStacks('researchd:research_pack[researchd:research_pack="create_feature_engineering:fluid"]')
        .method(consumePacks([
            [rp.conveying, 32, 100],
            [rp.logistics, 32, 100]
        ]))
        .effect(unlockRecipes("create_feature_engineering:fluid"))
        .parent("logistics")
    
    event.create("basin_lid")
        .translatableName("工作盆盖板")
        .translatableDescription("解锁工作盆盖板")
        .icon("createdieselgenerators:basin_lid")
        .method(consumePacks([
            [rp.conveying, 16, 100],
            [rp.logistics, 16, 100],
            [rp.fluid, 16, 100]
        ]))
        .effect(unlockRecipes("kubejs:kjs/createdieselgenerators_basin_lid"))
        .parent("fluid")
    
    event.create("faucet")
        .translatableName("水龙头")
        .translatableDescription("解锁水龙头")
        .icon("fluidlogistics:faucet")
        .method(consumePacks([
            [rp.conveying, 16, 100],
            [rp.logistics, 16, 100],
            [rp.fluid, 16, 100]
        ]))
        .effect(unlockRecipe("fluidlogistics:faucet"))
        .parent("fluid")
    
    event.create("fluid_pump")
        .translatableName("流体泵")
        .translatableDescription("更高效的流体传输方式")
        .icon("fluidlogistics:fluid_pump")
        .method(consumePacks([
            [rp.conveying, 16, 100],
            [rp.logistics, 16, 100],
            [rp.fluid, 16, 100]
        ]))
        .effect(unlockRecipe("create:kjs/fluidlogistics_fluid_pump"))
        .parent("fluid")
    
    event.create("hose_pulley")
        .translatableName("软管滑轮")
        .translatableDescription("初期的无限流体")
        .icon("create:hose_pulley")
        .method(consumePacks([
            [rp.conveying, 16, 100],
            [rp.logistics, 16, 100],
            [rp.fluid, 16, 100]
        ]))
        .effect(unlockRecipe("create:kjs/create_hose_pulley"))
        .parent("fluid")
    
    event.create("vacuum_chamber")
        .translatableName("压缩机")
        .literalDescription("化学工业的起点")
        .icon("vintageimprovements:vacuum_chamber")
        .method(consumePacks([
            [rp.conveying, 16, 100],
            [rp.logistics, 16, 100],
            [rp.fluid, 16, 100]
        ]))
        .effect(unlockRecipe("create:kjs/create_hose_pulley"))
        .parent("fluid")
    
    event.create("sturdy_sheet")
        .translatableName("坚固板")
        .literalDescription("坚固而可靠的材料")
        .icon("create:sturdy_sheet")
        .method(consumePacks([
            [rp.conveying, 16, 100],
            [rp.logistics, 16, 100],
            [rp.fluid, 16, 100]
        ]))
        .effect(unlockRecipe("create:kjs/create_sturdy_sheet"))
        .parent("vacuum_chamber")

    event.create("smart")
        .translatableName("智能研究包")
        .literalDescription("黄铜时代")
        .iconStacks('researchd:research_pack[researchd:research_pack="create_feature_engineering:smart"]')
        .method(consumePacks([
            [rp.conveying, 64, 50],
            [rp.logistics, 64, 50],
            [rp.fluid, 64, 50]
        ]))
        .effect(unlockRecipe("create_feature_engineering:smart"))
        .parent("fluid")
})
