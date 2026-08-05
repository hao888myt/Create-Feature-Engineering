let $BlockEvent$FluidPlaceBlockEvent = Java.loadClass("net.neoforged.neoforge.event.level.BlockEvent$FluidPlaceBlockEvent")
NativeEvents.onEvent($BlockEvent$FluidPlaceBlockEvent, event => {
    let block = event.getNewState().getBlock()
    if (block.id == "minecraft:cobblestone" || block.id == "minecraft:stone") {
        let level = event.getLevel()
        let liqiud_pos = event.getLiquidPos()
        let directions = [
            Direction.UP,      // 上 (Y+)
            Direction.DOWN,    // 下 (Y-)
            Direction.SOUTH,   // 南 (Z+)
            Direction.NORTH,   // 北 (Z-)
            Direction.EAST,    // 东 (X+)
            Direction.WEST,    // 西 (X-)
        ]

        let new_state = "minecraft:blackstone"

        for (let i = 0; i < directions.length; i++) {
            switch (level.getBlock(liqiud_pos.relative(directions[i])).id) {
                case "minecraft:tuff":
                    new_state = "minecraft:tuff"
                    break
                case "minecraft:diorite":
                    new_state = "minecraft:diorite"
                    break
                case "minecraft:andesite":
                    new_state = "minecraft:andesite"
                    break
                case "minecraft:granite":
                    new_state = "minecraft:granite"
                    break
            }
            if (new_state != "minecraft:blackstone") {
                event.setNewState(Block.getBlock(new_state).defaultBlockState())
                break
            }
        }
    }
})
