ServerEvents.recipes(event=>{
    const create = event.recipes.create

    //植本质
    create.mixing(Item.of('create:tree_fertilizer', 4), [Item.of('minecraft:bone_meal', 2), 'spectrum:vegetal'])
})