ItemEvents.rightClicked("create_fantasizing:block_placer", event => {
    let player = event.getPlayer()
    let nbt = player.persistentData

    if (player.isShiftKeyDown()) return

    if (!nbt.contains(`${global.ModPackId}:block_placer_size`)) {
        nbt.putInt(`${global.ModPackId}:block_placer_size`, 4)
    }
    let max_size = nbt.getInt(`${global.ModPackId}:block_placer_size`)

    if (player.isCreative()) return

    let components = event.getItem().getComponentMap()

    let shaper_tool = components.get("create_fantasizing:shaper_tool")

    switch(shaper_tool){
        case "fill":
            return
        case "overlay":
            return
    }

    let current_size = components.get("create:shaper_brush_params")
    let shaper_brush = components.get("create_fantasizing:shaper_brush")

    let { x, y, z } = current_size
    let size = [0, 0, 0]

    switch (shaper_brush) {
        case "cuboid":
            size = [x, y, z]
            break
        case "sphere":
            size = [x]
            break
        case "cylinder":
            size = [x, y]
            break
        case "surface":
            size = [x]
            break
        case "cluster":
            size = [x]
            break
    }

    size.forEach(i => {
        if (i > max_size) {
            player.tell(`当前可用的最大尺寸是${max_size}!`)
            event.cancel()
        }
    })
})

