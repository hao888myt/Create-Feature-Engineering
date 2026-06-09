// ServerEvents.recipes(event => {
//     const lychee = event.recipes.lychee
//     let post = PostBuilder.create()
//     let contextual = ContextualBuilder.create()

//     //炸特斯拉球产生闪电
//     lychee.item_exploding(
//         [
//             SizedIngredientWrapper.of("minecraft:cobblestone")
//         ],
//         [
//             post.dropItem("minecraft:gravel")
//         ]
//     )
//     lychee.item_exploding(
//         [
//             SizedIngredientWrapper.of("alexscaves:tesla_bulb")
//         ],
//         [
//             //post.execute("summon lightning_bolt ~ ~ ~")
//             post.execute("summon lightning_bolt ~ ~ ~")
//         ]
//     )

//     //闪电转化方铅岩
//     lychee.lightning_channeling(
//         post(PostBuilder.execute("fill ~-1 ~-2 ~-1 ~1 ~-1 ~1 alexscaves:galena replace minecraft:air"))
//     )

// })
