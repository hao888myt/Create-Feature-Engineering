ResearchdEvents.registerResearchPacks(event => {
    let research_packs = [
        ["conveying", "#81868A"],
        ["logistics", "#3C3F40"],
        ["smart", "#EBAE2D"],
        ["fluid", "#bf5935"],
        ["chemical", "#94C2E6"],
        ["electrical", "#3077D4"],
        ["package", "#5B4226"],
    ]

    research_packs.forEach(pack => {
        let color = hexToRgb(pack[1])
        event.create(`${global.ModPackId}:${pack[0]}`)
            .color(color[0], color[1], color[2])
    })
});

class Research {
    /**
     * @param {string} id 研究id
     */
    constructor(id) {
        this.id = id
    }

    /**
     * 设置图标
     * @param {string} icon 物品id
     * @returns 
     */
    setIcon(icon) {
        this.icon = icon
        return this
    }

    /**
     * @type {string[]}
     */
    parents = []

    /**
     * 用于记录该研究所需的所有研究，用于查重
     * @private
     * @type {string[]}
     */
    ancestors = []

    /**
     * 设置父级研究
     * @param {Research} parent
     * @returns 
     */
    setParent(parent) {
        if (this.ancestors.includes(parent.id)) {
            console.warn(`研究${this.id}当前添加的父级研究${parent.id}已存在于它祖先研究中!`)
        }
        else if (this.id == parent.id) {
            console.warn(`研究${this.id}自己需要研究自己才能解锁吗？有意思`)
        }
        else {
            this.parents.push(parent)
            parent.ancestors.forEach(ancestor => {
                if (!this.ancestors.includes(ancestor)) {
                    this.ancestors.push(ancestor)
                }
            })
            this.ancestors.push(parent.id)
        }
        return this
    }

    /**
     * 批量设置父级研究
     * @param {Research[]} parents
     * @returns 
     */
    setParents(parents) {
        parents.forEach(parent => {
            this.setParent(parent)
        })
        return this
    }

    /**
     * @typedef {Object} ConsumePack
     * @property {string} pack_id 研究包id
     * @property {number} count 消耗数量
     * @property {number} duration 时间
     */

    /**
     * 设置消耗的研究包
     * @type {$ResearchMethod[]} consume_packs 消耗的研究包
     */
    consume_packs = []

    /**
     * 设置研究消耗的研究包
     * @param {ConsumePack} pack
     * @returns
     */
    consumePack(pack) {
        this.consume_packs.push(ResearchMethodHelper.consumePack(`${global.ModPackId}:${pack.pack_id}`, pack.count, pack.duration))
        return this
    }

    /**
     * 批量设置研究消耗的研究包
     * @param {ConsumePack[]} packs
     * @returns
     */
    consumePacks(packs) {
        packs.forEach(pack => {
            this.consumePack(pack)
        })
        return this
    }

    /**
     * 这个研究可以解锁的配方
     * @type {string[]}
     */
    unlock_recipes = []

    /**
     * 设置解锁的配方
     * @param {string} recipe
     * @returns
     */
    unlockRecipe(recipe) {
        if (this.unlock_recipes.includes(recipe)) {
            console.warn(`配方${recipe}已经被添加过了！`)
        }
        else {
            this.unlock_recipes.push(recipe)
        }
        return this
    }

    /**
     * 批量设置解锁的配方
     * @param {string[]} recipes
     * @returns
     */
    unlockRecipes(recipes) {
        recipes.forEach(recipe => {
            this.unlockRecipe(recipe)
        })
        return this
    }
}

ResearchdEvents.registerResearches(event => {

    /**
    * @type {Research[]}
    */
    let researchs = [
        new Research("smart")
            .setIcon("create:shaft")
            .consumePack(
                {
                    pack_id: "conveying",
                    count: "10",
                    duration: "20"
                }
            )
            .unlockRecipe("minecraft:oak_planks")
    ]

    // 请不要将研究的注册写在这个函数之后的部分
    researchs.forEach(research => {
        event.create(`${global.ModPackId}:${research.id}`)
            .icon(research.icon)
            .parents(research.parents)
            .method(ResearchMethodHelper.and(research.consume_packs))
            .effect(ResearchEffectHelper.unlockRecipes(research.unlock_recipes))
    })
})
