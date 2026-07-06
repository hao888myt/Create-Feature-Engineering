// const { $CompoundTag } = require("@package/net/minecraft/nbt")

BlockEvents.rightClicked(event => {
    let drawer = event.getBlock()
    if (!drawer.hasTag("storagedrawers:drawers") || event.hand != "MAIN_HAND") return

    let player = event.getPlayer()

    if (!event.item.hasTag("c:tools/wrench")) return
    if (player.shiftKeyDown) return

    let pos = event.block.pos
    let drawer_nbt = drawer.getEntityData()
    drawer_nbt.contains("Lock") ? drawer_nbt.remove("Lock") : drawer_nbt.putByte("Lock", 3)
    drawer.setEntityData(drawer_nbt)

    if (drawer_nbt.contains("Drawers")) {
        let drawers = drawer_nbt.get("Drawers")

        for (let i = 0; i < drawers.length; i++) {
            if (drawers[i].contains("Count")) {
                if (drawers[i].getInt("Count") == 0) {
                    drawer_nbt.Drawers[i].remove("Item")
                    drawer_nbt.Drawers[i].remove("Count")
                }
            }
        }

        if (drawers instanceof $CompoundTag) {
            if (drawers.Count == 0) {
                drawer_nbt.Drawers.Items = []
            }
        }
    }

    if (drawer_nbt.contains("tanks")) {
        /** @type {[$CompoundTag]} */
        let tanks = drawer_nbt.get("tanks")

        for (let i = 0; i < tanks.length; i++) {
            if (tanks[i].contains("cache") && !tanks[i].contains("Fluid")) {
                drawer_nbt.tanks[i].cache.remove("id")
                drawer_nbt.tanks[i].cache.remove("amount")
            }
        }
    }

    drawer.setEntityData(drawer_nbt)

    player.swing()

    event.cancel()
})

BlockEvents.placed(event => {
    let drawer = event.getBlock()
    if (!drawer.hasTag("storagedrawers:drawers")) return

    if (!event.getPlayer().getOffHandItem().hasTag("c:tools/wrench")) return

    let pos = event.block.pos
    let drawer_nbt = drawer.getEntityData()

    if (!drawer_nbt.contains("Lock")) {
        drawer_nbt.putByte("Lock", 3)
        drawer.setEntityData(drawer_nbt)
    }
})
