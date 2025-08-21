let $BlockEvent = Java.loadClass("net.minecraftforge.event.level.BlockEvent")

ForgeEvents.onEvent($BlockEvent.FluidPlaceBlockEvent,event=>{
    let block = event.getNewState().getBlock();
    if (block.id == "minecraft:cobblestone" || block.id == "minecraft:stone") {
        let level = event.getLevel()
        if (level.getBlock(event.getLiquidPos().below()).id == "minecraft:bedrock" || level.getBlock(event.getLiquidPos().below()).id == "spectrum:bedrock_storage_block") {
            let randomResult = randomNum(0, 3)
            let newState = Blocks.COBBLESTONE.defaultBlockState()
            switch (randomResult) {
                case 0:
                    newState = Block.getBlock("minecraft:andesite").defaultBlockState()
                    break
                case 1:
                    newState = Block.getBlock("minecraft:tuff").defaultBlockState()
                    break
                case 2:
                    newState = Block.getBlock("minecraft:diorite").defaultBlockState()
                    break
                case 3:
                    newState = Block.getBlock("minecraft:granite").defaultBlockState()
                    break
            }
            event.setNewState(newState)
        }
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