StartupEvents.registry("fluid", event => {
    global.BasicFluids.forEach(fluid => {
        event.create(`${global.ModPackId}:${fluid.id}`, fluid.type)
            .tint(fluid.color)
            .bucketItem.containerItem('minecraft:bucket')
    })

    global.Materials.forEach(material => {
        material.types.forEach((type) => {
            switch (type) {
                case MaterialType.MOLTEN:
                    event.create(`${global.ModPackId}:molten_${material.id}`, "thick")
                        .tint(material.color)
                        .bucketItem.containerItem('minecraft:bucket')
                    break
            }
        })
    })
})