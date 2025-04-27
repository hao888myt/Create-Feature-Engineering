ServerEvents.recipes(event=>{
    const create = event.recipes.create

    //充能方铅岩粉碎
    create.crushing([Item.of('alexscaves:raw_azure_neodymium', 2), Item.of('alexscaves:raw_scarlet_neodymium', 2), Item.of('alexscaves:galena').withChance(0.75)], ['alexscaves:energized_galena_neutral'])

    //火花石变火花石碎片
    create.crushing([Item.of('kubejs:shimmerstone_gem_shard', 2), Item.of('kubejs:shimmerstone_gem_shard').withChance(0.25)], ['spectrum:shimmerstone_gem'])

    //珍珠磨碎片
    create.crushing([Item.of('betterend:ender_shard', 2), Item.of('betterend:ender_shard').withChance(0.25)], ['#forge:ender_pearls'])
})