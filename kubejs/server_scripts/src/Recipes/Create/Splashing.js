ServerEvents.recipes(event => {
    let { create } = event.recipes
    // event.remove('create_dd:emptying/chromatic_waste')
    // create.splashing(Item.of('create_dd:compound_base').withChance(0.25), 'kubejs:adulterated_compound_base')
    event.remove("create:splashing/red_sand")
    create.splashing([
        Item.of("spelunkery:raw_gold_nugget", 3).withChance(0.75), 
        Item.of("minecraft:dead_bush").withChance(0.05)
    ], "minecraft:red_sand")
})