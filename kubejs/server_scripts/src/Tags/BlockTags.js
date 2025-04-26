ServerEvents.tags("block", event =>{
    event.add('alexscaves:ferromagnetic_blocks', 'anvilcraft:hollow_magnet_block')
    event.add('alexscaves:ferromagnetic_blocks', 'anvilcraft:magnet_block')
    event.add('alexscaves:ferromagnetic_blocks', 'anvilcraft:ferrite_core_magnet_block')
    event.add('alexscaves:ferromagnetic_blocks', 'quark:magnet')
    
    /**
    * 
    * @param {Internal.TagEventJS} event 
    * @param {ResourceLocation_} tag 
    * @param {[Items_]} excludeItems 
    */
    function removeItemsFromTag(event, tag, excludeItems) {
        let items = event.get(tag).getObjectIds();
        let nonRemoveItems = [];
    
        items.forEach(item => {
            if (!excludeItems.includes(item.toString())) {
                nonRemoveItems.push(item);
          }
        });
    
        event.removeAll(tag);
        nonRemoveItems.forEach(item => {
            event.add(tag, item);
        });
    }

    removeItemsFromTag(event, 'alexscaves:ferromagnetic_blocks', 'minecraft:anvil')
    removeItemsFromTag(event, 'alexscaves:ferromagnetic_blocks', 'minecraft:chipped_anvil')
    removeItemsFromTag(event, 'alexscaves:ferromagnetic_blocks', 'minecraft:damaged_anvil')
    removeItemsFromTag(event, 'alexscaves:ferromagnetic_blocks', 'anvilcraft:royal_anvil')
    removeItemsFromTag(event, 'alexscaves:ferromagnetic_blocks', 'anvilcraft:ember_anvil')
    removeItemsFromTag(event, 'alexscaves:ferromagnetic_blocks', 'anvilcraft:spectral_anvil')
    removeItemsFromTag(event, 'alexscaves:ferromagnetic_blocks', 'spectrum:bedrock_anvil')
})