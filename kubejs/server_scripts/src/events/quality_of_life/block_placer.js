let $TriState = Java.loadClass("net.neoforged.neoforge.common.util.TriState")

// 创造无冷却
ItemEvents.rightClicked("create_fantasizing:block_placer", event => {
    let player = event.getPlayer()

    if (!player.isCreative()) return

    player.getServer().scheduleInTicks(1, () => {
        player.cooldowns.removeCooldown("create_fantasizing:block_placer")
    })
})

// 方块放置器右键不会与方块交互
NativeEvents.onEvent(Java.loadClass("net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$RightClickBlock"), event => {
    if(event.getItemStack().getItem().toString() != "create_fantasizing:block_placer") return
    event.setUseItem($TriState.TRUE)
    event.setUseBlock($TriState.FALSE)
})
