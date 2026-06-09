ServerEvents.recipes(event => {
    const create = event.recipes.create

    //充能方铅岩粉碎
    create.crushing([Item.of("alexscaves:raw_azure_neodymium", 2), Item.of("alexscaves:raw_scarlet_neodymium", 2), Item.of("alexscaves:galena")], ["alexscaves:energized_galena_neutral"])

    // 光谱世界水晶粉碎
    CrushingCrystal("topaz")
    CrushingCrystal("citrine")
    CrushingCrystal("onyx")
    CrushingCrystal("moonstone")
    function CrushingCrystal(mateirial) {
        create.crushing(
            [Item.of(`spectrum:${mateirial}_shard`, 7), CreateItem.of(`spectrum:${mateirial}_shard`, 0.5)],
            [`spectrum:${mateirial}_cluster`]
        )
    }

    // 钨矿石粉碎
    // event.remove("createmetallurgy:crushing/wolframite_ore")
    // create.crushing([
    //     Item.of("createmetallurgy:crushed_raw_wolframite", 2),
    //     Item.of("createmetallurgy:crushed_raw_wolframite").withChance(0.25),
    //     Item.of("create:experience_nugget").withChance(0.75),
    //     Item.of("minecraft:cobbled_deepslate").withChance(0.12),
    // ], "anvilcraft:deepslate_tungsten_ore")

    // 凝灰岩粉碎
    // event.remove("create:crushing/tuff")
    // event.remove("create:crushing/tuff_recycling")
    // create.crushing([
    //     Item.of("minecraft:flint").withChance(0.75),
    //     Item.of("spelunkery:raw_gold_nugget").withChance(0.5),
    //     Item.of("spelunkery:raw_copper_nugget").withChance(0.5),
    //     Item.of("spelunkery:raw_zinc_nugget").withChance(0.5),
    //     Item.of("spelunkery:raw_iron_nugget").withChance(0.5),
    // ], "#create:stone_types/tuff")

    // 花岗岩粉碎
    create.crushing("minecraft:red_sand", "minecraft:granite")

    // 闪长岩粉碎
    event.remove("create:crushing/diorite_recycling")
    event.remove("create:crushing/diorite")
    create.crushing("anvilcraft:quartz_sand", "minecraft:diorite")
    create.crushing("anvilcraft:quartz_sand", Ingredient.of("#create:stone_types/diorite"))

    // 安山岩粉碎
    event.remove("createnuclear:crushing/andesite")
    create.crushing("anvilcraft:cinerite", "minecraft:andesite")

    // 下界岩粉碎
    create.crushing("anvilcraft:nether_dust", "minecraft:netherrack")

    // 末地石粉碎
    create.crushing("anvilcraft:end_dust", "minecraft:end_stone")
})
