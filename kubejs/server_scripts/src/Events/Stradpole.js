EntityEvents.death("alexsmobs:stradpole", event =>{
    if (event.getSource().getType() != "anvil") return
    const stradpole = event.entity
    const level = stradpole.level
    const pos = stradpole.getOnPos()
    console.log(`Stradpole at ${pos} was killed by an anvil!`)
    var block_below = level.getBlock(pos.below(0))
    if (block_below.id != "minecraft:netherrack") return
    level.setBlockAndUpdate(pos.below(0), Block.getBlock("kubejs:stradpole_skeleton").defaultBlockState())
})