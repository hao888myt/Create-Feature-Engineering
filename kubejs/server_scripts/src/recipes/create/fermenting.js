ServerEvents.recipes(event => {
    let cdg = event.recipes.createdieselgenerators

    // 乙醇
    event.remove("createdieselgenerators:basin_fermenting/fermentable")
    event.remove("createdieselgenerators:bulk_fermenting/fermentable")
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
})
