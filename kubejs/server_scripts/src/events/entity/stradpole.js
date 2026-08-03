EntityEvents.death("alexsmobsup:stradpole", event =>{
    let type = event.getSource().getType()
    if (type != "anvil" && type != "fallingBlock") return
    let stradpole = event.entity
    let level = stradpole.level
    let pos = stradpole.getOnPos()
    let block_below = level.getBlock(pos.below(0))
    if (block_below.id != "minecraft:netherrack" && block_below.id != "anvilcraft:nether_dust") return
    level.setBlockAndUpdate(pos.below(0), Block.getBlock("create_feature_engineering:stradpole_skeleton").defaultBlockState())
})
