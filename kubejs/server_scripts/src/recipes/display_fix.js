ServerEvents.recipes(event => {
    let create = event.recipes.create
    let cdg = event.recipes.createdieselgenerators

    let plate_removes = [
        "createdieselgenerators:compat/createaddition/zinc_sheet",
        "createdieselgenerators:hammering/brass_sheet",
        "createdieselgenerators:hammering/copper_sheet",
        "createdieselgenerators:hammering/gold_sheet",
        "createdieselgenerators:hammering/iron_sheet",

        "create:pressing/copper_ingot",
        "create:pressing/brass_ingot",
        "create:pressing/iron_ingot",
        "create:pressing/gold_ingot",
        "vintageimprovements:pressing/bronze_ingot",
        "vintageimprovements:pressing/lead_ingot",
        "vintageimprovements:pressing/silver_ingot",
        "vintageimprovements:pressing/tin_ingot",
        "vintageimprovements:pressing/uranium_ingot",
        "createaddition:pressing/zinc_ingot",
        "create_biotech:pressing/zinc_ingot"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    let plate_fix = [
        ["#c:ingots/copper", "anvilcraft:copper_pressure_plate"],
        ["#c:ingots/brass", "anvilcraft:brass_pressure_plate"],
        ["#c:ingots/iron", "minecraft:heavy_weighted_pressure_plate"],
        ["#c:ingots/gold", "minecraft:light_weighted_pressure_plate"],
        ["#c:ingots/bronze", "anvilcraft:bronze_pressure_plate"],
        ["#c:ingots/lead", "anvilcraft:lead_pressure_plate"],
        ["#c:ingots/silver", "anvilcraft:silver_pressure_plate"],
        ["#c:ingots/tin", "anvilcraft:tin_pressure_plate"],
        ["#c:ingots/uranium", "anvilcraft:uranium_pressure_plate"],
        ["#c:ingots/zinc", "anvilcraft:zinc_pressure_plate"],
        ["#c:ingots/tungsten", "anvilcraft:tungsten_pressure_plate"],
        ["#c:ingots/titanium", "anvilcraft:titanium_pressure_plate"],
        ["#c:ingots/plutonium", "anvilcraft:plutonium_pressure_plate"],
    ].forEach(items => {
        create.pressing(items[1], Ingredient.of(items[0]))
        cdg.hammering(items[1], Ingredient.of(items[0]))
    })

    let dough_remove = [
        "anvilcraft:solid_liquid/dough",
        "farmersdelight:wheat_dough",
        "farmersdelight:wheat_dough_from_water"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    let dough_fix = [
        ["create:wheat_flour", "create:dough"]
    ].forEach(items => {
        event.custom({
            "type": "anvilcraft:solid_liquid",
            "fluid": "minecraft:water",
            "ingredients": [
                {
                    "items": items[0]
                }
            ],
            "results": [
                {
                    "id": items[1]
                }
            ]
        })
    })
})