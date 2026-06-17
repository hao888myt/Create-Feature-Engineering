NativeEvents.onEvent(Java.loadClass("net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$RightClickBlock"), event => {
    let filters = [
        "create_fantasizing:copper_fluid_barrel",
        "create_fantasizing:zinc_fluid_barrel",
        "create_fantasizing:gold_fluid_barrel",
        "create_fantasizing:diamond_fluid_barrel",
        "create_fantasizing:andesite_crate",
        "create_fantasizing:iron_crate",
        "create_fantasizing:brass_crate",
        "create_fantasizing:sturdy_crate"
    ]
    for (let i = 0; i < filters.length; i++) {
        if (event.getItemStack().getItem().toString() == filters[i]) {
            event.setUseItem($TriState.TRUE)
            event.setUseBlock($TriState.FALSE)
            break
        }
    }
})