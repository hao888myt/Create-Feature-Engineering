ServerEvents.recipes(event => {
    let vintageimprovements = event.recipes.vintageimprovements

    let removes = [
        "vintageimprovements:grinder_polishing/rose_quartz"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    vintageimprovements.polishing("create:polished_rose_quartz", "create:rose_quartz")
        .speedLimits(0)
        .processingTime(20)
})