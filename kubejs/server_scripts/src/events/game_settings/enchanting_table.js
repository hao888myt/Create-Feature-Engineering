MoreJS.enchantmentTableChanged(event =>{
    global.EnchantableMachines.forEach((item) => {
        if (event.getItem().id == item) {
            event.get(0).clearClue()
            event.get(1).clearClue()
            event.get(2).clearClue()
        }
    })
})
