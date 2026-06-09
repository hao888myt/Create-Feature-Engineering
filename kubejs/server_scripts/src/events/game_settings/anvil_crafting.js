NativeEvents.onEvent(Java.loadClass("net.neoforged.neoforge.event.AnvilUpdateEvent"), event => {
    let item1 = event.getLeft()
    let item2 = event.getRight()

    if (item2.getItem().id == 'minecraft:enchanted_book') {
        global.EnchantableMachines.forEach((item) => {
            if (item1.getItem().id == item) {
                event.setOutput("create_enchantment_industry:blaze_forger[custom_name=\"试试烈焰人锻造室？\"]")
            }
        })
    }
})
