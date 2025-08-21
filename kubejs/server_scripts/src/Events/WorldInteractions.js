ServerEvents.recipes(event => {

    //钻石之心生成宝箱怪
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": "quark:diamond_heart"
        },
        "block_in": "quark:ancient_chest",
        "post": [
            {
                "type": "execute",
                "command": "summon artifacts:mimic"
            },
            {
                "type": "place",
                "block": "*"
            }
        ]
    })

    //禁用神秘宝石点击窥探器
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": "alexscaves:occult_gem"
        },
        "block_in": "alexscaves:beholder",
        "post": [
            {
                "type": "prevent_default"
            }
        ]
    })

    //炸特斯拉球产生闪电
    event.custom({
        "type": "lychee:item_exploding",
        "item_in" : {
            "item": "alexscaves:tesla_bulb"
        },
        "post": [
            {
                "type": "execute",
                "command": "summon minecraft:lightning_bolt"
            }
        ]
    })

    // event.custom({
    //     "type": "lychee:block_exploding",
    //     "block_in": { 
    //         "blocks": ["minecraft:nether_gold_ore"] 
    //     },
    //     "post":[
    //         {
    //             "type": "place",
    //             "block": "betternether:cincinnasite_ore"
    //         },
    //         {
    //             "type": "prevent_default"
    //         }
    //     ]
    // })

    //闪电充能异彩化合物
    // event.remove({ output:"create_dd:overcharge_alloy" })
    // event.custom({
    //     "type": "lychee:lightning_channeling",
    //     "item_in" : {
    //         "item": "create_dd:chromatic_compound"
    //     },
    //     "post": [
    //         {
    //             "type": "drop_item",
    //             "item": "create_dd:overcharge_alloy"
    //         }
    //     ]
    // })

    //闪电转化方铅岩
    event.custom({
        "type": "lychee:lightning_channeling",
        "post": [
            {
                "type": "execute",
                "command": "fill ~-1 ~-2 ~-1 ~1 ~-1 ~1 alexscaves:energized_galena_neutral replace alexscaves:galena"
            }
        ]
    })

    //闪电转化粗铁块
    event.custom({
        "type": "lychee:lightning_channeling",
        "post": [
            {
                "type": "execute",
                "command": "fill ~-1 ~-2 ~-1 ~1 ~-1 ~1 spelunkery:raw_magnetite_block replace minecraft:raw_iron_block"
            }
        ]
    })

    //火烧火花石碎块
    event.custom({
        "type": "lychee:item_burning",
        "item_in": {
            "item": "kubejs:shimmerstone_gem_lump"
        },
        "post": {
            "type": "drop_item",
            "item": "spectrum:shimmerstone_gem"
        }
    })

    //微光转化化合物基质
    // event.custom({
    //     "type": "lychee:item_inside",
    //     "item_in": {
    //         "item": "create_dd:compound_base"
    //     },
    //     "block_in": {
    //         "blocks": ["create_dd:shimmer"]
    //     },
    //     "post": [
    //         {
    //             "type": "drop_item",
    //             "item": "kubejs:unstable_chromatic_compound"
    //         }
    //     ]
    // })

    //微光转化未完成的异彩化合物
    // event.remove("create_dd:mixing/chromatic_compound")
    // event.custom({
    //     "type": "lychee:item_inside",
    //     "item_in": {
    //         "item": "kubejs:incomplete_chromatic_compound"
    //     },
    //     "block_in": {
    //         "blocks": ["create_dd:shimmer"]
    //     },
    //     "post": [
    //         {
    //             "type": "drop_item",
    //             "item": "create_dd:chromatic_compound"
    //         }
    //     ]
    // })

    // event.custom({
    //     "type": "lychee:dripstone_dripping",
    //     "source_block": "water",
    //     "target_block": "sponge",
    //     "post": [
    //         {
    //             "type": "place",
    //             "block": "wet_sponge"
    //         }
    //     ]
    // })
})