ServerEvents.recipes(event => {
    let create = event.recipes.create
    
    // 植本质压骨粉
    create.compacting(Item.of("minecraft:bone_meal", 16), "spectrum:vegetal")

    // 种子油配方
    create.compacting(Fluid.of("createdieselgenerators:plant_oil", 100), "4x #forge:seeds")
})
