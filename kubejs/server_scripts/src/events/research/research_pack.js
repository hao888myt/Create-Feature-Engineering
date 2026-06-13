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
        .icon("researchd:research_pack")
        .method(consumeItem("create:andesite_alloy", 16))
        .effect(unlockRecipe("create:kjs/researchd_research_pack"))
        .literalName("传动研究包")
        .literalDescription("千里之行，始于足下")
    
    event.create("basic_bearing")
        .icon("create:windmill_bearing")
        .method(consumePack(rp.conveying, 8, 200))
        .effect(unlockRecipes(["create:crafting/kinetics/windmill_bearing", "create:crafting/kinetics/mechanical_bearing"]))
        .parent("conveying")
        .translatableName("基础轴承")
        .translatableDescription("解锁风车轴承和动力轴承的配方")
})
