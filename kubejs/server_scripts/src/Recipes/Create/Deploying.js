ServerEvents.recipes(event => {
    const create = event.recipes.create

    //未完成的异彩化合物
    // create.deploying('kubejs:incomplete_chromatic_compound', ['create_dd:compound_base', '#create_dd:stone_types/aethersite'])
})