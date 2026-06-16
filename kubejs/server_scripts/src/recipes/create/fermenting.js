ServerEvents.recipes(event => {
    let cdg = event.recipes.createdieselgenerators

    let removes = [
        "createdieselgenerators:basin_fermenting/fermentable",
        "createdieselgenerators:bulk_fermenting/fermentable"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    // 乙醇
    cdg.basin_fermenting(Fluid.of("createdieselgenerators:ethanol", 200), [
        Item.of("minecraft:sugar"),
        Ingredient.of('#c:flours/wheat'),
        Fluid.of("minecraft:water", 200)
    ])
    cdg.bulk_fermenting(Fluid.of("createdieselgenerators:ethanol", 400), [
        Item.of("minecraft:sugar"),
        Ingredient.of('#c:flours/wheat'),
        Fluid.of("minecraft:water", 200)
    ])

    global.Materials.forEach(material => {
        if (material.types.includes("molten"))
        {
            cdg.basin_fermenting(Fluid.of(`${global.ModPackId}:molten_${material.id}`, 90), [
                Ingredient.of(`#c:ingots/${material.id}`)
            ]).heated()
        }
    });
})
