ServerEvents.recipes(event=>{
    const create = event.recipes.create

    //植本质
    create.mixing(Item.of('create:tree_fertilizer', 4), [Item.of('minecraft:bone_meal', 2), 'spectrum:vegetal'])

    // 矿石饲料
    create.mixing([Item.of('kubejs:ore_feed', 8), Item.of('kubejs:ore_feed', 2).withChance(0.5)], [Item.of('minecraft:coal', 2), Item.of('spelunkery:rough_cinnabar'), Item.of('create:crushed_raw_iron'), Item.of('spelunkery:rough_lazurite', 5), Item.of('create:crushed_raw_copper'), Item.of('minecraft:glow_berries', 8)])
})