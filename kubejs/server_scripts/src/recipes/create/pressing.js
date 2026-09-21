ServerEvents.recipes(event => {
    let create = event.recipes.create

    // 树皮压纸
    create.pressing(Item.of("minecraft:paper"), Item.of("farmersdelight:tree_bark"))

    // 木头压树脂
    create.pressing([Item.of("anvilcraft:wood_fiber", 2), Item.of("anvilcraft:resin")], Ingredient.of("#minecraft:logs"))
})
