ServerEvents.tags("block", event => {
    let ferromagnetic_blocks = [
        'anvilcraft:hollow_magnet_block',
        'anvilcraft:magnet_block',
        'anvilcraft:ferrite_core_magnet_block',
        'quark:magnet',
        'endergetic:boof_block',

        'sophisticatedbackpacks:copper_backpack',
        'sophisticatedbackpacks:iron_backpack',
        'sophisticatedbackpacks:gold_backpack',
        'sophisticatedbackpacks:diamond_backpack',
        'sophisticatedbackpacks:netherite_backpack',

        "sophisticatedstorage:copper_barrel",
        "sophisticatedstorage:limited_copper_barrel_1",
        "sophisticatedstorage:limited_copper_barrel_2",
        "sophisticatedstorage:limited_copper_barrel_3",
        "sophisticatedstorage:limited_copper_barrel_4",
        "sophisticatedstorage:iron_barrel",
        "sophisticatedstorage:limited_iron_barrel_1",
        "sophisticatedstorage:limited_iron_barrel_2",
        "sophisticatedstorage:limited_iron_barrel_3",
        "sophisticatedstorage:limited_iron_barrel_4",
        "sophisticatedstorage:gold_barrel",
        "sophisticatedstorage:limited_gold_barrel_1",
        "sophisticatedstorage:limited_gold_barrel_2",
        "sophisticatedstorage:limited_gold_barrel_3",
        "sophisticatedstorage:limited_gold_barrel_4",
        "sophisticatedstorage:diamond_barrel",
        "sophisticatedstorage:limited_diamond_barrel_1",
        "sophisticatedstorage:limited_diamond_barrel_2",
        "sophisticatedstorage:limited_diamond_barrel_3",
        "sophisticatedstorage:limited_diamond_barrel_4",
        "sophisticatedstorage:netherite_barrel",
        "sophisticatedstorage:limited_netherite_barrel_1",
        "sophisticatedstorage:limited_netherite_barrel_2",
        "sophisticatedstorage:limited_netherite_barrel_3",
        "sophisticatedstorage:limited_netherite_barrel_4",

        'functionalstorage:fluid_1',
        'functionalstorage:fluid_2',
        'functionalstorage:fluid_4',
        'functionalstorage:compacting_framed_drawer', 
        'functionalstorage:framed_simple_compacting_drawer',
        'functionalstorage:framed_1', 
        'functionalstorage:framed_2', 
        'functionalstorage:framed_4', 
        'functionalstorage:simple_compacting_drawer',
        'functionalstorage:compacting_drawer'
    ]
    ferromagnetic_blocks.forEach(block => {
        event.add('alexscaves:ferromagnetic_blocks', block)
    })

    // 苍绿催化体
    event.add('minecraft:needs_diamond_tool', 'kubejs:paltaeria_catalyst')
    event.add('minecraft:mineable/pickaxe', 'kubejs:paltaeria_catalyst')

    // 乌龟化石
    event.add('minecraft:needs_stone_tool', 'kubejs:toretoise_fossil')
    event.add('minecraft:mineable/pickaxe', 'kubejs:toretoise_fossil')

    // 各种深板岩矿
    event.add("c:deepslate_metal", "createnuclear:deepslate_lead_ore") // 原子核动的铅矿
    event.add("c:deepslate_metal", "createnuclear:deepslate_uranium_ore") // 原子核动的铀矿
    event.add("c:deepslate_metal", "create:deepslate_zinc_ore") // 机械动力的锌矿

    //防龙Tag
    event.add("minecraft:dragon_immune", "endergetic:boof_block") //浮跃块

    removeItemsFromTag(event, 'alexscaves:ferromagnetic_blocks', 'minecraft:anvil')
    removeItemsFromTag(event, 'alexscaves:ferromagnetic_blocks', 'minecraft:chipped_anvil')
    removeItemsFromTag(event, 'alexscaves:ferromagnetic_blocks', 'minecraft:damaged_anvil')
    removeItemsFromTag(event, 'alexscaves:ferromagnetic_blocks', 'anvilcraft:royal_anvil')
    removeItemsFromTag(event, 'alexscaves:ferromagnetic_blocks', 'anvilcraft:ember_anvil')
    removeItemsFromTag(event, 'alexscaves:ferromagnetic_blocks', 'anvilcraft:spectral_anvil')
    removeItemsFromTag(event, 'alexscaves:ferromagnetic_blocks', 'spectrum:bedrock_anvil')

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