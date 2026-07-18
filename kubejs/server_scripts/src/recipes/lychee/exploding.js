ServerEvents.recipes(event => {
    let lychee = event.recipes.lychee
    let post = PostBuilder.create()
    let contextual = ContextualBuilder.create()

    lychee.item_exploding(SizedIngredientWrapper.of("ars_nouveau:sourcestone"), [
        post.dropItem("spectrum:shimmerstone_gem")
    ])

    lychee.block_exploding(BlockPredicateWrapper.block("ars_nouveau:sourcestone"), [
        post.dropItem("spectrum:shimmerstone_gem"),
        post.withChance(0.5).dropItem("spectrum:shimmerstone_gem"),
        post.preventDefault()
    ])
})
