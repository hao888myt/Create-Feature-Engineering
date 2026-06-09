EntityEvents.death("alexscaves:magnetron", event => {
    let magnetron = event.getEntity()

    let Blockstates = magnetron.nbt.getCompound("Blockstates")
    if (!Blockstates.contains("BlockData")) return
    var BlockData = Blockstates.get("BlockData")
    if (BlockData.size() >= 8 && event.getSource().getType() == "lightningBolt")
    {
        event.getEntity().block.popItem(Item.of("alexscaves:telecore", MathTool.randomNum(2, 4)))
    }
})

NativeEvents.onEvent(Java.loadClass("net.neoforged.neoforge.event.level.BlockEvent$NeighborNotifyEvent"), event => {
    let level = event.getLevel()
    let pos = event.getPos()
    let blockstate = level.getBlockState(pos)
    let megnetron = level.createEntity("alexscaves:magnetron")
    megnetron.setPos(pos.getX() + 0.5, pos.getY(), pos.getZ() + 0.5)

    if (blockstate.getBlock().id == "alexscaves:heart_of_iron")
    {
        if (level.getBlockState(pos.south()).getBlock().id == "alexscaves:block_of_scarlet_neodymium" && level.getBlockState(pos.north()).getBlock().id == "alexscaves:block_of_azure_neodymium")
        {
            level.destroyBlock(pos, false)
            level.destroyBlock(pos.south(), false)
            level.destroyBlock(pos.north(), false)
            megnetron.spawn()
        }
        else if (level.getBlockState(pos.north()).getBlock().id == "alexscaves:block_of_scarlet_neodymium" && level.getBlockState(pos.south()).getBlock().id == "alexscaves:block_of_azure_neodymium")
        {
            level.destroyBlock(pos, false)
            level.destroyBlock(pos.south(), false)
            level.destroyBlock(pos.north(), false)
            megnetron.spawn()
        }
        else if (level.getBlockState(pos.east()).getBlock().id == "alexscaves:block_of_scarlet_neodymium" && level.getBlockState(pos.west()).getBlock().id == "alexscaves:block_of_azure_neodymium")
        {
            level.destroyBlock(pos, false)
            level.destroyBlock(pos.east(), false)
            level.destroyBlock(pos.west(), false)
            megnetron.spawn()
        }
        else if (level.getBlockState(pos.west()).getBlock().id == "alexscaves:block_of_scarlet_neodymium" && level.getBlockState(pos.east()).getBlock().id == "alexscaves:block_of_azure_neodymium")
        {
            level.destroyBlock(pos, false)
            level.destroyBlock(pos.east(), false)
            level.destroyBlock(pos.west(), false)
            megnetron.spawn()
        }
    }
})
