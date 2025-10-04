ClientEvents.lang("zh_cn", (event) => {

    AddItemLang("crystal_core", "水晶核心")

    AddItemLang("shimmerstone_gem_shard", "火花石碎片")
    AddItemLang("shimmerstone_gem_lump", "火花石碎块")

    AddItemLang("paltaeria_catalyst", "苍绿催化剂")
    AddItemLang("stratine_catalyst", "绯红催化剂")
    AddItemLang("hover_catalyst", "悬浮催化剂")
    AddItemLang("gravity_catalyst", "重力催化剂")

    AddItemLang("adulterated_compound_base", "掺杂化合物基质")
    AddItemLang("incomplete_chromatic_compound", "未完成的异彩化合物")
    AddItemLang("chromatic_compound_shard", "异彩化合物碎片")
    AddItemLang("unstable_chromatic_compound", "不稳定异彩化合物")

    AddItemLang("rubber", "橡胶")
    AddItemLang("incomplete_circuit_board", "未完成的电路板")
    AddItemLang("royal_prism", "皇家棱镜")
    AddItemLang("royal_optical_device", "皇家光学设备")
    AddBlockLang("steel_casing", "钢机壳")

    AddItemLang("soul_vulture_heart", "灵魂鹫之心")
    AddItemLang("ectoplasm", "灵质")

    AddItemLang("litematica_tool", "投影工具")
    AddItemLang("world_edit_tool", "创世神工具")

    AddItemLang("ore_feed", "矿石饲料")
    AddItemLang("cyan_mixture", "青色混合物")

    AddBlockLang("base_block", "化合物基质块")
    AddBlockLang("adulterated_base_block", "掺杂化合物基质块")

    AddBlockLang("stradpole_skeleton", "跨座蝌蚪遗骸")

    AddBlockLang("paltaeria_ore_catalyst", "苍绿催生体")

    AddBlockLang("toretoise_fossil", "乌龟化石")

    AddFluidLang("liquid_number", "液态数字")

    AddFluidLang("ectoplasm", "灵质")

    AddFluidLang("molten_azure_neodymium", "熔融青钕合金")
    AddFluidLang("molten_scarlet_neodymium", "熔融赤钕合金")

    AddFluidLang("liquid_source", "液态魔源")

    AddFluidLang("light_oil", "轻油")
    AddFluidLang("heavy_oil", "重油")
    AddFluidLang("petroleum_gas", "石油气")
    AddFluidLang("lubricant", "润滑油")

    let numbers =[
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
        ["brass","黄铜"],
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

    MechanismName.forEach(([key, value]) => {
        event.add(`item.kubejs.${key}_mechanism`, `${value}构件`)
        event.add(`item.kubejs.incomplete_${key}_mechanism`, `${value}构件（半成品）`)
        event.add(`item.kubejs.${key}_machine`, `${value}机器`)
        event.add(`block.kubejs.${key}_machine`, `${value}机器`)
    })

    function AddBlockLang(key, value) {
        event.add(`item.kubejs.${key}`, value)
        event.add(`block.kubejs.${key}`, value)
    }

    function AddFluidLang(key, value) {
        event.add(`fluid.kubejs.${key}`, value)
        event.add(`block.kubejs.${key}`, value)
        event.add(`item.kubejs.${key}_bucket`, `${value}桶`)
    }

    function AddItemLang(key, value) {
        event.add(`item.kubejs.${key}`, value)
    }

})