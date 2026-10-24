EntityEvents.beforeHurt("alexsmobs:laviathan", event => {
    let source = event.getSource()
    if (source == null) return

    let actual = source.getActual()
    if (actual == null) return

    let laviathan = event.getEntity()

    if (source.getType() == "anvil" || source.getType() == "fallingBlock") {
        if (laviathan.getNbt().getByte("Obsidian").toString() == "1" && !laviathan.inWaterOrBubble) {
            let pos = laviathan.getOnPos()
            let block = event.getLevel().getBlock(pos.above(4))
            block.popItem(Item.of("obsidian", randomNum(16, 24)))
            laviathan.mergeNbt("{Obsidian:0b}")
        }
        event.setDamage(0)
        event.cancel()
    }
})
