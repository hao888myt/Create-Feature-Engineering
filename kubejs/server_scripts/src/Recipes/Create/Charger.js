ServerEvents.recipes(event => {
    event.custom({
        "type":"createaddition:charging",
        "input": {
            "item": "minecraft:iron_ingot",
            "count": 1
        },
        "result": {
            "item": "anvilcraft:magnet_ingot",
            "count": 1
        },
        "energy": 16000,
        "maxChargeRate": 200,
    })

    event.custom({
        "type":"createaddition:charging",
        "input": {
            "item": "anvilcraft:capacitor_empty",
            "count": 1
        },
        "result": {
            "item": "anvilcraft:capacitor",
            "count": 1
        },
        "energy": 64000,
        "maxChargeRate": 400,
    })

    event.custom({
        "type":"createaddition:charging",
        "input": {
            "item": "minecraft:iron_block",
            "count": 1
        },
        "result": {
            "item": "anvilcraft:magnet_block",
            "count": 1
        },
        "energy": 144000,
        "maxChargeRate": 400,
    })
})