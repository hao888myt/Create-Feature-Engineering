ServerEvents.recipes(event =>{
    event.custom(
        {
            "type": "cmr:custom_fan",
            "ingredients": [
              {
                "tag": "forge:cobblestone" //Item to throw
              },
              {
                "item": "minecraft:oak_fence" //Block behind the fan (Optional if fluid present)
              },
              {
                "amount": 1000,
                "fluid": "create:honey", // Fluid (Optional if block present)
                "nbt": {}
              }
            ],
            "results": [
              {
                "item": "minecraft:diamond" //Result Item
              }
            ]
          }
    )
})