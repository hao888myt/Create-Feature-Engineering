ServerEvents.recipes(event =>{

    // SelectOneBuilder 样例用法，使用菌光体生成三种蛙明灯的其中一种
    event.recipes.anvilcraft.anvil_processing('test3')
        .hasItemIngredient('minecraft:shroomlight')
        .selectOne(SelectOneBuilder.builder()
            .spawnItem(0, 0, 0, 1.0, 'minecraft:ochre_froglight')
            .spawnItem(0, 0, 0, 1.0, 'minecraft:verdant_froglight')
            .spawnItem(0, 0, 0, 1.0, 'minecraft:pearlescent_froglight')
        )

    // event.recipes.anvilcraft.mob_transform('test2')
    //     .input('minecraft:sheep')
    //     .addOutput('minecraft:glow_squid')
})