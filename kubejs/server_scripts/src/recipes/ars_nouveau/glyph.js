ServerEvents.recipes(event => {
    let { ars_nouveau } = event.recipes

    let removes = [
        "ars_nouveau:glyph_launch",
        "ars_nouveau:glyph_crush",
        "ars_nouveau:wololo",
        "ars_elemental:glyph_discharge",
        "ars_nouveau:glyph_smelt"
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

    ars_nouveau.glyph("ars_nouveau:glyph_crush",
        [
            Ingredient.of("#minecraft:anvil"),
            Ingredient.of("#spectrum:gemstone_shards"),
            Ingredient.of("anvilcraft:crushing_table")
        ], 50
    )

    ars_nouveau.glyph("ars_nouveau:wololo",
        [
            "ars_nouveau:source_gem",
            Ingredient.of("#c:dyes"),
            Ingredient.of("#c:dyes"),
            Ingredient.of("#c:dyes"),
        ], 50
    )

    ars_nouveau.glyph("ars_elemental:glyph_discharge",
        [
            "ars_elemental:flashpine_pod",
            "minecraft:lightning_rod",
            "spectrum:storm_stone",
            "ars_nouveau:air_essence",
        ], 55
    )

    ars_nouveau.glyph("ars_nouveau:glyph_smelt",
        [
            "minecraft:blast_furnace",
            "minecraft:furnace",
            "minecraft:smoker"
        ], 50
    )
})
