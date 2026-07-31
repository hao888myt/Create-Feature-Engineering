ServerEvents.recipes(event => {
    let conversions = [
        ["spectrum:topaz_block", "spectrum:budding_topaz"],
        ["spectrum:citrine_block", "spectrum:budding_citrine"],
        ["spectrum:moonstone_block", "spectrum:budding_moonstone"]
    ].forEach(conversion => {
        event.custom(
            {
                "type": "ars_nouveau:budding_conversion",
                "input": conversion[0],
                "result": conversion[1]
            }
        )
    })
})
