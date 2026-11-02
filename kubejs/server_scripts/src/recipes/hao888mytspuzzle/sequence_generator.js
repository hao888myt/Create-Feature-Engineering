// kubejs/server_scripts/hao888mytspuzzle_recipes.js
// 序列生成器配方：type = hao888mytspuzzle:puzzle_sequence

ServerEvents.recipes(event => {

    class PuzzleSequence {
        constructor() {
            this.type = 'hao888mytspuzzle:puzzle_sequence'
            this.cooldown = 0
            this.priority = 0
            this.steps = []
        }

        // 冷却 tick，0 = 无冷却
        setCooldown(ticks) {
            this.cooldown = ticks
            return this
        }

        // 多序列同时命中时的优先级，越大越优先（0-1000）
        setPriority(priority) {
            this.priority = priority
            return this
        }

        addStep(consume, results) {
            const normConsume = (consume || []).map(entry => {
                if (typeof entry === 'string') {
                    return { item: entry, count: 1 }
                }
                return { item: String(entry.item), count: entry.count === undefined ? 1 : entry.count }
            })

            const normResults = (results || []).map(entry => {
                if (typeof entry === 'string') {
                    return { block: entry, offset: [0, 1, 0] }
                }
                return {
                    block: entry.block.charAt ? String(entry.block) : String(entry.block.id ?? entry.block),
                    offset: entry.offset === undefined ? [0, 1, 0] : entry.offset
                }
            })

            this.steps.push({ consume: normConsume, results: normResults })
            return this
        }

        build(id) {
            if (this.steps.length === 0) {
                console.error(`[sequence] ${id} 没有步骤，已跳过`)
                return
            }

            const json = {
                type: this.type,
                steps: this.steps.map(step => ({
                    consume: step.consume,
                    results: step.results
                }))
            }
            if (this.cooldown > 0) {
                json.cooldown = this.cooldown
            }
            if (this.priority > 0) {
                json.priority = this.priority
            }

            event.custom(json).id(id)
        }
    }

    event.remove({ id: 'hao888mytspuzzle:default_sequence' })

    new PuzzleSequence()
        .addStep(
            [{ item: "create:crushing_wheel", count: 1 }],
            [{ block: "create_feature_engineering:black", offset: [0, 1, 0] }]
        )
        .addStep(
            [{ item: "anvilcraft:giant_anvil", count: 1 }],
            [{ block: "create_feature_engineering:white", offset: [0, 1, 0] }]
        )
        .build(`${global.ModPackId}:black_and_white`)
})