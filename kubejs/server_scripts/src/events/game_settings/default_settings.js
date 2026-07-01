ServerEvents.loaded(event => {
    const server = event.getServer()
    let persistentData = server.getPersistentData()
    if (persistentData.contains("first_load")) return

    server.persistentData.putBoolean("first_load", true)

    let defaultRules = [
        "doInsomnia false",
        "doTraderSpawning false",
        "doPatrolSpawning false",
        "playersSleepingPercentage 0"
    ]
    defaultRules.forEach(rule => server.runCommandSilent(`gamerule ${rule}`))
    console.log("默认游戏规则设置完成")

    let defaultCarpetRules = [
        "language zh_cn",
        "movableBlockEntities true"
    ]
    defaultCarpetRules.forEach(rule => server.runCommandSilent(`carpet setDefault ${rule}`))
    console.log("默认Carpet规则设置完成")
})
