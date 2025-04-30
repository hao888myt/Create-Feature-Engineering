MoreJSEvents.enchantmentTableChanged(event =>{
    global.EnchantableMachines.forEach((item) => {
        if (event.getItem().id == item) {
            event.get(0).clearEnchantments()
            event.get(1).clearEnchantments()
            event.get(2).clearEnchantments()
        }
    })
})