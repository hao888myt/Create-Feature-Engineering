ServerEvents.recipes(event => {
    const vintageimprovements = event.recipes.vintageimprovements
    // 删除树叶振动
    event.remove("vintageimprovements:vibrating/leaves_vibrating")
})