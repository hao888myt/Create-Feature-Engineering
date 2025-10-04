StartupEvents.registry("fluid", event => {
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

  // 液态魔源
  event.create("liquid_source")
    .thinTexture(0x8a00ff)
    .bucketColor(0x8a00ff)

  // 轻油
  event.create("light_oil")
    .thinTexture("0xf9e000")
    .bucketColor("0xf9e000")

  // 重油
  event.create("heavy_oil")
    .thinTexture("0xe59500")
    .bucketColor("0xe59500")

  // 液化石油气
  event.create("liquefied_petroleum_gas")
    .thinTexture("0x171515")
    .bucketColor("0x171515")
})