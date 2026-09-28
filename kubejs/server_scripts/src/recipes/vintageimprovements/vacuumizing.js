ServerEvents.recipes(event => {
    let vintageimprovements = event.recipes.vintageimprovements

    vintageimprovements.vacuumizing(Item.of('researchd:research_pack[researchd:research_pack="create_feature_engineering:chemical"]', 3),
        [
            Ingredient.of("#c:sulfur", 8),
            Item.of("create:sturdy_sheet", 3),
            Item.of("anvilcraft:hardend_resin", 4),
            Item.of("anvilcraft:capacitor", 2),
        ]
    ).processingTime(400)
        .superheated()
})