ServerEvents.tags("block", event => {
    let ferromagnetic_blocks = [
        "anvilcraft:hollow_magnet_block",
        "anvilcraft:magnet_block",
        "anvilcraft:ferrite_core_magnet_block",
        "quark:magnet",
        "endergetic:boof_block",

        "sophisticatedbackpacks:copper_backpack",
        "sophisticatedbackpacks:iron_backpack",
        "sophisticatedbackpacks:gold_backpack",
        "sophisticatedbackpacks:diamond_backpack",
        "sophisticatedbackpacks:netherite_backpack",

        "functionalstorage:fluid_1",
        "functionalstorage:fluid_2",
        "functionalstorage:fluid_4",
        "functionalstorage:compacting_framed_drawer", 
        "functionalstorage:framed_simple_compacting_drawer",
        "functionalstorage:framed_1", 
        "functionalstorage:framed_2", 
        "functionalstorage:framed_4", 
        "functionalstorage:simple_compacting_drawer",
        "functionalstorage:compacting_drawer",

        "create:content_observer"
    ]
    ferromagnetic_blocks.forEach(block => {
        event.add("alexscaves:ferromagnetic_blocks", block)
    })

    let drawers = [
        "functionalstorage:oak_1",
        "functionalstorage:spruce_1",
        "functionalstorage:birch_1",
        "functionalstorage:jungle_1",
        "functionalstorage:acacia_1",
        "functionalstorage:dark_oak_1",
        "functionalstorage:crimson_1",
        "functionalstorage:warped_1",
        "functionalstorage:mangrove_1",
        "functionalstorage:cherry_1",
        "functionalstorage:framed_1",
        "functionalstorage:fluid_1",

        "functionalstorage:oak_2",
        "functionalstorage:spruce_2",
        "functionalstorage:birch_2",
        "functionalstorage:jungle_2",
        "functionalstorage:acacia_2",
        "functionalstorage:dark_oak_2",
        "functionalstorage:crimson_2",
        "functionalstorage:warped_2",
        "functionalstorage:mangrove_2",
        "functionalstorage:cherry_2",
        "functionalstorage:framed_2",
        "functionalstorage:fluid_2",

        "functionalstorage:oak_4",
        "functionalstorage:spruce_4",
        "functionalstorage:birch_4",
        "functionalstorage:jungle_4",
        "functionalstorage:acacia_4",
        "functionalstorage:dark_oak_4",
        "functionalstorage:crimson_4",
        "functionalstorage:warped_4",
        "functionalstorage:mangrove_4",
        "functionalstorage:cherry_4",
        "functionalstorage:framed_4",
        "functionalstorage:fluid_4",

        "functionalstorage:compacting_drawer",
        "functionalstorage:compacting_framed_drawer",
        "functionalstorage:simple_compacting_drawer",
        "functionalstorage:framed_simple_compacting_drawer",
        "functionalstorage:armory_cabinet",
        "functionalstorage:ender_drawer",
    ]
    drawers.forEach(drawer => {
        event.add("kubejs:drawer", drawer)
    })

    // 苍绿催化体
    event.add("minecraft:needs_diamond_tool", "kubejs:paltaeria_catalyst")
    event.add("minecraft:mineable/pickaxe", "kubejs:paltaeria_catalyst")

    // 乌龟化石
    event.add("minecraft:needs_stone_tool", "kubejs:toretoise_fossil")
    event.add("minecraft:mineable/pickaxe", "kubejs:toretoise_fossil")

    // 各种深板岩矿
    event.add("c:deepslate_metal", "createnuclear:deepslate_lead_ore") // 原子核动的铅矿
    event.add("c:deepslate_metal", "createnuclear:deepslate_uranium_ore") // 原子核动的铀矿
    event.add("c:deepslate_metal", "create:deepslate_zinc_ore") // 机械动力的锌矿

    // 钢机壳
    event.add("minecraft:mineable/axe", "kubejs:steel_casing")
    event.add("minecraft:mineable/pickaxe", "kubejs:steel_casing")

    //防龙Tag
    event.add("minecraft:dragon_immune", "endergetic:boof_block") //浮跃块

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