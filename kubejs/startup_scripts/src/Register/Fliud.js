StartupEvents.registry("fluid", event => {
  // 液态数字
  event.create("liquid_number")
    .thinTexture(0xffffff)
    .bucketColor(0xffffff)

  // 灵质
  event.create("ectoplasm")
    .thinTexture(0x85e6ff)
    .bucketColor(0x85e6ff)

  // 熔融青钕合金
  event.create("molten_azure_neodymium")
    .thickTexture(0x163cb8)
    .bucketColor(0x163cb8)

  // 熔融赤钕合金
  event.create("molten_scarlet_neodymium")
    .thickTexture(0xd90f1f)
    .bucketColor(0xd90f1f)

  // 轻油
  event.create("light_oil")
    .thinTexture(0xf9e000)
    .bucketColor(0xf9e000)

  // 重油
  event.create("heavy_oil")
    .thinTexture(0xe59500)
    .bucketColor(0xe59500)

  // 石油气
  event.create("petroleum_gas")
    .thinTexture(0x242121)
    .bucketColor(0x242121)
    .noBlock()
    .gaseous()
    
  // 润滑油
  event.create("lubricant")
    .thinTexture(0x1ec900)
    .bucketColor(0x1ec900)

  // 氧气
  event.create("oxygen")
    .thinTexture(0x90c8ff)
    .bucketColor(0x90c8ff)
    .noBlock()
    .gaseous()
  
  // 氢气
  event.create("hydrogen")
    .thinTexture(0xffffff)
    .bucketColor(0xffffff)
    .noBlock()
    .gaseous()
  
  // 氮气
  event.create("nitrogen")
    .thinTexture(0x909090)
    .bucketColor(0x909090)
    .noBlock()
    .gaseous()
  
  // 氨气
  event.create("ammonia")
    .thinTexture(0x00ff22)
    .bucketColor(0x00ff22)
    .noBlock()
    .gaseous()
  
  // 氯气
  event.create("chlorine")
    .thinTexture(0x00ff55)
    .bucketColor(0x00ff55)
    .noBlock()
    .gaseous()
  
  // 二氧化碳
  event.create("carbon_dioxide")
    .thinTexture(0x888888)
    .bucketColor(0x888888)
    .noBlock()
    .gaseous()
  
  // 一氧化氮
  event.create("nitric_oxide")
    .thinTexture(0xff8888)
    .bucketColor(0xff8888)
    .noBlock()
    .gaseous()
  
  // 二氧化氮
  event.create("nitrogen_dioxide")
    .thinTexture(0xff5500)
    .bucketColor(0xff5500)
    .noBlock()
    .gaseous()
  
  // 盐酸
  event.create("hydrochloric_acid")
    .thinTexture(0x00ffaa)
    .bucketColor(0x00ffaa)
  
  // 硝酸
  event.create("nitric_acid")
    .thinTexture(0xffee00)
    .bucketColor(0xffee00)
})