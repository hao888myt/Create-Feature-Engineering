BlockEvents.rightClicked(event => {
    let block = event.getBlock()
    if (event.hand != "MAIN_HAND" || event.item.id != "minecraft:air") return
    if (block.id != "ars_nouveau:whirlisprig_flower") return

    let player = event.getPlayer()

    if (!player.shiftKeyDown) return

    let block_nbt = block.getEntityData()
    if (block_nbt.contains("ignored__tag")) {
        block_nbt.remove("ignored__tag")
        block.setEntityData(block_nbt)

        player.swing()
        player.tell("已清除过滤")
        event.cancel()
    }
})
