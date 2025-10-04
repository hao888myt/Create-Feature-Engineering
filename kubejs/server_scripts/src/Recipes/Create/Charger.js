ServerEvents.recipes(event => {
    const createaddition = event.recipes.createaddition

    // 电容器充电
    createaddition.charging("anvilcraft:capacitor_empty", "anvilcraft:capacitor", 64000, 400)

    // 磁铁锭充电
    createaddition.charging("minecraft:iron_ingot", "anvilcraft:magnet_ingot", 16000, 200)

    // 磁铁块充电
    createaddition.charging("minecraft:iron_block", "anvilcraft:magnet_block", 144000, 400)
})