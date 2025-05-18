ClientEvents.lang("zh_cn", (event) => {

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

    AddItemLang("kubejs.rubber", "橡胶")

    AddItemLang("litematica_tool", "投影工具")

    AddItemLang("ore_feed", "矿石饲料")

    AddBlockLang("base_block", "化合物基质块")
    AddBlockLang("adulterated_base_block", "掺杂化合物基质块")

    AddBlockLang("paltaeria_ore_catalyst", "苍绿催生体")

    AddBlockLang("toretoise_fossil", "乌龟化石")



    let MechanismName = [
        ["andesite", "安山"],
        ["sturdy", "坚固"],
        ["magnet", "电磁"],
        ["infernal", "炼狱"],
        ["brass","黄铜"],
        ["sculk", "幽匿"],
        ["nuclear", "核能"],
        ["endless", "终焉"],
        ["crystal", "水晶"],
        ["onyx", "缟玛瑙"],
        ["azurite", "石青"],
        ["bedrock", "基岩"],
        ["moonstone", "月长石"],
        ["glass_crest", "琉璃"],
        ["effulgent", "龙翎"],
        ["aether", "以太"],
        ["copper", "铜"],
        ["optical", "光学"],
        ["candy", "糖果"],
        ["dark", "黑暗"],
        ["primal", "远古"],
        ["plant", "植物"],
        ["ender", "末影"],
        ["enchantment", "附魔"],
        ["quitoxic", "奇毒"],
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