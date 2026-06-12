ServerEvents.recipes((event) => {
    let anvilCraft = event.recipes.anvilcraft

    // 光谱配方转化
    event.forEachRecipe({ type: "spectrum:anvil_crushing" }, (recipe) => {
        let { json } = recipe;

        console.log(json)

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
                spectrumToAnvilCraft()
            })
        }
        else {
            ingredient_item = ingredients.get("item")
            ingredient_tag = ingredients.get("tag")
            spectrumToAnvilCraft()
        }
        

        function spectrumToAnvilCraft() {
            // if (ingredient_item != null) {
            //     anvilCraft.item_crush()
            //         .ingredients(ingredient_item)
            //         .results(result_item, result_count)
            // }
            // else {
            //     anvilCraft.item_crush()
            //         .ingredients(Ingredient.of(`#${ingredient_tag}`))
            //         .results(result_item, result_count)
            // }
            console.log(ingredient_item + " " + ingredient_tag)
        }
    })
    // event.remove({ type: "spectrum:anvil_crushing" });
});
