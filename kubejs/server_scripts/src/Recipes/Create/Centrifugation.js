ServerEvents.recipes(event =>{
    const vintageimprovements = event.recipes.vintageimprovements

    //树脂
    // event.remove('anvilcraft:stamping/logs_2_wood_fiber')
    // vintageimprovements.centrifugation('anvilcraft:resin', ['create_dd:crystallized_sap', 'create_dd:crystallized_sap'], 250)

    //维度之泪
    vintageimprovements.centrifugation([Fluid.of('spelunkery:portal_fluid', 100), 'minecraft:obsidian'], 'minecraft:crying_obsidian', 500)
})