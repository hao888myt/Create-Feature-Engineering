ForgeEvents.onEvent('net.minecraftforge.event.AnvilUpdateEvent', event => {
    let item1 = event.getLeft()
    let item2 = event.getRight()
    
    if (item2.getItem().id == 'minecraft:enchanted_book') {
        global.EnchantableMachines.forEach((item) => {
            if (item1.getItem().id == item) {
                event.setOutput(Item.of('create_enchantment_industry:enchanting_guide', "{RepairCost:0,display:{Lore:['{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"text\":\"Maybe you should try it.\"}],\"text\":\"\"}']}}"))
            }
        })
    }
})