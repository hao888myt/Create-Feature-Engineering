ServerEvents.recipes(event =>{
    
    //橡胶配方
    event.smelting("create_feature_engineering:rubber", "anvilcraft:resin").xp(0.1)
    event.smelting("create_feature_engineering:rubber", "alexscaves:pewen_sap").xp(0.1)
})
