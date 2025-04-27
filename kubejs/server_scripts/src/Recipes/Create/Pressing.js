ServerEvents.recipes(event => {
    const create = event.recipes.create
    create.pressing(Item.of('minecraft:bone_meal', 16), 'spectrum:vegetal')
})