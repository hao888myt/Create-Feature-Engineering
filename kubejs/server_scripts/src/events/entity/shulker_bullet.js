const { $Projectile } = require("@package/net/minecraft/world/entity/projectile")

NativeEvents.onEvent(Java.loadClass("net.neoforged.neoforge.event.entity.ProjectileImpactEvent"), event => {
    /** @type {$Projectile} */
    let projectile = event.getProjectile()

    if (projectile.getType() != "minecraft:shulker_bullet") return
    if (event.getRayTraceResult().getType().toString() != "BLOCK") return

    let centerPos = projectile.getOnPos()
    let level = projectile.level

    let directions = [
        Direction.UP,      // 上 (Y+)
        Direction.DOWN,    // 下 (Y-)
        Direction.NORTH,   // 北 (Z-)
        Direction.SOUTH,   // 南 (Z+)
        Direction.WEST,    // 西 (X-)
        Direction.EAST     // 东 (X+)
    ]

    /**
     * @param {string} targetBlock 
     * @returns 
     */
    function CheckBlock(targetBlock) {
        //检查中心方块
        if (level.getBlockState(centerPos).getBlock() === Block.getBlock(targetBlock)) return centerPos

        //检查周围方块
        for (let i = 0; i < directions.length; i++) {
            let dir = directions[i]
            let blockPos = centerPos.relative(dir)
            let block = level.getBlockState(blockPos).getBlock()
            if (block == Block.getBlock(targetBlock)) return blockPos
        }

        //如果没有，返回null
        return null
    }

    let blockPos = CheckBlock("create_feature_engineering:paltaeria_ore_catalyst")

    if (blockPos == null) return

    console.log("已经生成")
    checkRandomBlocks(blockPos)


    function checkRandomBlocks(centerPos) {

        // 5x5区域的范围（不包括中心）
        let radius = 2;
        let selected = [];

        // 生成所有候选位置（5x5区域）
        for (let x = -radius; x <= radius; x++) {
            for (let z = -radius; z <= radius; z++) {
                var pos = centerPos.offset(x, 0, z)

                // 跳过中心位置
                if (pos.equals(centerPos)) continue

                selected.push(pos)
            }
        }
        
        let result = getRandomElements(selected, 3)

        result.forEach(pos => {
            let block = level.getBlock(pos)
            let id = block.id
            let properties = transformNBT(block.getProperties().toString())

            if (block == "minecraft:air") return

            let gravity_block = level.createEntity("spectrum:float_block")

            level.destroyBlock(pos, false)
            if (block == "minecraft:end_stone") {
                gravity_block.mergeNbt(`{BlockState:{Name:"spectrum:paltaeria_ore"}, GravityModifier:0.4f, NoGravity:0b}`)
            }
            else {
                gravity_block.mergeNbt(`{BlockState:{Name:"${id}",Properties:${properties}}, GravityModifier:0.4f, NoGravity:0b}`)
            }

            gravity_block.setPosition( pos.getX() + 0.5, pos.getY(), pos.getZ() + 0.5)
            gravity_block.spawn()
        })
    }

    function getRandomElements(array, n) {
        // 处理无效输入
        if (!Array.isArray(array)) return []
        if (n <= 0) return []
        if (n >= array.length) return array

        var result = []
        var tempArray = array

        for (let i = 0; i < n; i++) {
            var randomIndex = randomNum(0, tempArray.length - 1)

            result.push(tempArray.splice(randomIndex, 1)[0])
        }

        return result
    }
})
