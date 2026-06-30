ServerEvents.recipes(event => {
    let removes = [
        "createaddition:liquid_burning/biofuel"
    ].forEach(recipe => {
        event.remove(recipe)
    })
})