ServerEvents.recipes(event => {
    let removes = [
        "anvilcraft:brass_block",
        "anvilcraft:brass_ingot",
        "anvilcraft:brass_ingot_from_block",
        "anvilcraft:brass_nugget",

        "anvilcraft:copper_ingot_from_nugget",
        "anvilcraft:copper_nugget",

        "farmersdelight:wheat_dough_from_egg",

        "anvilcraft:item_crush/flour",

        "fluidlogistics:fluid_hatch",

        "vintageimprovements:craft/sulfur_items_to_block",
        "vintageimprovements:craft/sulfur_block_to_items",

        "anvilcraft:raw_zinc_block",
        "anvilcraft:raw_zinc",
        "anvilcraft:zinc_ingot",
        "anvilcraft:zinc_ingot_from_block",
        "anvilcraft:zinc_block",
        "anvilcraft:zinc_nugget"
    ].forEach(recipe => {
        event.remove(recipe)
    })
})