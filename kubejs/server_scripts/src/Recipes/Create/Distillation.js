ServerEvents.recipes(event => {
    const cdg = event.recipes.createdieselgenerators

    // 原油分馏
    event.remove("createdieselgenerators:distillation/superheated_crude_oil")
    event.remove("createdieselgenerators:distillation/crude_oil")
    cdg.distillation([
        Fluid.of("kubejs:heavy_oil", 50),
        Fluid.of("kubejs:liquefied_petroleum_gas", 75),
        Fluid.of("kubejs:light_oil", 50)
    ],  Fluid.of("createdieselgenerators:crude_oil", 100)).heated()

    cdg.distillation([
        Fluid.of("kubejs:heavy_oil", 100),
        Fluid.of("kubejs:liquefied_petroleum_gas", 150),
        Fluid.of("kubejs:light_oil", 100)
    ],  Fluid.of("createdieselgenerators:crude_oil", 100)).superheated()
})