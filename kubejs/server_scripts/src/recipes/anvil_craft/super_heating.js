ServerEvents.recipes(event => {
    let removes = [
        "anvilcraft:super_heating/royal_steel_block_base",
        "anvilcraft:super_heating/royal_steel_block_bonus_1",
        "anvilcraft:super_heating/royal_steel_block_bonus_2",
        "anvilcraft:super_heating/royal_steel_ingot_base",
        "anvilcraft:super_heating/royal_steel_ingot_bonus_1",
        "anvilcraft:super_heating/royal_steel_ingot_bonus_2"
    ].forEach(recipe => {
        event.remove(recipe)
    })
})