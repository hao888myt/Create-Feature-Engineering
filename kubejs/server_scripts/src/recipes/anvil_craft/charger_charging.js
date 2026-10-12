ServerEvents.recipes(event => {
    let removes = [
        "anvilcraft:charger_charging/capacitor",
        "anvilcraft:charger_charging/capacitor_empty",

        "anvilcraftextrapower:charger_charging/lead_acid_battery",
        "anvilcraftextrapower:charger_charging/lead_acid_battery_empty",
    ].forEach(recipe => {
        event.remove(recipe)
    })

    event.custom({
        "type": "anvilcraft:charger_charging",
        "ingredient": {
            "item": "anvilcraftextrapower:lead_acid_battery"
        },
        "power": 50,
        "result": {
            "count": 1,
            "id": "anvilcraftextrapower:lead_acid_battery_empty"
        },
        "time": 300
    })

    event.custom({
        "type": "anvilcraft:charger_charging",
        "ingredient": {
            "item": "anvilcraftextrapower:lead_acid_battery_empty"
        },
        "power": -500,
        "result": {
            "count": 1,
            "id": "anvilcraftextrapower:lead_acid_battery"
        },
        "time": 30
    })

    event.custom({
        "type": "anvilcraft:charger_charging",
        "ingredient": {
            "item": "anvilcraft:capacitor"
        },
        "power": 25,
        "result": {
            "count": 1,
            "id": "anvilcraft:capacitor_empty"
        },
        "time": 150
    })

    event.custom({
        "type": "anvilcraft:charger_charging",
        "ingredient": {
            "item": "anvilcraft:capacitor_empty"
        },
        "power": -250,
        "result": {
            "count": 1,
            "id": "anvilcraft:capacitor"
        },
        "time": 15
    })
})
