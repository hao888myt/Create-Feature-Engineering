StartupEvents.registry("block", event => {

    MechanismType = [
        "andesite",
        "sturdy",
        "magnet",
        "infernal",
        "sculk",
        "nuclear",
        "endless",
        "crystal",
        "onyx",
        "azurite",
        "bedrock",
        "moonstone",
        "glass_crest",
        "effulgent",
        "aether",
        "copper",
        "optical",
        "candy",
        "dark",
        "primal",
        "plant",
        "ender",
        "enchantment",
        "quitoxic",
        "star",
        "resonance",
        "annihilation",
        "colorful"
    ]

    // 遍历设备名称并注册
    MechanismTypes.forEach((machine) => {
        event.create(`${machine}_machine`)
            .model(`kubejs:block/${machine}_machine`)
            .hardness(3.0)
            .notSolid()
            .tagBlock("create:wrench_pickup")
            .tagBlock("minecraft:mineable/pickaxe")
    })

    event.create("base_block")
    event.create('adulterated_base_block')

})