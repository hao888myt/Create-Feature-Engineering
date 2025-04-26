// new Schema("anvilcraft:anvil_processing")
//     .simpleKey("anvil_recipe_type", "nonEmptyString")
//     .simpleKey("icon", "outputItem")
//     .complexKey("outcomes", true, (key) => {
//         key
//             .simpleKey("type", "nonEmptyString")
//             .simpleKey("chance", "float")
//             .simpleKey("offset", "vec3")
//             .simpleKey("result", "block")
//     }