ServerEvents.recipes(event => {
    const create = event.recipes.create
    create.pressing(Item.of('minecraft:bone_meal', 16), 'spectrum:vegetal')

    // 去皮木头压成树脂
    create.pressing([CreateItem.of('anvilcraft:resin', 0.5), 'anvilcraft:wood_fiber'], Ingredient.of("#c:stripped_logs"))

    // 硬化树脂
    event.remove("anvilcraft:cooking/hardend_resin")
    create.pressing("anvilcraft:hardend_resin", Ingredient.of("#create_feature_engineering:sap"))

})
