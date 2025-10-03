ServerEvents.recipes(event => {
    const create = event.recipes.create

    //方铅岩压块
    event.remove('create_oppenheimered:compacting/galena')
    create.compacting(['alexscaves:galena'], [Fluid.lava(25), '#c:lead_nuggets', 'minecraft:stone'])

    //结晶树液
    // create.compacting(['create_dd:crystallized_sap', Item.of('createdieselgenerators:wood_chip', 8)], [Item.of('#create_dd:rubber_logs', 8)])

    //植本质压骨粉
    create.compacting(Item.of('minecraft:bone_meal', 16), 'spectrum:vegetal')

    // 删除种子油配方，修改植物油配方
    event.remove("createaddition:compacting/seed_oil")
    event.remove("createdieselgenerators:compacting/plant_oil")
    create.compacting(Fluid.of("createdieselgenerators:plant_oil", 100), Item.of("minecraft:wheat_seeds", 4)).heated()

    // 删除生物乙醇配方
    event.remove("createaddition:mixing/bioethanol")
})