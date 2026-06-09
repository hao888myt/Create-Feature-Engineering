ServerEvents.tags("block", event => {
    let ferromagnetic_blocks = [
        "anvilcraft:hollow_magnet_block",
        "anvilcraft:magnet_block",
        "anvilcraft:ferrite_core_magnet_block",

        "create:content_observer"
    ]
    ferromagnetic_blocks.forEach(block => {
        event.add("alexscaves:ferromagnetic_blocks", block)
    })

    // 苍绿催化体
    event.add("minecraft:needs_diamond_tool", "create_feature_engineering:paltaeria_catalyst")
    event.add("minecraft:mineable/pickaxe", "create_feature_engineering:paltaeria_catalyst")

    // 乌龟化石
    event.add("minecraft:needs_stone_tool", "create_feature_engineering:toretoise_fossil")
    event.add("minecraft:mineable/pickaxe", "create_feature_engineering:toretoise_fossil")

    // 钢机壳
    event.add("minecraft:mineable/axe", "create_feature_engineering:steel_casing")
    event.add("minecraft:mineable/pickaxe", "create_feature_engineering:steel_casing")

    var anvils = [
        "minecraft:anvil",
        "minecraft:chipped_anvil",
        "minecraft:damaged_anvil",
        "anvilcraft:royal_anvil",
        "anvilcraft:ember_anvil",
        "anvilcraft:spectral_anvil",
        "spectrum:bedrock_anvil"
    ]

    anvils.forEach(anvil => {
        removeItemsFromTag(event, "alexscaves:ferromagnetic_blocks", anvil)
        removeItemsFromTag(event, "alexscaves:magnetron_weapons", anvil)
    })

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
})
