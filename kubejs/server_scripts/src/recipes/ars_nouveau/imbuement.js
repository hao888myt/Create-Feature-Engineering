ServerEvents.recipes(event => {
    let { ars_nouveau } = event.recipes

    let removes = [
        "ars_nouveau:imbuement_amethyst",
        "ars_nouveau:imbuement_lapis"
    ].forEach(recipe => {
        event.remove(recipe)
    })
    
    ars_nouveau.imbuement(Ingredient.of("#spectrum:gemstone_shards"), "ars_nouveau:source_gem", 500)
})
