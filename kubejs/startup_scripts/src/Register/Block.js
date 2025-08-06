const $CasingBlock = Java.loadClass("com.simibubi.create.content.decoration.encasing.CasingBlock")
const $EncasedCTBehaviour = Java.loadClass("com.simibubi.create.content.decoration.encasing.EncasedCTBehaviour")
const $EncasingRegistry = Java.loadClass("com.simibubi.create.content.decoration.encasing.EncasingRegistry")
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

    event.create("stradpole_skeleton").hardness(3.0).stoneSoundType() // 跨座蝌蚪遗骸

    event.create("steel_casing") // 钢机壳

    // event.createCustom("steel_casing", () => 
    //     new $CasingBlock())

    // event.createCustom('an_item:ranshao_qiti_gas', () =>
    // new $Gas($GasBuilder.builder()
    //   .tint(Color.of('#787878ff').getRgbJS())
    //   .with(new $Fuel(() => 1, () => //1表示燃烧时间1t
    //     $FloatingLong.create(200)) //200代表能量密度80FE/mB
    //   )))
})