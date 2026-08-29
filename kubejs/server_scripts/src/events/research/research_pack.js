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
            "minecraft:kjs/create_mechanical_harvester",
            "minecraft:kjs/create_mechanical_plough"
        ]))
        .parent("conveying")

    event.create("simple_process")
        .translatableName("简单加工")
        .translatableDescription("解锁卷簧机、轧机和动力砂轮")
        .icon("vintageimprovements:spring_coiling_machine")
        .method(consumePack(rp.conveying, 8, 100))
        .effect(unlockRecipes(["create:kjs/create_enchantment_industry_mechanical_grindstone", "create:kjs/vintageimprovements_spring_coiling_machine", "create:kjs/createaddition_rolling_mill"]))
        .parent("conveying")

    event.create("jet_pack")
        .translatableName("喷气背包")
        .translatableDescription("芜湖起飞")
        .icon("create_jetpack:jetpack")
        .method(consumePack(rp.conveying, 8, 100))
        .effect(unlockRecipe("minecraft:kjs/create_jetpack_jetpack"))
        .parent("conveying")

    event.create("starbuncle_wheel")
        .translatableName("星宝石兽跑轮")
        .translatableDescription("奴役星宝石兽是可耻的！")
        .icon("ars_creo:starbuncle_wheel")
        .method(consumePack(rp.conveying, 8, 100))
        .effect(unlockRecipe("ars_creo:starbuncle_wheel"))
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
        .effect(unlockRecipes([
            "create_fantasizing:andesite_crate",
            "create_fantasizing:andesite_crate_alternative",
            "create:kjs/create_fantasizing_andesite_crate"
        ]))
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
        .effect(unlockRecipe("minecraft:kjs/anvilcraft_pigsplus_block_breaker"))
        .parent("logistics")

    event.create("port_packger")
        .translatableName("进阶物流")
        .translatableDescription("解锁物流蛙港、打包机和理包机的配方")
        .icon("create:packager")
        .method(consumePacks([
            [rp.conveying, 8, 100],
            [rp.logistics, 8, 100]
        ]))
        .effect(unlockRecipes([
            "create:kjs/create_package_frogport",
            "create:kjs/create_packager",
            "create:crafting/logistics/repackager_from_conversion"
        ]))
        .parent("andesite_crate")

    event.create("remote_stock")
        .translatableName("远程仓储")
        .translatableDescription("解锁仓储链接站和仓储发报机的配方")
        .icon("create:stock_link")
        .method(consumePacks([
            [rp.conveying, 8, 100],
            [rp.logistics, 8, 100]
        ]))
        .effect(unlockRecipes([
            "create:kjs/create_stock_link",
            "create:kjs/create_stock_ticker"
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
        .effect(unlockRecipe("create_feature_engineering:fluid"))
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
        .effect(unlockRecipe("kubejs:kjs/createdieselgenerators_basin_lid"))
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

    event.create("copper_schematicannon")
        .translatableName("流体加农炮")
        .translatableDescription("打印流体")
        .icon("fluidlogistics:copper_schematicannon")
        .method(consumePacks([
            [rp.conveying, 16, 100],
            [rp.logistics, 16, 100],
            [rp.fluid, 16, 100]
        ]))
        .effect(unlockRecipes([
            "fluidlogistics:empty_fluid_schematic",
            "fluidlogistics:copper_schematicannon"
        ]))
        .parent("fluid")

    event.create("copper_basin")
        .translatableName("铜工作盆")
        .translatableDescription("10倍容量！")
        .icon("fluidlogistics:copper_basin")
        .method(consumePacks([
            [rp.conveying, 16, 100],
            [rp.logistics, 16, 100],
            [rp.fluid, 16, 100]
        ]))
        .effect(unlockRecipe("create:kjs/fluidlogistics_copper_basin"))
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

    event.create("modern_farming")
        .translatableName("现代化农业")
        .translatableDescription("更加现代化的种植方式")
        .icon("ratatouille:ripen_matter")
        .method(consumePacks([
            [rp.conveying, 16, 100],
            [rp.logistics, 16, 100],
            [rp.fluid, 16, 100]
        ]))
        .effect(unlockRecipes([
            "create:kjs/ratatouille_spreader",
            "create:kjs/ratatouille_irrigation_tower",
            "minecraft:kjs/ratatouille_compost_tower",
            "create:kjs/ratatouille_compost_tower"
        ]))
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
        .parent("basin_lid")

    event.create("pumpjack")
        .translatableName("抽油机")
        .literalDescription("石油化工的起点")
        .icon("createdieselgenerators:crude_oil_bucket")
        .method(consumePacks([
            [rp.conveying, 32, 50],
            [rp.logistics, 32, 50],
            [rp.fluid, 32, 50]
        ]))
        .effect(unlockRecipes([
            "create:kjs/createdieselgenerators_pumpjack_bearing",
            "create:kjs/createdieselgenerators_pumpjack_crank",
            "create:kjs/createdieselgenerators_pumpjack_head",
            "create:kjs/createdieselgenerators_pumpjack_hole"
        ]))
        .parents([
            "sturdy_sheet",
            "fluid_pump"
        ])

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

    event.create("electron_tube")
        .translatableName("电子管")
        .literalDescription("智能处理的基石")
        .icon("create:electron_tube")
        .method(consumePacks([
            [rp.conveying, 16, 100],
            [rp.logistics, 16, 100],
            [rp.fluid, 16, 100]
        ]))
        .effect(unlockRecipe("create:kjs/create_electron_tube"))
        .parent("basin_lid")

    event.create("precision_mechanism")
        .translatableName("精密构件")
        .literalDescription("更小、更精密")
        .icon("create:precision_mechanism")
        .method(consumePacks([
            [rp.conveying, 16, 100],
            [rp.logistics, 16, 100],
            [rp.fluid, 16, 100]
        ]))
        .effect(unlockRecipe("create:kjs/create_precision_mechanism"))
        .parent("fluid")

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
        .parents([
            "precision_mechanism",
            "electron_tube",
            "simple_process"
        ])

    event.create("brass_funnel_tunnel_chute")
        .translatableName("智能输出")
        .literalDescription("解锁黄铜隧道、黄铜漏斗、智能溜槽与过滤器")
        .icon("create:brass_funnel")
        .method(consumePacks([
            [rp.conveying, 64, 50],
            [rp.logistics, 64, 50],
            [rp.fluid, 64, 50],
            [rp.smart, 64, 50]
        ]))
        .effect(unlockRecipes([
            "minecraft:kjs/create_brass_funnel",
            "minecraft:kjs/create_brass_tunnel",
            "minecraft:kjs/create_smart_chute",
            "minecraft:kjs/anvilcraft_filter"
        ]))
        .parent("smart")

    event.create("redstone_conduit_block")
        .translatableName("红石传导块")
        .literalDescription("竖直传输，无需支撑")
        .icon("anvilcraft_pigsplus:redstone_conduit_block")
        .method(consumePacks([
            [rp.conveying, 64, 50],
            [rp.logistics, 64, 50],
            [rp.fluid, 64, 50],
            [rp.smart, 64, 50]
        ]))
        .effect(unlockRecipes([
            "minecraft:kjs/anvilcraft_pigsplus_redstone_conduit_block",
            "create:kjs/anvilcraft_redstone_wire"
        ]))
        .parent("smart")

    event.create("stockpile_switch_content_observer")
        .translatableName("智能检测")
        .literalDescription("上至方块，中至流体，下至物品")
        .icon("create:stockpile_switch")
        .method(consumePacks([
            [rp.conveying, 64, 50],
            [rp.logistics, 64, 50],
            [rp.fluid, 64, 50],
            [rp.smart, 64, 50]
        ]))
        .effect(unlockRecipes([
            "create:kjs/create_stockpile_switch",
            "create:kjs/create_content_observer"
        ]))
        .parent("smart")

    event.create("sequenced_machine")
        .translatableName("可编程元件")
        .literalDescription("精确控制")
        .icon("create_connected:sequenced_pulse_generator")
        .method(consumePacks([
            [rp.conveying, 64, 50],
            [rp.logistics, 64, 50],
            [rp.fluid, 64, 50],
            [rp.smart, 64, 50]
        ]))
        .effect(unlockRecipes([
            "create:kjs/create_connected_sequenced_pulse_generator",
            "create:kjs/create_sequenced_gearshift"
        ]))
        .parent("smart")

    event.create("requester_gauge")
        .translatableName("发送请求")
        .literalDescription("解锁工厂仪表和红石请求器")
        .icon("create:factory_gauge")
        .method(consumePacks([
            [rp.conveying, 64, 50],
            [rp.logistics, 64, 50],
            [rp.fluid, 64, 50],
            [rp.smart, 64, 50]
        ]))
        .effect(unlockRecipes([
            "create:kjs/create_factory_gauge",
            "create:kjs/create_redstone_requester"
        ]))
        .parent("smart")

    event.create("controller")
        .translatableName("变速、变向")
        .literalDescription("优雅的解决方案")
        .icon("create:rotation_speed_controller")
        .method(consumePacks([
            [rp.conveying, 64, 50],
            [rp.logistics, 64, 50],
            [rp.fluid, 64, 50],
            [rp.smart, 64, 50]
        ]))
        .effect(unlockRecipes([
            "minecraft:kjs/create_rotation_speed_controller",
            "create_connected:crafting/kinetics/brass_gearbox"
        ]))
        .parent("smart")

    event.create("mechanical_arm_gun")
        .translatableName("动力双雄")
        .literalDescription("只需简单配置，即可高效自动化")
        .icon("create:mechanical_arm")
        .method(consumePacks([
            [rp.conveying, 64, 50],
            [rp.logistics, 64, 50],
            [rp.fluid, 64, 50],
            [rp.smart, 64, 50]
        ]))
        .effect(unlockRecipes([
            "create:kjs/create_mechanical_arm",
            "create:kjs/fluidlogistics_mechanical_fluid_gun"
        ]))
        .parent("smart")

    event.create("multi_fluid_tank")
        .translatableName("多流体储罐")
        .literalDescription("种类多，容量大")
        .icon("fluidlogistics:multi_fluid_tank")
        .method(consumePacks([
            [rp.conveying, 64, 50],
            [rp.logistics, 64, 50],
            [rp.fluid, 64, 50],
            [rp.smart, 64, 50]
        ]))
        .effect(unlockRecipes([
            "fluidlogistics:multi_fluid_tank",
            "fluidlogistics:horizontal_multi_fluid_tank",
            "create:kjs/fluidlogistics_multi_fluid_tank"
        ]))
        .parent("smart")

    event.create("smart_fluid_pipe")
        .translatableName("智能流体管道")
        .literalDescription("其实不是很智能")
        .icon("create:smart_fluid_pipe")
        .method(consumePacks([
            [rp.conveying, 64, 50],
            [rp.logistics, 64, 50],
            [rp.fluid, 64, 50],
            [rp.smart, 64, 50]
        ]))
        .effect(unlockRecipe("create:kjs/create_smart_fluid_pipe"))
        .parent("smart")

    event.create("effective_fluid_transporter")
        .translatableName("高效流体传输")
        .literalDescription("多功能、简单方便")
        .icon("fluidlogistics:smart_hopper")
        .method(consumePacks([
            [rp.conveying, 64, 50],
            [rp.logistics, 64, 50],
            [rp.fluid, 64, 50],
            [rp.smart, 64, 50]
        ]))
        .effect(unlockRecipes([
            "create:kjs/fluidlogistics_smart_hopper",
            "create:kjs/fluidlogistics_fluid_transporter"
        ]))
        .parent("smart")

    event.create("smart_faucet")
        .translatableName("智能龙头")
        .literalDescription("更智能的...水龙头？")
        .icon("fluidlogistics:smart_faucet")
        .method(consumePacks([
            [rp.conveying, 64, 50],
            [rp.logistics, 64, 50],
            [rp.fluid, 64, 50],
            [rp.smart, 64, 50]
        ]))
        .effect(unlockRecipe("create:kjs/fluidlogistics_smart_faucet"))
        .parents([
            "smart",
            "faucet"
        ])

    event.create("mechanical_crafter")
        .translatableName("动力合成器")
        .literalDescription("慢工出细活")
        .icon("create:mechanical_crafter")
        .method(consumePacks([
            [rp.conveying, 64, 50],
            [rp.logistics, 64, 50],
            [rp.fluid, 64, 50],
            [rp.smart, 64, 50]
        ]))
        .effect(unlockRecipe("create_feature_engineering:smart"))
        .parent("smart")

    event.create("crushing_wheel")
        .translatableName("粉碎轮")
        .literalDescription("一对大家伙")
        .icon("create:crushing_wheel")
        .method(consumePacks([
            [rp.conveying, 64, 50],
            [rp.logistics, 64, 50],
            [rp.fluid, 64, 50],
            [rp.smart, 64, 50]
        ]))
        .effect(unlockRecipe("create:kjs/create_crushing_wheel"))
        .parent("mechanical_crafter")

    event.create("package")
        .translatableName("包裹研究包")
        .literalDescription("包裹物流")
        .iconStacks('researchd:research_pack[researchd:research_pack="create_feature_engineering:package"]')
        .method(consumePacks([
            [rp.conveying, 128, 20],
            [rp.logistics, 128, 20],
            [rp.fluid, 128, 20],
            [rp.smart, 128, 20]
        ]))
        .effect(unlockRecipe("create_feature_engineering:package"))
        .parent("smart")

    event.create("large_cardboard_box")
        .translatableName("大型纸箱")
        .literalDescription("捕捉大型生物")
        .icon("create_biotech:large_cardboard_box")
        .method(consumePacks([
            [rp.conveying, 128, 20],
            [rp.logistics, 128, 20],
            [rp.fluid, 128, 20],
            [rp.smart, 128, 20],
            [rp.package, 128, 20],
        ]))
        .effect(unlockRecipe("create_biotech:cutting/large_cardboard_box"))
        .parent("package")

    event.create("package_accelerator")
        .translatableName("包裹加速器")
        .literalDescription("加快打包速度")
        .icon("createadditionallogistics:package_accelerator")
        .method(consumePacks([
            [rp.conveying, 128, 20],
            [rp.logistics, 128, 20],
            [rp.fluid, 128, 20],
            [rp.smart, 128, 20],
            [rp.package, 128, 20],
        ]))
        .effect(unlockRecipe("create:kjs/createadditionallogistics_package_accelerator"))
        .parent("package")
})
