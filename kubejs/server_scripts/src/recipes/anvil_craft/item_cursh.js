ServerEvents.recipes(event => {
    // const { $ItemIngredientPredicate, $ChanceItemStack } = require("@package/dev/anvilcraft/lib/recipe/component")
    let { anvilcraft } = event.recipes

    let removes = [
        "anvilcraft:item_crush/wood_fiber"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    // anvilcraft.item_crush(
    //     $ItemIngredientPredicate.of("minecraft:iron_nugget").build(),
    //     [
    //         $ChanceItemStack.of(Item.of("anvilcraft:wood_fiber", 2)),
    //         $ChanceItemStack.of(Item.of("anvilcraft:resin"))
    //     ]
    // )

    event.custom(
        {
            "type": "anvilcraft:item_crush",
            "ingredients": [
                {
                    "items": "#minecraft:logs"
                }
            ],
            "results": [
                {
                    "count": 2,
                    "id": "anvilcraft:wood_fiber"
                },
                {
                    "id": "anvilcraft:resin"
                }
            ]
        }
    )
})