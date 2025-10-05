StartupEvents.registry("item", event => {

    // 批量注册构件
    global.MechanismTypes.forEach((mechanism) => {
        event.create(`${mechanism}_mechanism`)
            .texture(`kubejs:item/mechanism/complete/${mechanism}`)
        event.create(`incomplete_${mechanism}_mechanism`)
            .texture(`kubejs:item/mechanism/incomplete/${mechanism}`)
    })

    event.create("crystal_core") // 水晶核心
    event.create("incomplete_crystal_core") // 未完成的水晶核心

    event.create("shimmerstone_gem_shard") // 火花石碎片
    event.create("shimmerstone_gem_lump") // 火花石碎块

    event.create("paltaeria_catalyst") // 苍绿催化剂
    event.create("stratine_catalyst") // 绯红催化剂
    event.create("hover_catalyst") // 悬浮催化剂
    event.create("gravity_catalyst") // 重力催化剂

    event.create("rubber") // 橡胶

    event.create("incomplete_foundry_mixer") // 熔铸搅拌器（未完成）
    event.create("incomplete_distillation_controller") // 分馏塔控制器（未完成）
    event.create("incomplete_bulk_fermenter") // 批量发酵器（未完成）
    event.create("incomplete_impact_pile") // 冲击桩（未完成）

    event.create("incomplete_circuit_board") // 电路板（未完成）
    event.create("incomplete_magnetoelectric_core") // 磁电核心（未完成）
    event.create("incomplete_capacitor_empty") // 电容器（未完成）
    
    event.create("silicon_plate") // 单晶硅板

    event.create("incomplete_electric_motor") // 电动马达（未完成）
    event.create("incomplete_alternator") // 交流发电机（未完成）
    event.create("incomplete_tesla_coil") // 特斯拉线圈（未完成）
    event.create("incomplete_modular_accumulator") // 蓄电池（未完成）
    event.create("incomplete_transmission_pole") // 输电杆（未完成）
    event.create("incomplete_remote_transmission_pole") // 远程输电杆（未完成）
    event.create("incomplete_heater") // 加热器（未完成）

    event.create("litematica_tool") // 投影工具

    event.create("world_edit_tool") // 创世神工具

    event.create("adulterated_compound_base")
    event.create("incomplete_chromatic_compound")
    event.create("chromatic_compound_shard")
    event.create("unstable_chromatic_compound")

    event.create("ore_feed") // 矿石饲料

    event.create("soul_vulture_heart") // 灵魂鹫之心
    event.create("ectoplasm") // 灵质

    event.create("cyan_mixture") // 青色混合物

    event.create("royal_prism") // 皇家棱镜
    event.create("royal_optical_device") // 皇家光学设备

    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    numbers.forEach((number) => {
        event.create(`unstackable_${number}`)
        .rarity("uncommon")
        .unstackable()

        event.create(`${number}`)
        .rarity("uncommon")
    })
})