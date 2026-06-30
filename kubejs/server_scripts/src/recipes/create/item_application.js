ServerEvents.recipes((event) => {
    let create = event.recipes.create

    let recipes = [
        ["create:mechanical_press", "create:andesite_casing", "#c:storage_blocks/iron"],
        ["create:mechanical_mixer", "create:andesite_casing", "create:whisk"],
        ["create:encased_fan", "create:andesite_casing", "create:propeller"],
        ["create:millstone", "create:andesite_casing", "#c:stones"],
        ["create:mechanical_saw", "create:andesite_casing", "#c:plates/iron"],
        ["create:mechanical_drill", "create:andesite_casing", "#c:ingots/iron"],

        ["vintageimprovements:spring_coiling_machine", "create:andesite_casing", "vintageimprovements:spring_coiling_machine_wheel"],
        ["createaddition:rolling_mill", "create:andesite_casing", "#c:ingots/zinc"],
        ["create_enchantment_industry:mechanical_grindstone", "create:shaft", "#c:ingots/andesite_alloy"],

        ["create:deployer", "create:andesite_casing", "create:brass_hand"],

        ["create:mechanical_pump", "create:fluid_pipe", "create:cogwheel", false],

        ["create:empty_blaze_burner", "minecraft:netherrack", "#c:plates/iron"],

        ["create:packager", "create:cardboard_block", "#c:ingots/andesite_alloy"],
        ["create:package_frogport", "create_fantasizing:andesite_crate", "#c:slimeballs"],

        ["create:item_drain", "create:copper_casing", "minecraft:iron_bars"],
        ["create:spout", "create:copper_casing", "minecraft:dried_kelp"],
        ["fluidlogistics:fluid_pump", "create:mechanical_pump", "create:propeller"],
        ["create:hose_pulley", "create:copper_casing", "minecraft:dried_kelp_block"],

        ["ratatouille:spreader", "create:encased_fan", "ratatouille:ripen_matter"],
        ["ratatouille:irrigation_tower", "create:fluid_tank", "#c:ingots/copper"],

        ["fluidlogistics:smart_faucet", "fluidlogistics:faucet", "create:electron_tube"]
    ]


    recipes.forEach(recipe => {
        create.item_application(recipe[0], [Ingredient.of(recipe[1]), Ingredient.of(recipe[2])])
        removeRecipe(recipe, 3, event)
    })
})
