ServerEvents.recipes(event => {
    let ars_nouveau = event.recipes.ars_nouveau

    let removes = [
        "ars_elemental:ritual_tesla_coil"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    global.SpectrumColors.forEach(color => {
        ars_nouveau.enchanting_apparatus([
            `spectrum:${color}_pigment`,
            `spectrum:${color}_pigment`,
            "spectrum:vegetal",
            "ars_nouveau:earth_essence"
        ],
            Ingredient.of("#create_feature_engineering:magic_saplings"),
            `spectrum:${color}_sapling`,
            0
        )
    })

    ars_nouveau.enchanting_apparatus([
        "create_feature_engineering:cyan_mixture",
        "create_feature_engineering:cyan_mixture",
        "create_feature_engineering:cyan_mixture",
        "create_feature_engineering:cyan_mixture"
        ],
            "spectrum:neolith",
            Item.of("spectrum:raw_azurite", 4),
            2000
        )
    
    ars_nouveau.enchanting_apparatus([
        "spectrum:storm_stone",
        "anvilcraft:topaz",
        "minecraft:lightning_rod",
        "ars_nouveau:air_essence"
        ],
            "ars_elemental:yellow_archwood_log",
            "ars_elemental:ritual_tesla_coil",
            0
        )
})