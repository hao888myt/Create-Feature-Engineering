StartupEvents.registry("item", event => {

    // 批量注册构件
    global.MechanismTypes.forEach((mechanism) => {
        event.create(`${global.ModPackId}:${mechanism}_mechanism`)
            .texture(`${global.ModPackId}:item/mechanism/complete/${mechanism}`)
        event.create(`${global.ModPackId}:incomplete_${mechanism}_mechanism`)
            .texture(`${global.ModPackId}:item/mechanism/incomplete/${mechanism}`)
    })

    global.Materials.forEach((material) => {
        material.types.forEach((type) => {
            switch (type) {
                case MaterialType.BLOCK:
                    event.create(`${global.ModPackId}:${material.id}_block`)
                    break
                case MaterialType.INGOT:
                    event.create(`${global.ModPackId}:${material.id}_ingot`)
                    break
                case MaterialType.NUGGET:
                    event.create(`${global.ModPackId}:${material.id}_nugget`)
                    break
                case MaterialType.SHEET:
                    event.create(`${global.ModPackId}:${material.id}_sheet`)
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
        .unstackable()
    })

    numbers.forEach((number) => {
        event.create(`${global.ModPackId}:${number}`)
        .rarity("uncommon")
    })

    global.IncompletedItems.forEach(item => {
        event.create(`${global.ModPackId}:incomplete_${item.id}`, "create:sequenced_assembly")
    })
})
