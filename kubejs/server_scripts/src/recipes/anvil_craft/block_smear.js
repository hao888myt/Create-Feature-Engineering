ServerEvents.recipes(event => {
    event.custom({
        "type": "anvilcraft:block_smear",
        "inputs": [
            {
                "blocks": "spectrum:blazing_crystal"
            },
            {
                "blocks": "create_feature_engineering:stradpole_skeleton"
            }
        ],
        "result": {
            "block": "spectrum:stratine_ore"
        }
    })
})