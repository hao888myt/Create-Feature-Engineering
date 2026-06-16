ServerEvents.recipes(event => {
    let { ars_nouveau } = event.recipes

    let removes = [
        "ars_nouveau:glyph_launch"
    ].forEach(recipe => {
        event.remove(recipe)
    })
    
    ars_nouveau.glyph("ars_nouveau:glyph_launch",
        [
            Ingredient.of("#c:leathers"),
            Ingredient.of("#c:leathers"),
            Ingredient.of("#c:leathers"),
            "ars_nouveau:air_essence"
        ], 30
    )
})