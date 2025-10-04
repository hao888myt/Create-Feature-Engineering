ServerEvents.recipes(event => {
    const cdg = event.recipes.createdieselgenerators

    // 原油分馏
    event.remove("createdieselgenerators:distillation/superheated_crude_oil")
    event.remove("createdieselgenerators:distillation/crude_oil")
    // 加热
    cdg.distillation([
        Fluid.of("kubejs:heavy_oil", 50),
        Fluid.of("kubejs:light_oil", 50),
        Fluid.of("kubejs:petroleum_gas", 75)
    ],  Fluid.of("createdieselgenerators:crude_oil", 100)).heated()
    // 超级加热
    cdg.distillation([
        Fluid.of("kubejs:heavy_oil", 100),
        Fluid.of("kubejs:light_oil", 100),
        Fluid.of("kubejs:petroleum_gas", 150)
    ],  Fluid.of("createdieselgenerators:crude_oil", 100)).superheated()


    // 轻油分馏
    cdg.distillation([
        Fluid.of("createdieselgenerators:diesel", 50), 
        Fluid.of("createdieselgenerators:gasoline", 50)
    ], Fluid.of("kubejs:light_oil", 100)).heated()

    // 轻油裂解
    cdg.distillation([
        Fluid.of("kubejs:petroleum_gas", 75)
    ], Fluid.of("kubejs:light_oil", 100)).superheated()


    // 重油裂解
    cdg.distillation([
        Fluid.of("kubejs:light_oil", 75),
        Fluid.of("kubejs:petroleum_gas", 100)
    ], Fluid.of("kubejs:heavy_oil", 100)).superheated()
})