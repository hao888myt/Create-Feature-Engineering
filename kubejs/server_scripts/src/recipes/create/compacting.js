ServerEvents.recipes(event => {
    let create = event.recipes.create

    let removes = [
        "createdieselgenerators:compacting/plant_oil"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    // 木头压树脂
    create.compacting([Item.of("anvilcraft:wood_fiber", 2), Item.of("anvilcraft:resin")], Ingredient.of("#minecraft:logs"))
    
    // 植本质压骨粉
    create.compacting(Item.of("minecraft:bone_meal", 16), "spectrum:vegetal")

    // 种子油配方
    create.compacting(Fluid.of("createdieselgenerators:plant_oil", 100), Ingredient.of("#c:seeds"))
})
