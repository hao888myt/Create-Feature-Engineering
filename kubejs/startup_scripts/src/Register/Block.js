StartupEvents.registry("block", event => {

    // 遍历设备名称并注册
    global.MechanismTypes.forEach((machine) => {
        event.create(`${machine}_machine`)
            .model(`kubejs:block/${machine}_machine`)
            .hardness(3.0)
            .notSolid()
            .tagBlock("create:wrench_pickup")
            .tagBlock("minecraft:mineable/pickaxe")
    })

    event.create(`brass_machine`)
            .model(`kubejs:block/brass_machine`)
            .hardness(3.0)
            .notSolid()
            .tagBlock("create:wrench_pickup")
            .tagBlock("minecraft:mineable/pickaxe")

    event.create("base_block")
    event.create('adulterated_base_block')

    event.create('paltaeria_ore_catalyst').hardness(5.0).stoneSoundType()

    event.create("toretoise_fossil").hardness(3.0).stoneSoundType() // 乌龟化石
})