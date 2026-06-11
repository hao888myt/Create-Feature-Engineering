ClientEvents.lang("zh_cn", (event) => {
    AddBlockLang("stradpole_skeleton", "跨座蝌蚪遗骸")

    AddBlockLang("paltaeria_ore_catalyst", "苍绿催生体")

    AddResearchPackLang("conveying", "传动")
    AddResearchPackLang("logistics", "物流")
    AddResearchPackLang("smart", "智能")
    AddResearchPackLang("fluid", "流体")
    AddResearchPackLang("chemical", "化工")
    AddResearchPackLang("optical", "光学")
    AddResearchPackLang("electrical", "电磁")
    AddResearchPackLang("package", "包裹")


    let numbers = [
        ["zero", "0"],
        ["unstackable_zero", "0（不可堆叠）"],
        ["one", "1"],
        ["unstackable_one", "1（不可堆叠）"],
        ["two", "2"],
        ["unstackable_two", "2（不可堆叠）"],
        ["three", "3"],
        ["unstackable_three", "3（不可堆叠）"],
        ["four", "4"],
        ["unstackable_four", "4（不可堆叠）"],
        ["five", "5"],
        ["unstackable_five", "5（不可堆叠）"],
        ["six", "6"],
        ["unstackable_six", "6（不可堆叠）"],
        ["seven", "7"],
        ["unstackable_seven", "7（不可堆叠）"],
        ["eight", "8"],
        ["unstackable_eight", "8（不可堆叠）"],
        ["nine", "9"],
        ["unstackable_nine", "9（不可堆叠）"]
    ]
    numbers.forEach(number => {
        AddItemLang(number[0], number[1])
    })


    let MechanismName = [
        ["andesite", "安山"],
        ["brass", "黄铜"],
        ["sturdy", "坚固"],
        ["magnet", "电磁"],
        ["infernal", "炼狱"],
        ["sculk", "幽匿"],
        ["nuclear", "核能"],
        ["endless", "终焉"],

        ["copper", "铜"],
        ["logistics", "物流"],
        ["intelligent", "智能"],
        ["advanced_logistics", "高级物流"],

        ["agriculture", "农业"],
        ["optical", "光学"],
        ["dark", "黑暗"],
        ["plant", "植物"],
        ["ender", "末影"],
        ["star", "流星"],
        ["resonance", "嗡鸣"],
        ["annihilation", "湮灭"],
        ["colorful", "七彩"]
    ]

    global.Materials.forEach(material => {
        material.types.forEach(type => {
            switch (type) {
                case "ingot":
                    AddItemLang(`${material.id}_ingot`, `${material.zh_cn}锭`)
                    break
                case "nugget":
                    AddItemLang(`${material.id}_nugget`, `${material.zh_cn}粒`)
                    break
                case "sheet":
                    AddItemLang(`${material.id}_sheet`, `${material.zh_cn}板`)
                    break
                case "molten":
                    AddFluidLang(`molten_${material.id}`, `熔融${material.zh_cn}`)
                    break
            }
        })
    })

    global.BasicItems.forEach(item => {
        AddItemLang(item.id, item.zh_cn)
    })

    global.IncompletedItems.forEach(item => {
        AddItemLang(`incomplete_${item.id}`, `${item.zh_cn}（半成品）`)
    })

    global.BasicFluids.forEach(fluid => {
        AddFluidLang(fluid.id, fluid.zh_cn)
    })

    MechanismName.forEach(([key, value]) => {
        event.add(`item.${global.ModPackId}.${key}_mechanism`, `${value}构件`)
        event.add(`item.${global.ModPackId}.incomplete_${key}_mechanism`, `${value}构件（半成品）`)
        event.add(`item.${global.ModPackId}.${key}_machine`, `${value}机器`)
        event.add(`block.${global.ModPackId}.${key}_machine`, `${value}机器`)
    })

    function AddBlockLang(key, value) {
        event.add(`item.${global.ModPackId}.${key}`, value)
        event.add(`block.${global.ModPackId}.${key}`, value)
    }

    function AddFluidLang(key, value) {
        event.add(`fluid.${global.ModPackId}.${key}`, value)
        event.add(`fluid.${global.ModPackId}.flowing_${key}`, value)
        event.add(`block.${global.ModPackId}.${key}`, value)
        event.add(`fluid_type.${global.ModPackId}.${key}`, value)
        event.add(`item.${global.ModPackId}.${key}_bucket`, `${value}桶`)
    }

    function AddItemLang(key, value) {
        event.add(`item.${global.ModPackId}.${key}`, value)
    }

    function AddResearchPackLang(key, value) {
        event.add(`research_pack.${global.ModPackId}.${key}_name`, `${value}研究包`)
        event.add(`research_pack.${global.ModPackId}.${key}_desc`, `${value}研究包`)
    }

})
