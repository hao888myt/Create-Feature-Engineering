let $Boolean = Java.loadClass("java.lang.Boolean")
BlockEvents.rightClicked(event => {
    const drawer = event.getBlock()
    if (!drawer.hasTag("kubejs:drawer") || event.hand != "MAIN_HAND") return

    const player = event.getPlayer()

    if(!event.item.hasTag("forge:tools/wrench")) return
    if(player.shiftKeyDown) return

    const pos = event.block.pos
    const drawerState = drawer.getBlockState()
    const locked = drawerState.getValue(BlockProperties["LOCKED"])

    event.level.setBlockAndUpdate(pos, drawerState.setValue(BlockProperties["LOCKED"], locked ? $Boolean.FALSE : $Boolean.TRUE))
    event.cancel()
})