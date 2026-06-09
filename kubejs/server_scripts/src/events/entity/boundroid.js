MEJSEvents.entityCollision(event => {
    if(event.getEntityType() != "entity.alexscaves.boundroid") return

    let boundroid = event.getEntity()
    if (boundroid.onGround() && boundroid.deltaMovement.x != 0 && boundroid.deltaMovement.z != 0) {
        let level = boundroid.level
        let pos = boundroid.blockPosition()
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                let checkPos = pos.offset(i, -1, j)
                if (level.getBlockState(checkPos).getBlock() == Block.getBlock("minecraft:iron_block")) {
                    level.setBlockAndUpdate(checkPos, Block.getBlock("anvilcraft:magnet_block").defaultBlockState())
                }
            }
        }
    }
})
