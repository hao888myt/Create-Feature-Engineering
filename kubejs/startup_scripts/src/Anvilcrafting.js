ForgeEvents.onEvent('net.minecraftforge.event.AnvilUpdateEvent', event => {
    let item1 = event.getLeft()
    let item2 = event.getRight()

    let blacklist = [
        'create:encased_fan', 
        'create:millstone', 
        'create:crushing_wheel', 
        'create:mechanical_press', 
        'create:mechanical_mixer', 
        'create:spout', 
        'create:mechanical_roller', 
        'create:mechanical_saw', 
        'create:mechanical_plough',
        'create:mechanical_drill'
    ]

    for (let i = 0; i < blacklist.length; i++){
        let current = blacklist[i]
        if (item1.getItem().id == current){
            if (item2.getItem().id == 'minecraft:enchanted_book') {
                event.setOutput(Item.of('create_enchantment_industry:enchanting_guide', "{RepairCost:0,display:{Lore:['{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"text\":\"Maybe you should try it.\"}],\"text\":\"\"}']}}"))
                break
            }
        }
    }
})