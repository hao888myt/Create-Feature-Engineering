EntityEvents.death("alexscaves:magnetron", event => {
    const magnetron = event.getEntity()

    const Blockstates = magnetron.nbt.getCompound("Blockstates")
    if (!Blockstates.contains("BlockData")) return
    var BlockData = Blockstates.get("BlockData")
    if (BlockData.size() >= 8 && event.getSource().getType() == "lightningBolt")
    {
        event.getEntity().block.popItem(Item.of("alexscaves:telecore", 3))
    }
})

EntityEvents.hurt("alexscaves:magnetron", event => {
    if (event.getSource().getType() == "lightningBolt")
    {
        event.getEntity().health -= 8
    }
})

BlockEvents.

BlockEvents.placed("alexscaves:heart_of_iron", event => {
    const level = event.getLevel()
    const pos = event.block.getPos()
    
    const megnetron = level.createEntity("alexscaves:magnetron")
    megnetron.setPos(pos.x + 0.5, pos.y, pos.z + 0.5)

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
    
})