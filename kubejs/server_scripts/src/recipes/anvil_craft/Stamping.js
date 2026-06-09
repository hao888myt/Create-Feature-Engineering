ServerEvents.recipes((event) => {
    let anvilCraft = event.recipes.anvilcraft

    // 光谱配方转化
    let removes = [
        "spectrum:anvil_crushing/crystallarieum_growables/coal_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/copper_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/iron_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/gold_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/redstone_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/lapis_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/diamond_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/emerald_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/netherite_scrap_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/quartz_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/prismarine_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/glowstone_from_buds",
        "spectrum:anvil_crushing/crystallarieum_growables/echo_shard_from_buds",
        "spectrum:anvil_crushing/bismuth/bismuth_from_buds"
    ]
    removes.forEach((remove) => {
        event.remove(remove)
    })

    event.forEachRecipe({ type: "spectrum:anvil_crushing" }, (recipe) => {
        let { json } = recipe;
        // console.log(recipe.getId());

        let result = json.get("result")
        let result_item = result.get("id")
        let result_count = result.get("count")
        if (result_count == null) result_count = 1

        let ingredient = json.getAsJsonObject("ingredient")
        let ingredient_item = ingredient.getAsString("item")
        let ingredient_tag = ingredient.getAsString("tag")
        // if (ingredient_item != null) console.log(ingredient_item);
        // if (ingredient_tag != null) console.log(ingredient_tag);

        if (ingredient_item != null) 
        {
            anvilCraft.item_crush()
                .requires(ingredient_item)
                .result(result_item, result_count)
        }
        else
        {
            anvilCraft.item_crush()
                .requires(Ingredient.of(`#${ingredient_tag}`))
                .result(result_item, result_count)
        }

        console.log(json)
    })
    event.remove({ type: "spectrum:anvil_crushing" });
});
