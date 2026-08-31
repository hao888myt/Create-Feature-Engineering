ServerEvents.recipes(event => {
    let create = event.recipes.create

    let removes = [
        "createdieselgenerators:compacting/plant_oil",
        "createaddition:compacting/seed_oil",

        "ratatouille:sequenced_assembly/ripen_matter_fold",
        "ratatouille:sequenced_assembly/mature_matter_fold",
    ].forEach(recipe => {
        event.remove(recipe)
    })

    // 木头压树脂
    create.compacting([Item.of("anvilcraft:wood_fiber", 2), Item.of("anvilcraft:resin")], Ingredient.of("#minecraft:logs"))

    // 甜菜压糖
    create.compacting(["minecraft:sugar", CreateItem.of("minecraft:sugar", 0.5)], "minecraft:beetroot")
    
    // 植本质压骨粉
    create.compacting(Item.of("minecraft:bone_meal", 16), "spectrum:vegetal")

    // 种子油配方
    create.compacting(Fluid.of("createdieselgenerators:plant_oil", 100), Ingredient.of("#c:seeds"))

    // 催熟素叠
    create.compacting(Item.of("ratatouille:ripen_matter_fold", 4), [Fluid.of("ratatouille:compost_tea", 100), Item.of("ratatouille:compost_residue", 3)])

    // 成熟素叠
    create.compacting(Item.of("ratatouille:mature_matter_fold", 4), [Fluid.of("ratatouille:compost_tea", 100), Item.of("ratatouille:compost_residue", 3)]).heated()
})
