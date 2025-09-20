ServerEvents.recipes(event =>{
    
    //橡胶配方
    event.smelting("kubejs:rubber", "anvilcraft:resin").xp(0.1)
    event.smelting("kubejs:rubber", "alexscaves:pewen_sap").xp(0.1)

    // 粗磁铁烧成磁铁锭
    event.remove("spelunkery:iron_from_magnetite")
    event.remove("spelunkery:iron_from_magnetite_blasting")
    event.smelting("anvilcraft:magnet_ingot", "spelunkery:raw_magnetite").xp(0.35)
    event.blasting("anvilcraft:magnet_ingot", "spelunkery:raw_magnetite").xp(0.35)

    let dust_to_ingot = [
        ["#forge:dusts/iron", "minecraft:iron_ingot"],
        ["#forge:dusts/gold", "minecraft:gold_ingot"],
        ["#forge:dusts/copper", "minecraft:copper_ingot"],
        ["#forge:dusts/zinc", "create:zinc_ingot"],
        ["#forge:dusts/tungsten", "anvilcraft:tungsten_ingot"],
    ]
    dust_to_ingot.forEach(pair => {
        event.smelting(pair[1], pair[0]).xp(0.7)
    })
})