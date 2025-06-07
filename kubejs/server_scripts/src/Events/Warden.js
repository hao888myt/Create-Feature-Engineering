EntityEvents.hurt(event => {
    const target = event.entity;
    const source = event.source;

    const inputBlock = 'sculk_replaceable';
    const resultBlock = 'minecraft:sculk';

    // 判断是否为监守者的音波攻击
    if (source.getType() == 'sonic_boom') {
        // 获取监守者和目标的坐标
        var wardenPos = new Vec3f(source.sourcePosition.x(), source.sourcePosition.y() + 1, source.sourcePosition.z())
        var targetPos = target.position()

        // 获取监守者和目标的整数坐标
        var wardenBlockPos = new Vec3i(Math.round(wardenPos.x), Math.round(wardenPos.y), Math.round(wardenPos.z));
        var targetBlockPos = new Vec3i(Math.round(targetPos.x()), Math.round(targetPos.y()), Math.round(targetPos.z()));
        // var wardenBlockPos = source.getActual().blockPosition
        // var targetBlockPos = target.blockPosition

        // 计算直线的长度（最大差值）
        const dx = Math.abs(targetBlockPos.x - wardenBlockPos.x);
        const dy = Math.abs(targetBlockPos.y - wardenBlockPos.y);
        const dz = Math.abs(targetBlockPos.z - wardenBlockPos.z);
        const maxDelta = Math.max(dx, dy, dz);

        var distence = Math.sqrt(dx * dx + dy * dy + dz * dz)
        var vec = new Vec3f((targetPos.x() - wardenPos.x) / distence, (targetPos.y() - wardenPos.y) / distence, (targetPos.z() - wardenPos.z) / distence)

        //遍历直线上的每个点
        for (let i = 0; i <= distence; i++) {
            //计算当前点的坐标
            var currentX = Math.floor(wardenPos.x()) + i * vec.x;
            var currentY = Math.floor(wardenPos.y()) + i * vec.y;
            var currentZ = Math.floor(wardenPos.z()) + i * vec.z;

            //获取当前点的方块坐标
            var blockPosX = Math.round(currentX)
            var blockPosY = Math.round(currentY)
            var blockPosZ = Math.round(currentZ)

            if (dx === maxDelta) {
                for (let y = -1; y <= 1; y++) {
                    for (let z = -1; z <= 1; z++) {
                        var block = target.level.getBlock(blockPosX, blockPosY + y, blockPosZ + z)
                        if (block.hasTag(inputBlock)) {
                            var pos = new BlockPos(blockPosX, blockPosY + y, blockPosZ + z)
                            var stoneState = Block.getBlock(resultBlock).defaultBlockState()
                            target.level.setBlockAndUpdate(pos,stoneState)
                        }
                    }
                }
            }
            else if (dy === maxDelta) {
                for (let x = -1; x <= 1; x++) {
                    for (let z = -1; z <= 1; z++) {
                        var block = target.level.getBlock(blockPosX + x, blockPosY, blockPosZ + z)
                        if (block.hasTag(inputBlock)) {
                            var pos = new BlockPos(blockPosX + x, blockPosY, blockPosZ + z)
                            var stoneState = Block.getBlock(resultBlock).defaultBlockState()
                            target.level.setBlockAndUpdate(pos,stoneState)
                        }
                    }
                }
            }
            else if (dz === maxDelta) {
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        var block = target.level.getBlock(blockPosX + x, blockPosY + y, blockPosZ)
                        if (block.hasTag(inputBlock)) {
                            var pos = new BlockPos(blockPosX + x, blockPosY + y, blockPosZ)
                            var stoneState = Block.getBlock(resultBlock).defaultBlockState()
                            target.level.setBlockAndUpdate(pos,stoneState)
                        }
                    }
                }
            }
        }
    }
});