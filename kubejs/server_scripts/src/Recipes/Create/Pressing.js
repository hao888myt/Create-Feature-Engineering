ServerEvents.recipes(event => {
    const create = event.recipes.create
    create.pressing(Item.of('minecraft:bone_meal', 16), 'spectrum:vegetal')

    // 去皮木头压成树脂
    create.pressing([Item.of('anvilcraft:resin').withChance(0.5), Item.of('anvilcraft:wood_fiber')], "#forge:stripped_logs")

    // 硬化树脂
    event.remove("anvilcraft:cook/hardend_resin")
    create.pressing("anvilcraft:hardend_resin", "#kubejs:sap")

})