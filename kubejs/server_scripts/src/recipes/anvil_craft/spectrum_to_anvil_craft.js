ServerEvents.recipes((event) => {
    let $ItemIngredientPredicate = Java.loadClass("dev.anvilcraft.lib.recipe.component.ItemIngredientPredicate");
    let $ChanceItemStack = Java.loadClass("dev.anvilcraft.lib.recipe.component.ChanceItemStack");

    let anvilCraft = event.recipes.anvilcraft

    let removes = [
        "spectrum:anvil_crushing/frostbite_essence_from_ice",
        "spectrum:anvil_crushing/incandescent_essence_from_magma_block",
        "spectrum:anvil_crushing/incandescent_essence_from_blazing_crystal",
        "spectrum:anvil_crushing/incandescent_essence_from_blazing_crystal",

        "spectrum:anvil_crushing/gemstone_powder/amethyst_powder_from_amethyst_block",
        "spectrum:anvil_crushing/gemstone_powder/citrine_powder_from_citrine_block",
        "spectrum:anvil_crushing/gemstone_powder/moonstone_powder_from_moonstone_block",
        "spectrum:anvil_crushing/gemstone_powder/onyx_powder_from_onyx_block",
        "spectrum:anvil_crushing/gemstone_powder/topaz_powder_from_topaz_block",

        "spectrum:anvil_crushing/vanilla_pulverising/clay_balls_from_clay",

        "spectrum:mod_integration/create/anvil_crushing/cinder_flour",
        "spectrum:anvil_crushing/vanilla_pulverising/slime_ball_from_slime_block",
        "spectrum:anvil_crushing/vanilla_pulverising/slime_ball_from_slime_block",
        "spectrum:anvil_crushing/vanilla_pulverising/snow_balls_from_snow_block",
        "spectrum:anvil_crushing/vanilla_pulverising/glowstone_dust_from_glowstone",
        "spectrum:anvil_crushing/vanilla_pulverising/honeycomb_from_honeycomb_block",
        "spectrum:anvil_crushing/vanilla_pulverising/nether_brick_from_cracked_nether_bricks",

        "spectrum:anvil_crushing/vanilla_pulverising/red_sand_from_netherrack",
        "spectrum:anvil_crushing/vanilla_pulverising/cobblestone_from_stone",
        "spectrum:anvil_crushing/vanilla_pulverising/gravel_from_cobblestone",
        "spectrum:anvil_crushing/vanilla_pulverising/sand_from_end_stone",
        "spectrum:anvil_crushing/vanilla_pulverising/sand_from_end_stone_brick_stairs",
        "spectrum:anvil_crushing/vanilla_pulverising/sand_from_end_stone_brick_wall",
        "spectrum:anvil_crushing/vanilla_pulverising/sand_from_end_stone_bricks",
        "spectrum:anvil_crushing/vanilla_pulverising/sand_from_gravel",

        "spectrum:mod_integration/create/anvil_crushing/powdered_obsidian",
        "spectrum:anvil_crushing/vanilla_items/diamonds_from_diamond_horse_armor",
        "spectrum:anvil_crushing/vanilla_items/gold_ingots_from_golden_horse_armor",
        "spectrum:anvil_crushing/vanilla_items/iron_ingots_from_iron_horse_armor",
        "spectrum:anvil_crushing/vanilla_items/leather_from_leather_horse_armor",
        "spectrum:anvil_crushing/vanilla_items/leather_from_saddle",

        "anvilcraft:item_crush/block_crush/cracked_stone_bricks_from_stone_bricks",
        "anvilcraft:item_crush/block_crush/cracked_deepslate_bricks_from_deepslate_bricks",
        "anvilcraft:item_crush/block_crush/cracked_deepslate_tiles_from_deepslate_tiles",
        "anvilcraft:item_crush/block_crush/cracked_nether_bricks_from_nether_bricks",
        "anvilcraft:item_crush/block_crush/cracked_polished_blackstone_bricks_from_polished_blackstone_bricks"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    // 光谱配方转化
    event.forEachRecipe({ type: "spectrum:anvil_crushing" }, (recipe) => {
        let { json } = recipe;

        // console.log(json)

        let result = json.get("result")
        let result_item = result.get("id")
        let result_count = result.get("count")

        if (result_count == null) result_count = 1

        // console.log(result_item + " " + result_count)

        let ingredient_item = ""
        let ingredient_tag = ""

        let ingredients = json.get("ingredient")
        if (ingredients.isJsonArray()) {
            ingredients.forEach(ingredient => {
                ingredient_item = ingredient.get("item")
                ingredient_tag = ingredient.get("tag")
                spectrumToAnvilCraft(ingredient_tag, ingredient_item, result_item, result_count)
            })
        }
        else {
            ingredient_item = ingredients.get("item")
            ingredient_tag = ingredients.get("tag")
            spectrumToAnvilCraft(ingredient_tag, ingredient_item, result_item, result_count)
        }

        function spectrumToAnvilCraft(input_tag, input_item, output_item, output_count) {
            if (input_item != null && !Item.of(output_item).hasTag("c:dyes")) {
                anvilCraft.item_crush()
                    .ingredients($ItemIngredientPredicate.of(input_item).build())
                    .results($ChanceItemStack.of(Item.of(output_item, output_count)))
            }
        }
    })

    let tags = [
        [
            [
                "spectrum:glistering_shooting_star",
                "spectrum:fiery_shooting_star",
                "spectrum:colorful_shooting_star",
                "spectrum:pristine_shooting_star",
                "spectrum:gemstone_shooting_star"
            ],
            Item.of("spectrum:star_fragment", 2)
        ]
    ]

    tags.forEach(tag => {
        tag[0].forEach(item => {
            anvilCraft.item_crush()
                .ingredients($ItemIngredientPredicate.of(item).build())
                .results($ChanceItemStack.of(tag[1]))
        })
    })
    
    event.remove({ type: "spectrum:anvil_crushing" });
});
