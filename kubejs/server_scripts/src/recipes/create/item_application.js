ServerEvents.recipes((event) => {
    let create = event.recipes.create

    let recipes = [
        ["create:mechanical_press", "create:andesite_casing", "#c:storage_blocks/iron"],
        ["create:mechanical_mixer", "create:andesite_casing", "create:whisk"],
        ["create:encased_fan", "create:andesite_casing", "create:propeller"],
        ["create:millstone", "create:andesite_casing", "#c:stones"],
        ["create:mechanical_saw", "create:andesite_casing", "#c:plates/iron"],
        ["create:mechanical_drill", "create:andesite_casing", "#c:ingots/iron"],

        ["create:deployer", "create:andesite_casing", "create:brass_hand"],

        ["create:empty_blaze_burner", "minecraft:netherrack", "#c:plates/iron"]
    ]


    recipes.forEach(recipe => {
        create.item_application(recipe[0], [Ingredient.of(recipe[1]), Ingredient.of(recipe[2])])
        if (recipe.length == 4 && recipe[3] != null) {
            return
        }
        if (recipe.length > 3) {
            for (let i = 3; i < recipe.length; i++) {
                event.remove(recipe[i])
            }
        }
        else {
            event.remove({ output: recipe[0] })
        }
    })
})
