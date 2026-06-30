ServerEvents.recipes(event => {
    let minecraft = event.recipes.minecraft

    // 切数字
    let numbers = [
        Item.of("create_feature_engineering:zero"),
        Item.of("create_feature_engineering:one"),
        Item.of("create_feature_engineering:two"),
        Item.of("create_feature_engineering:three"),
        Item.of("create_feature_engineering:four"),
        Item.of("create_feature_engineering:five"),
        Item.of("create_feature_engineering:six"),
        Item.of("create_feature_engineering:seven"),
        Item.of("create_feature_engineering:eight"),
        Item.of("create_feature_engineering:nine")
    ]
    numbers.forEach((item) => {
        minecraft.stonecutting(item,"#create_feature_engineering:numbers")
    })
})
