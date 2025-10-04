ServerEvents.recipes(event => {
    const cdg = event.recipes.createdieselgenerators

    // 原油分馏
    cdg.distillation([
        Fluid.of("kubejs:heavy_oil", 50),
        fluid.of("kubejs:liquefied_petroleum_gas", 75),
        Fluid.of("kubejs:light_oil", 50)
    ],  Fluid.of("createdieselgenerators:crude_oil", 100)).heated()

    cdg.distillation([
        Fluid.of("kubejs:heavy_oil", 100),
        fluid.of("kubejs:liquefied_petroleum_gas", 150),
        Fluid.of("kubejs:light_oil", 100)
    ],  Fluid.of("createdieselgenerators:crude_oil", 100)).superheated()
})