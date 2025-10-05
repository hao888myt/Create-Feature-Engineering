ServerEvents.recipes(event => {
    const create_optical = event.recipes.create_optical

    // required_beam_type
    // 0 - 无线电波
    // 1 - 微波
    // 2 - 可见光
    // 3 - 伽马射线
    // 4 - 不需要光线

    // 单晶硅板
    create_optical.focusing("#spectrum:gemstone_shards", 20, 2, "kubejs:silicon_plate")
})