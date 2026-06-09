// priority: 1000
ServerEvents.tags("item", event => {
    event.add("lychee:fire_immune", "spectrum:bedrock_dust")
    event.add("lychee:fire_immune", "spectrum:shimmerstone_gem")

    //添加催化剂标签
    event.add("create_feature_engineering:catalysts", "create_feature_engineering:paltaeria_catalyst")
    event.add("create_feature_engineering:catalysts", "create_feature_engineering:stratine_catalyst")
    event.add("create_feature_engineering:catalysts", "create_feature_engineering:hover_catalyst")
    event.add("create_feature_engineering:catalysts", "create_feature_engineering:gravity_catalyst")

    //添加橡胶标签
    event.add("neoforge:rubber", "create_feature_engineering:rubber")

    //添加树脂标签
    event.add("create_feature_engineering:sap", "anvilcraft:resin")
    event.add("create_feature_engineering:sap", "alexscaves:pewen_sap")

    //添加流体储罐标签
    let tank = [
        "create:fluid_tank", 
        "create_connected:fluid_vessel", 
    ]

    tank.forEach(tank => {
        event.add("create_feature_engineering:fluid_tanks", tank)
    })

    let numbers = [
        "create_feature_engineering:zero",
        "create_feature_engineering:one",
        "create_feature_engineering:two",
        "create_feature_engineering:three",
        "create_feature_engineering:four",
        "create_feature_engineering:five",
        "create_feature_engineering:six",
        "create_feature_engineering:seven",
        "create_feature_engineering:eight",
        "create_feature_engineering:nine"
    ]
    numbers.forEach(number => {
        event.add("create_feature_engineering:numbers", number)
    })

    let unstackable_numbers = [
        "create_feature_engineering:unstackable_zero",
        "create_feature_engineering:unstackable_one",
        "create_feature_engineering:unstackable_two",
        "create_feature_engineering:unstackable_three",
        "create_feature_engineering:unstackable_four",
        "create_feature_engineering:unstackable_five",
        "create_feature_engineering:unstackable_six",
        "create_feature_engineering:unstackable_seven",
        "create_feature_engineering:unstackable_eight",
        "create_feature_engineering:unstackable_nine"
    ]
    unstackable_numbers.forEach(unstackable_number => {
        event.add("create_feature_engineering:unstackable_numbers", unstackable_number)
    })

    let crystal_blocks = [
        "minecraft:amethyst_block", 
        "spectrum:citrine_block", 
        "spectrum:topaz_block", 
        "spectrum:onyx_block", 
        "spectrum:moonstone_block"
    ]
    crystal_blocks.forEach(crystal_block => {
        event.add("create_feature_engineering:crystal_blocks", crystal_block)
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
