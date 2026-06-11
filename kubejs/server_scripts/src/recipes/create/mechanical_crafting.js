ServerEvents.recipes(event => {
    let create = event.recipes.create

    // 粉碎轮
    event.remove("create:mechanical_crafting/crushing_wheel")
    create.mechanical_crafting(Item.of("create:crushing_wheel", 2), [
      " SSS ",
      "SSPSS",
      "SPAPS",
      "SSPSS",
      " SSS "
    ], {
      A: "create:andesite_alloy",
      S: "minecraft:smooth_stone",
      P: "#minecraft:planks"
    })
  })
