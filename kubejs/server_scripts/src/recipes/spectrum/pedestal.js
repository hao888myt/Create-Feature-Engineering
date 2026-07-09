ServerEvents.recipes(event => {
    class Pedestal {
        /**
         * @param {Array<string|int>} result 
         * @param {Array<string>} pattern 
         * @param {Object<string, string>} key 
         * @param {number} time 
         */
        constructor(result, pattern, key, time = 20) {
            this.id = result[0]
            this.count = result[1]

            this.pattern = pattern
            this.key = key

            this.time = time

            this.magenta = 0
            this.yellow = 0
            this.cyan = 0
            this.black = 0
            this.white = 0

            this.tier = "basic"
            this.group = ""
            this.required_advancement = ""
            this.required_advancements = []

            return this
        }

        // #region 只是设置颜色
        setMagenta(count) {
            this.magenta = count
            return this
        }

        setYellow(count) {
            this.yellow = count
            return this
        }

        setCyan(count) {
            this.cyan = count
            return this
        }

        setBlack(count) {
            this.black = count
            this.tier = "advanced"
            return this
        }

        setWhite(count) {
            this.white = count
            this.tier = "complex"
            return this
        }

        setMYC(magenta, yellow, cyan) {
            this.magenta = magenta
            this.yellow = yellow
            this.cyan = cyan
            return this
        }

        setMYCB(magenta, yellow, cyan, black) {
            this.magenta = magenta
            this.yellow = yellow
            this.cyan = cyan
            this.black = black
            this.tier = "advanced"
            return this
        }

        setMYCBW(magenta, yellow, cyan, black, white) {
            this.magenta = magenta
            this.yellow = yellow
            this.cyan = cyan
            this.black = black
            this.white = white
            this.tier = "complex"
            return this
        }

        // #endregion

        CMY () {
            this.tier = "simple"
            return this
        }

        onyx () {
            this.tier = "advanced"
            return this
        }

        moon () {
            this.tier = "complex"
            return this
        }

        setTime(time) {
            this.time = time
            return this
        }

        setGroup(group) {
            this.group = group
            return this
        }

        setExperience(experience) {
            this.experience = experience
            return this
        }

        addRequiredAdvancement(advancement) {
            this.required_advancements.push(advancement)
            return this
        }

        addRequiredAdvancements(advancements) {
            advancements.forEach(advancement => {
                this.addRequiredAdvancement(advancement)
            })
            return this
        }

        build() {
            event.custom({
                "type": "spectrum:pedestal",
                "group": this.group,
                "time": this.time,
                "tier": this.tier,
                "colors": {
                    "spectrum:magenta": this.magenta,
                    "spectrum:yellow": this.yellow,
                    "spectrum:cyan": this.cyan,
                    "spectrum:black": this.black,
                    "spectrum:white": this.white
                },
                "experience": this.experience,
                "pattern": this.pattern,
                "key": this.key,
                "result": {
                    "id": this.id,
                    "count": this.count
                },
                "required_advancements": this.required_advancements
            })
        }
    }

    let removes = [
        "ars_nouveau:imbuement_chamber",
        "ars_nouveau:source_jar"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    new Pedestal(["ars_nouveau:imbuement_chamber", 1],
        [
            "PGP",
            "P P",
            "PGP"
        ],
        {
            P: "ars_nouveau:archwood_planks",
            G: "minecraft:gold_ingot"
        }
    ).addRequiredAdvancement("spectrum:collect_all_basic_shards")
    .build()

    new Pedestal(["ars_nouveau:source_jar", 1],
        [
            "PPP",
            "G G",
            "PPP"
        ],
        {
            P: "ars_nouveau:archwood_slab",
            G: "#c:glass_blocks"
        }
    ).addRequiredAdvancement("spectrum:collect_all_basic_shards")
    .build()
})