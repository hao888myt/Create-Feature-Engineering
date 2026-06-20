StartupEvents.registry("block", event => {
    event.create(`${global.ModPackId}:paltaeria_ore_catalyst`).hardness(5.0).stoneSoundType() // 苍绿催生体
    
    event.create(`${global.ModPackId}:stradpole_skeleton`).hardness(3.0).stoneSoundType() // 跨座蝌蚪遗骸
})
