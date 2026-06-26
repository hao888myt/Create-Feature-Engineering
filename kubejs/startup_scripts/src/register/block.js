StartupEvents.registry("block", event => {
    event.create(`${global.ModPackId}:paltaeria_ore_catalyst`).hardness(5.0).stoneSoundType() // 苍绿催生体
    
    event.create(`${global.ModPackId}:stradpole_skeleton`).hardness(3.0).stoneSoundType() // 跨座蝌蚪遗骸

    global.Materials.forEach((material) => {
        material.types.forEach((type) => {
            switch (type) {
                case MaterialType.STORAGE:
                    event.create(`${global.ModPackId}:${material.id}_block`)
                        .tag(`c:storage_blocks`)
                        .tag(`c:storage_blocks/${material.id}`)
                    break
            }
        })
    })
})
