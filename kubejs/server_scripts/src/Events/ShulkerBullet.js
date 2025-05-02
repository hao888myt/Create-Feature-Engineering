NativeEvents.onEvent('net.minecraftforge.event.entity.ProjectileImpactEvent', event =>{
    const projectile = event.getProjectile()

    if(projectile.getType() != 'minecraft:shulker_bullet') return
    if(event.getRayTraceResult().getType().toString() != 'BLOCK') return

    const centerPos = projectile.getOnPos()
    const level = projectile.level

    const directions = [
        Direction.UP,      // 上 (Y+)
        Direction.DOWN,    // 下 (Y-)
        Direction.NORTH,   // 北 (Z-)
        Direction.SOUTH,   // 南 (Z+)
        Direction.WEST,    // 西 (X-)
        Direction.EAST     // 东 (X+)
    ]

    function CheckBlock(targetBlock){
        //检查中心方块
        if (level.getBlockState(centerPos).getBlock() === Block.getBlock(targetBlock)) return centerPos

        //检查周围方块
        for (let i = 0; i < directions.length; i++){
            let dir = directions[i]
            let blockPos = centerPos.relative(dir)
            let block = level.getBlockState(blockPos).getBlock()
            if (block == Block.getBlock(targetBlock)) return blockPos
        }

        //如果没有，返回null
        return null
    }

    let blockPos = CheckBlock('kubejs:paltaeria_catalyst')

    if (blockPos == null) return

    checkRandomBlocks(blockPos)

    function checkRandomBlocks(centerPos) {
        
        // 5x5区域的范围（不包括中心）
        const radius = 2;
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
            const blockState = level.getBlockState(pos)
            const block = blockState.getBlock()

            level.destroyBlock(pos,false)
            if (block == Block.getBlock('minecraft:end_stone')) {
                Utils.getServer().runCommandSilent(`summon spectrum:gravity_block ${pos.getX()} ${pos.getY()} ${pos.getZ()} {BlockState: {Name: "spectrum:paltaeria_ore"}, GravityModifier:0.2f}`)
            } else if (block != Block.getBlock('minecraft:air')) {
                Utils.getServer().runCommandSilent(`summon spectrum:gravity_block ${pos.getX()} ${pos.getY()} ${pos.getZ()} {${parseBlockState(blockState.toString())}, GravityModifier:0.2f}`)
            }
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

    function randomNum(minNum, maxNum){ 
        switch(arguments.length){ 
            case 1: 
                return parseInt(Math.random() * minNum + 1, 10)
            case 2: 
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
            default: 
                return 0;
        } 
    } 

    function parseBlockState(input) {
        const pattern = /^Block{([^}]+)}(?:\[(.*)])?$/;
        const match = input.match(pattern);

        const output = {
            BlockState: {
                Name: match[1].trim()
            }
        };

        if (match[2]) {
            output.BlockState.Properties = {};
            match[2].split(',')
                .filter(prop => prop.trim())
                .forEach(prop => {
                    const [key, val] = prop.split('=').map(s => s.trim());
                    if (key && val !== undefined) {
                        output.BlockState.Properties[key] = val.replace(/^["']+|["']+$/g, '');
                    }
                });
        }

        return JSON.stringify(output, null, 2)
            .replace(/"([^"]+)":/g, '$1:')
            .replace(/: "([^"]+)"/g, ': "$1"')
            .replace(/^{\s*/, '')       // 精确匹配开头 {
            .replace(/\s*}\s*$/, '')    // 精确匹配结尾 }
            .replace(/^  /gm, '');      // 调整缩进
    }
})