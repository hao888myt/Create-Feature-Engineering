ServerEvents.recipes(event => {
    let createdieselgenerators = event.recipes.createdieselgenerators

    let removes = [
        
    ].forEach(recipe => {
        event.remove(recipe)
    })

    global.Materials.forEach(material => {
        if(material.types.includes("molten")) {
            createdieselgenerators.casting(Ingredient.of(`#c:ingots/${material.id}`).first, "createdieselgenerators:bar", Fluid.of(`${global.ModPackId}:molten_${material.id}`))
        }
    })
})