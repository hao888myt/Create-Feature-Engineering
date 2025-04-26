LootJS.modifiers(lootJS =>{
    lootJS.addBlockLootModifier('netherexp:soul_ruby_ore').replaceLoot('rubinated_nether:molten_ruby_ore', 'netherexp:soul_ruby_ore')
})

// ServerEvents.blockLootTables(event =>{
//     event.modifyBlock('spectrum:storm_stone', loot=>{
//         loot.addPool(pool=>{
//             pool.addItem('spectrum:storm_stone')
//         })
//     })
// })