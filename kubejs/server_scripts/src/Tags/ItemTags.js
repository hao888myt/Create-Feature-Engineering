ServerEvents.tags('item', event =>{
    event.add('forge:ores_in_ground/deepslate', 'anvilcraft:deepslate_zinc_ore')
    event.add('forge:ores_in_ground/deepslate', 'anvilcraft:deepslate_tin_ore')
    event.add('lychee:fire_immune', 'spectrum:bedrock_dust')
    event.add('lychee:fire_immune', 'spectrum:shimmerstone_gem')

    //添加催化剂标签
    event.add('kubejs:catalysts', 'kubejs:paltaeria_catalyst') 
    event.add('kubejs:catalysts', 'kubejs:stratine_catalyst')
    event.add('kubejs:catalysts', 'kubejs:hover_catalyst')
    event.add('kubejs:catalysts', 'kubejs:gravity_catalyst')

    //添加橡胶标签
    event.add('forge:rubber', 'kubejs:rubber')

    //添加树脂标签
    event.add('kubejs:sap', 'anvilcraft:resin')
    event.add('kubejs:sap', 'alexscaves:pewen_sap')
})