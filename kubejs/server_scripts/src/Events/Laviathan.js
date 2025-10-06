EntityEvents.hurt("alexsmobs:laviathan", event => {
    const source = event.getSource()
    if (source == null) return
    const actual = source.getActual()
    if (actual == null) return

    const laviathan = event.getEntity()

    if (laviathan.nbt.getByte("Obsidian").toString() == "0") return
    
    else if (source.getType() == "anvil")
    {
        if (!laviathan.inWaterOrBubble)
        {
            const pos = laviathan.getOnPos()
            const block = event.getLevel().getBlock(pos.above(3))
            block.popItem(Item.of("obsidian", randomNum(8, 12)))
            laviathan.mergeNbt("{Obsidian:0b}")
            laviathan.health += 5
        }
        event.cancel()
    }
})

function randomNum(minNum, maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random() * minNum + 1, 10)
        case 2:    
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
        default: 
            return 0;
    } 
}  
