StartupEvents.registry("item", event => {
    global.Materials.forEach((material) => {
        material.types.forEach((type) => {
            switch (type) {
                case MaterialType.INGOT:
                    event.create(`${global.ModPackId}:${material.id}_ingot`)
                        .texture(`${global.ModPackId}:item/materials/ingot`)
                        .color(0, material.color)
                        .tag(`c:ingots`)
                        .tag(`c:ingots/${material.id}`)
                    break
                case MaterialType.NUGGET:
                    event.create(`${global.ModPackId}:${material.id}_nugget`)
                        .texture(`${global.ModPackId}:item/materials/nugget`)
                        .color(0, material.color)
                        .tag(`c:nuggets`)
                        .tag(`c:nuggets/${material.id}`)
                    break
                case MaterialType.SHEET:
                    event.create(`${global.ModPackId}:${material.id}_sheet`)
                        .texture(`${global.ModPackId}:item/materials/sheet`)
                        .color(0, material.color)
                        .tag(`c:plates`)
                        .tag(`c:plates/${material.id}`)
                    break
            }
        })
    })

    global.BasicItems.forEach(item => {
        event.create(`${global.ModPackId}:${item.id}`)
    })

    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    numbers.forEach((number) => {
        event.create(`${global.ModPackId}:unstackable_${number}`)
            .rarity("uncommon")
            .tag(`${global.ModPackId}:unstackable_numbers`)
            .unstackable()
    })

    numbers.forEach((number) => {
        event.create(`${global.ModPackId}:${number}`)
            .tag(`${global.ModPackId}:numbers`)
            .rarity("uncommon")
    })

    global.IncompletedItems.forEach(item => {
        event.create(`${global.ModPackId}:incomplete_${item.id}`, "create:sequenced_assembly")
    })
})

CDGEvents.molds(event => {
    global.Molds.forEach(mold => {
        event.create(mold.id, mold.zh_cn)
    })
})
