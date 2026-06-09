ServerEvents.recipes(event => {
  const anvilCraft = event.recipes.anvilcraft
  
  //有机肥料转化沃土
  anvilCraft.time_warp()
    .requires("farmersdelight:organic_compost")
    .result("farmersdelight:rich_soil")
})
