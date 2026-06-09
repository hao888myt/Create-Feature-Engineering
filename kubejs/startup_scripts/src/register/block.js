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

    // // event.createCustom("steel_casing", () => 
    // //     new $CasingBlock())

    // // event.createCustom('an_item:ranshao_qiti_gas', () =>
    // // new $Gas($GasBuilder.builder()
    // //   .tint(Color.of('#171515ff').getRgbJS())
    // //   .with(new $Fuel(() => 1, () => //1表示燃烧时间1t
    // //     $FloatingLong.create(200)) //200代表能量密度80FE/mB
    // //   )))
})
