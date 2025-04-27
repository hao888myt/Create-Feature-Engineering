let $BlockEvent = Java.loadClass("net.minecraftforge.event.level.BlockEvent")

ForgeEvents.onEvent($BlockEvent.FluidPlaceBlockEvent,event=>{
    let block = event.getNewState().getBlock();

    function replaceStone(input, result){
        if (block.id == input){
            event.setNewState(Block.getBlock(result).defaultBlockState());
        }
    }

    replaceStone("minecraft:crying_obsidian","minecraft:deepslate");
})