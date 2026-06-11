StartupEvents.registry("block", event => {

    // 遍历设备名称并注册
    global.MechanismTypes.forEach((machine) => {
        event.create(`${global.ModPackId}:${machine}_machine`)
            .hardness(3.0)
            .notSolid()
            .tagBlock("create:wrench_pickup")
            .tagBlock("minecraft:mineable/pickaxe")
    })
    event.create(`${global.ModPackId}:brass_machine`)
            .hardness(3.0)
            .notSolid()
            .tagBlock("create:wrench_pickup")
            .tagBlock("minecraft:mineable/pickaxe")
    

    event.create(`${global.ModPackId}:paltaeria_ore_catalyst`).hardness(5.0).stoneSoundType() // 苍绿催生体
    
    event.create(`${global.ModPackId}:stradpole_skeleton`).hardness(3.0).stoneSoundType() // 跨座蝌蚪遗骸

    event.create(`${global.ModPackId}:steel_casing`) // 钢机壳
})
