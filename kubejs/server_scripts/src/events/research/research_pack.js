const { $ResearchMethod } = require("@package/com/portingdeadmods/researchd/api/research/methods");
const { $ResearchBuilder } = require("@package/com/portingdeadmods/researchd/compat/kubejs/builders");
const { $ResearchEffectHelper, $ResearchMethodHelper } = require("@package/com/portingdeadmods/researchd/compat/kubejs/helpers");

ResearchdEvents.registerResearchPacks(event => {
    let researchPacks = [
        ["conveying", [167, 173, 159]],
        ["logistics", [12, 34, 56]],
        ["smart", [248, 202, 103]],
        ["fluid", [231, 143, 97]],
        ["chemical", [50, 200, 50]],
        ["optical", [50, 200, 50]],
        ["electrical", [50, 200, 50]],
        ["package", [50, 200, 50]]
    ]
    researchPacks.forEach(pack => {
        event.create(`${global.ModPackId}:${pack[0]}`)
            .color(pack[1][0], pack[1][1], pack[1][2])
    })
});

/**
 * @type {Research[]}
 */
let researchs = []

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
        this.consume_packs.push($ResearchMethodHelper.consumePack(pack.pack_id, pack.count, pack.duration))
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

    /**
     * 必须在研究设置完后调用！
     * 必须调用！
     */
    joinResearchs() {
        researchs.push(this)
    }
}

ResearchdEvents.registerResearches(event => {
    researchs.forEach(research => {
        event.create(`${global.ModPackId}:${research.id}`)
            .icon(research.icon)
            .parents(research.parents)
            .method($ResearchMethodHelper.and(research.consume_packs))
            .effect($ResearchEffectHelper.unlockRecipes(research.unlock_recipes))
    })
})