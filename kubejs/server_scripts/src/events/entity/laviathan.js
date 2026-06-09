EntityEvents.beforeHurt("alexsmobs:laviathan", event => {
    let source = event.getSource()
    if (source == null) return
    // console.log(source.getType())

    let actual = source.getActual()
    if (actual == null) return

    let laviathan = event.getEntity()

    if (laviathan.nbt.getByte("Obsidian").toString() == "0") return
    
    else if (source.getType() == "anvil" || source.getType() == "falling_block")
    {
        if (!laviathan.inWaterOrBubble)
        {
            let pos = laviathan.getOnPos()
            let block = event.getLevel().getBlock(pos.above(3))
            block.popItem(Item.of("obsidian", MathTool.randomNum(8, 12)))
            laviathan.mergeNbt("{Obsidian:0b}")
            laviathan.health += 5
        }
        event.setDamage(0)
        event.cancel()
    }
})
