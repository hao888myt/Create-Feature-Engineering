ServerEvents.recipes(event => {
    let cdg = event.recipes.createdieselgenerators

    let removes = [
        "createdieselgenerators:distillation/superheated_crude_oil",
        "createdieselgenerators:distillation/crude_oil"
    ].forEach(reicpe => {
        event.remove(reicpe)
    })

    // 原油分馏
    // 加热
    cdg.distillation([
        Fluid.of("create_feature_engineering:heavy_oil", 50),
        Fluid.of("create_feature_engineering:light_oil", 50),
        Fluid.of("create_feature_engineering:petroleum_gas", 75)
    ],  Fluid.of("createdieselgenerators:crude_oil", 100)).heated()
    // 超级加热
    cdg.distillation([
        Fluid.of("create_feature_engineering:heavy_oil", 100),
        Fluid.of("create_feature_engineering:light_oil", 100),
        Fluid.of("create_feature_engineering:petroleum_gas", 150)
    ],  Fluid.of("createdieselgenerators:crude_oil", 100)).superheated()


    // 轻油分馏
    cdg.distillation([
        Fluid.of("createdieselgenerators:diesel", 50), 
        Fluid.of("createdieselgenerators:gasoline", 50)
    ], Fluid.of("create_feature_engineering:light_oil", 100)).heated()

    // 轻油裂解
    cdg.distillation([
        Fluid.of("create_feature_engineering:petroleum_gas", 75)
    ], Fluid.of("create_feature_engineering:light_oil", 100)).superheated()


    // 重油裂解
    cdg.distillation([
        Fluid.of("create_feature_engineering:light_oil", 75),
        Fluid.of("create_feature_engineering:petroleum_gas", 100)
    ], Fluid.of("create_feature_engineering:heavy_oil", 100)).superheated()
})
