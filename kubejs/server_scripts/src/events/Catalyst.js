const { $Entity } = require("@package/net/minecraft/world/entity")

BlockEvents.rightClicked(event => {
    //排除副手干扰
    if (event.hand == "OFF_HAND") return

    //获得玩家
    let player = event.getPlayer()

    //判断玩家是否存在
    if (player == null) return

    //一些方块不能被催化剂催化
    let blacklist = [
        //tag
        "alexscaves:unmovable",
        "minecraft:doors",
        "anvilcraft:giant_anvil"
    ]

    //判断方块是否在黑名单内
    for (let i = 0; i < blacklist.length; i++) {
        let current = blacklist[i]
        if (event.block.hasTag(current) || event.block.id == current) return
    }

    //判断玩家是否持有催化剂
    if (!event.getItem().hasTag("create_feature_engineering:catalysts")) return


    //存储方块坐标
    let {x, y, z} = event.block

    if (event.block.id == "minecraft:air") return

    if (event.block.hasTag("spectrum:idols")) {
        if (containsDeployerFakePlayer(event.getPlayer().toString())) return
    }

    //存储方块状态
    let id = event.block.getId()
    let properties = equalToColon(event.block.getProperties().toString())

    let item_id = event.getItem().id

    /** @type {$Entity} */
    let gravity_block

    //生成重力方块
    if (item_id != "create_feature_engineering:gravity_catalyst") {
        //判断催化剂类型
        let gravity_modifier = "0.0f"
        let no_gravity = "0b"

        switch (item_id) {
            case "create_feature_engineering:paltaeria_catalyst":
                gravity_modifier = "0.2f"
                break
            case "create_feature_engineering:stratine_catalyst":
                gravity_modifier = "-0.2f"
                break
            case "create_feature_engineering:hover_catalyst":
                no_gravity = "1b"
                break
        }

        gravity_block = player.level.createEntity("spectrum:float_block")
        gravity_block.mergeNbt(`{BlockState:{Name:"${id}",Properties:${properties}}, GravityModifier:${gravity_modifier}, NoGravity:${no_gravity}}`)
    }
    //生成下落方块
    else {
        gravity_block = player.level.createEntity("minecraft:falling_block")
        gravity_block.mergeNbt(`{BlockState:{Name:"${id}",Properties:${properties}}}`)
    }

    gravity_block.setPosition(x + 0.5, y, z + 0.5)
    gravity_block.spawn()

    //删除目标方块
    let pos = event.block.pos
    event.level.destroyBlock(pos, false)

    if (event.level.getBlock(pos).id == "minecraft:water") event.level.setBlockAndUpdate(pos, Block.getBlock("minecraft:air").defaultBlockState())

    // 消耗催化剂
    if (!player.creative)
        event.getItem().count--


    function containsDeployerFakePlayer(str) {
        return /DeployerFakePlayer/i.test(str);
    }
})
