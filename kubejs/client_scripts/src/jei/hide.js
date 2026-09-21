KubeJEIEvents.subtypes(event => {
    let hide = [
        "anvilcraft:brass_ingot",
        "anvilcraft:brass_nugget",
        "create:brass_sheet",
        "anvilcraft:brass_block",

        "vintageimprovements:bronze_sheet",

        "anvilcraft:copper_nugget",
        "create:copper_sheet",

        "anvilcraft:dough",
        "farmersdelight:wheat_dough",

        "anvilcraft:flour",

        "create_dragons_plus:fluid_hatch",

        "create:golden_sheet",

        "create:iron_sheet",

        "vintageimprovements:lead_sheet",

        "vintageimprovements:silver_sheet",

        "vintageimprovements:sulfur",
        "vintageimprovements:sulfur_block",

        "vintageimprovements:tin_sheet",

        "vintageimprovements:uranium_sheet",

        "anvilcraft:zinc_ingot",
        "anvilcraft:zinc_nugget",
        "vintageimprovements:zinc_sheet",
        "createaddition:zinc_sheet",
        "create_biotech:zinc_sheet",
        "anvilcraft:raw_zinc",
        "anvilcraft:raw_zinc_block",
        "anvilcraft:zinc_block",
        "anvilcraft:deepslate_zinc_ore"
    ].forEach(item => {
        event.hide(item)
    })
})