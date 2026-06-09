BlockEvents.rightClicked(event => {
    const drawer = event.getBlock()
    if (!drawer.hasTag("storagedrawers:drawers") || event.hand != "MAIN_HAND") return

    const player = event.getPlayer()

    if(!event.item.hasTag("c:tools/wrench")) return
    if(player.shiftKeyDown) return

    const pos = event.block.pos
    const drawerNbt = drawer.getEntityData()
    drawerNbt.contains("Lock") ? drawerNbt.remove("Lock") : drawerNbt.putByte("Lock", 3)
    drawer.setEntityData(drawerNbt)

    player.swing()
    
    event.cancel()
})
