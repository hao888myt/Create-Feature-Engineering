EntityEvents.death("alexsmobs:stradpole", event =>{
    if (event.getSource().getType() != "anvil") return
    let stradpole = event.entity
    let level = stradpole.level
    let pos = stradpole.getOnPos()
    let block_below = level.getBlock(pos.below(0))
    if (block_below.id != "minecraft:netherrack") return
    level.setBlockAndUpdate(pos.below(0), Block.getBlock("create_feature_engineering:stradpole_skeleton").defaultBlockState())
})
