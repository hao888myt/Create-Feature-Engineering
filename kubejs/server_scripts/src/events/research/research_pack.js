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
        .effect(unlockRecipe("create:kjs/researchd_research_pack"))

    event.create("harvester_plough")
        .translatableName("收割与开垦")
        .translatableDescription("解锁动力收割机和动力犁")
        .icon("create:mechanical_harvester")
        .method(consumePack(rp.conveying, 8, 200))
        .effect(unlockRecipes([
            "kubejs:kjs/create_mechanical_harvester",
            "create:crafting/kinetics/mechanical_plough"
        ]))

    event.create("basic_bearing")
        .translatableName("基础轴承")
        .translatableDescription("解锁风车轴承和动力轴承的配方")
        .icon("create:windmill_bearing")
        .method(consumePack(rp.conveying, 8, 200))
        .effect(unlockRecipes(["create:crafting/kinetics/windmill_bearing", "create:crafting/kinetics/mechanical_bearing"]))
        .parent("conveying")

    event.create("simple_process")
        .translatableName("简单加工")
        .translatableDescription("解锁卷簧机和动力砂轮")
        .icon("vintageimprovements:spring_coiling_machine")
        .method(consumePack(rp.conveying, 8, 200))
        .effect(unlockRecipes(["create:kjs/create_enchantment_industry_mechanical_grindstone", "create:kjs/vintageimprovements_spring_coiling_machine"]))
        .parent("conveying")

    event.create("logistics")
        .translatableName("物流研究包")
        .translatableDescription("用于研究物流系统")
        .iconStacks('researchd:research_pack[researchd:research_pack="create_feature_engineering:logistics"]')
        .method(consumePack(rp.conveying, 16, 400))
        .effect(unlockRecipe("create:kjs/researchd_research_pack_2"))
        .parent("conveying")

    event.create("gantry_carriage")
        .translatableName("起重机")
        .translatableDescription("解锁起重机")
        .icon("create:gantry_carriage")
        .method(consumePacks([
            [rp.conveying, 8, 200],
            [rp.logistics, 8, 200]
        ]))
        .effect(unlockRecipes(["create:crafting/kinetics/gantry_carriage", "create:crafting/kinetics/gantry_shaft"]))
        .parent("logistics")
})
