ServerEvents.recipes(event =>{
    let minecraft = event.recipes.minecraft

    //橡胶配方
    minecraft.smoking("create_feature_engineering:rubber", "anvilcraft:resin").xp(0.1)
})
