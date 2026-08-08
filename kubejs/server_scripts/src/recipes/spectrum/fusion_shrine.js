ServerEvents.recipes(event => {
    class FusionShrine {
        /**
         * @param {Array<string|number>} result - 结果物品 { id: string, count?: number }
         * @param {Array<string>} ingredients - 材料列表
         * @param {number} time - 制作时间（tick）
         * @param {number} experience - 经验值
         */
        constructor(result, ingredients, time = 100, experience = 0) {
            this.result = {
                id: result[0],
                count: result[1]
            }
            this.ingredients = ingredients
            this.time = time
            this.experience = experience

            // 可选配置
            this.fluid = null
            this.required_advancement = ""
            this.world_conditions = null
            this.start_crafting_effect = ""
            this.during_crafting_effects = []
            this.finish_crafting_effect = ""
            this.description = null

            return this
        }
        setFluid(fluid) {
            this.fluid = {
                fluid: fluid,
                amount: 1000
            }
            return this
        }

        setWorldConditions(conditions) {
            this.world_conditions = conditions
            return this
        }

        setTimeOfDay(time) {
            if (!this.world_conditions) this.world_conditions = {}
            this.world_conditions.time_of_day = time
            return this
        }

        setMoonPhase(phase) {
            if (!this.world_conditions) this.world_conditions = {}
            this.world_conditions.moon_phase = phase
            return this
        }

        setStartEffect(effect) {
            this.start_crafting_effect = effect
            return this
        }

        setDuringEffects(effects) {
            this.during_crafting_effects = effects
            return this
        }

        addDuringEffect(effect) {
            this.during_crafting_effects.push(effect)
            return this
        }

        setFinishEffect(effect) {
            this.finish_crafting_effect = effect
            return this
        }

        setDescription(translateKey) {
            this.description = {
                type: "translatable",
                translate: translateKey
            }
            return this
        }

        setRequiredAdvancement(advancement) {
            this.required_advancement = advancement
            return this
        }

        setTime(time) {
            this.time = time
            return this
        }

        setExperience(experience) {
            this.experience = experience
            return this
        }

        build() {
            let recipe = {
                type: "spectrum:fusion_shrine",
                time: this.time,
                experience: this.experience,
                ingredients: this.ingredients,
                result: this.result,
                start_crafting_effect: this.start_crafting_effect,
                finish_crafting_effect: this.finish_crafting_effect
            }

            // 可选字段（仅当有值时才添加）
            if (this.fluid) {
                recipe.fluid = this.fluid
            }

            if (this.required_advancement) {
                recipe.required_advancement = this.required_advancement
            }

            if (this.world_conditions) {
                recipe.world_conditions = this.world_conditions
            }

            if (this.during_crafting_effects.length > 0) {
                recipe.during_crafting_effects = this.during_crafting_effects
            }

            if (this.description) {
                recipe.description = this.description
            }

            event.custom(recipe)
            return this
        }
    }

    new FusionShrine(["spectrum:onyx_shard", 2], [
        "spectrum:topaz_shard",
        "minecraft:amethyst_shard",
        "spectrum:citrine_shard",
        "spectrum:onyx_powder"
    ]).setRequiredAdvancement("spectrum:unlocks/blocks/fusion_shrine")
    .build()

    new FusionShrine(["create_feature_engineering:cyan_mixture", 4], [
        "minecraft:lapis_lazuli",
        "ars_nouveau:source_gem",
        "spectrum:light_blue_pigment",
        "spectrum:light_blue_pigment"
    ]).setRequiredAdvancement("spectrum:midgame/collect_azurite")
    .build()
})
