ServerEvents.recipes(event => {
    event.custom({
        "type": "spectrum:liquid_crystal_converting",
        "required_advancement": "spectrum:unlocks/blocks/liquid_crystal",
        "ingredient": [
            {
                "item": "spectrum:blue_pigment"
            }
        ],
        "result": {     
            "id": "minecraft:lapis_lazuli",
            "count": 2
        }
    })

    event.custom({
        "type": "spectrum:liquid_crystal_converting",
        "required_advancement": "spectrum:unlocks/blocks/liquid_crystal",
        "ingredient": [
            {
                "item": "spectrum:red_pigment"
            }
        ],
        "result": {     
            "id": "minecraft:redstone",
            "count": 2
        }
    })
})