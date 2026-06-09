ItemEvents.rightClicked("create_fantasizing:block_placer", event => {
    let player = event.getPlayer()

    if (!player.isCreative()) return

    player.getServer().scheduleInTicks(1, () => {
        player.cooldowns.removeCooldown("create_fantasizing:block_placer")
    })
})
