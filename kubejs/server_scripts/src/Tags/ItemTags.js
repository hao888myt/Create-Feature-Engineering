ServerEvents.tags('item', event => {
    event.add('forge:ores_in_ground/deepslate', 'anvilcraft:deepslate_zinc_ore')
    event.add('forge:ores_in_ground/deepslate', 'anvilcraft:deepslate_tin_ore')
    event.add('lychee:fire_immune', 'spectrum:bedrock_dust')
    event.add('lychee:fire_immune', 'spectrum:shimmerstone_gem')

    //添加催化剂标签
    event.add('kubejs:catalysts', 'kubejs:paltaeria_catalyst')
    event.add('kubejs:catalysts', 'kubejs:stratine_catalyst')
    event.add('kubejs:catalysts', 'kubejs:hover_catalyst')
    event.add('kubejs:catalysts', 'kubejs:gravity_catalyst')

    //添加橡胶标签
    event.add('forge:rubber', 'kubejs:rubber')

    //添加树脂标签
    event.add('kubejs:sap', 'anvilcraft:resin')
    event.add('kubejs:sap', 'alexscaves:pewen_sap')

    //添加流体储罐标签
    let tank = [
        "create:fluid_tank", 
        "create_connected:fluid_vessel", 
        "createfluidstuffs:multi_fluid_tank", 
        "railways:fuel_tank", 
        "createenderlink:ender_tank"
    ]

    tank.forEach(tank => {
        event.add("kubejs:fluid_tanks", tank)
    })

    let numbers = [
        "kubejs:zero",
        "kubejs:one",
        "kubejs:two",
        "kubejs:three",
        "kubejs:four",
        "kubejs:five",
        "kubejs:six",
        "kubejs:seven",
        "kubejs:eight",
        "kubejs:nine"
    ]
    numbers.forEach(number => {
        event.add("kubejs:numbers", number)
    })

    let unstackable_numbers = [
        "kubejs:unstackable_zero",
        "kubejs:unstackable_one",
        "kubejs:unstackable_two",
        "kubejs:unstackable_three",
        "kubejs:unstackable_four",
        "kubejs:unstackable_five",
        "kubejs:unstackable_six",
        "kubejs:unstackable_seven",
        "kubejs:unstackable_eight",
        "kubejs:unstackable_nine"
    ]
    unstackable_numbers.forEach(unstackable_number => {
        event.add("kubejs:unstackable_numbers", unstackable_number)
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