ServerEvents.recipes(event => {
  let anvilCraft = event.recipes.anvilcraft
  anvilCraft.block_crush()
    .input("spectrum:ruin")
    .result("minecraft:bedrock")
})
