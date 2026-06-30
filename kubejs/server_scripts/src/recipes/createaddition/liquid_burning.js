ServerEvents.recipes(event => {
    let removes = [
        "createaddition:liquid_burning/biofuel"
    ].forEach(recipe => {
        event.remove(recipe)
    })

    event.custom({
        "type": "createaddition:liquid_burning",
        "burn_time": 24000,
        "ingredients": [{
            "type": "neoforge:tag",
            "amount": 1000,
            "tag": "c:biogas"
        }],
        "results": [],
        "superheated": true
    })
})