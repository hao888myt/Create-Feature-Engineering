EntityEvents.death("alexsmobsup:stradpole", event =>{
    let type = event.getSource().getType()
    if (type != "anvil" && type != "fallingBlock") return
    let stradpole = event.entity
    let level = stradpole.level
    let pos = stradpole.getOnPos()
    let has_transformed = false
    for (let y = 0; y <= 1; y++) {
        for (let x = -1; x<= 1; x++) {
            for (let z = -1; z<= 1; z++) {
                if (has_transformed) return
                let current_pos = pos.below(y).west(x).north(z)
                let block_below = level.getBlock(current_pos)
                if (block_below.id != "minecraft:netherrack" && block_below.id != "anvilcraft:nether_dust") continue
                level.setBlockAndUpdate(current_pos, Block.getBlock("create_feature_engineering:stradpole_skeleton").defaultBlockState())
                has_transformed = true
            }
        }
    }
})
