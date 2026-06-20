ServerEvents.recipes(event => {
    let create = event.recipes.create

    let removes = [
        "create:crushing/diorite_recycling",
        "create:crushing/diorite"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    // 花岗岩粉碎
    create.crushing("minecraft:red_sand", "minecraft:granite")

    // 闪长岩粉碎
    create.crushing("anvilcraft:quartz_sand", "minecraft:diorite")
    create.crushing("anvilcraft:quartz_sand", Ingredient.of("#create:stone_types/diorite"))

    // 安山岩粉碎
    create.crushing("anvilcraft:cinerite", "minecraft:andesite")

    // 下界岩粉碎
    create.crushing("anvilcraft:nether_dust", "minecraft:netherrack")

    // 末地石粉碎
    create.crushing("anvilcraft:end_dust", "minecraft:end_stone")
})
