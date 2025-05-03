BlockEvents.rightClicked(event => {
    //排除副手干扰
    if (event.hand == "OFF_HAND") return

    //获得玩家
    var player = event.getPlayer()

    //判断玩家是否存在
    if (player == null) return

    //一些方块不能被催化剂催化
    let blacklist = [
        //tag
        'alexscaves:unmovable',
        'minecraft:doors',
        'anvilcraft:giant_anvil',

        //id
        'sculkcatalyticchamber:chamber_top',
        'sculkcatalyticchamber:chamber_middle',
        'sculkcatalyticchamber:chamber',
    ]

    //判断方块是否在黑名单内
    for (let i = 0; i < blacklist.length; i++){
        let current = blacklist[i]
        if (event.block.hasTag(current) || event.block.id == current) return
    }

    //判断玩家是否持有催化剂
    if (event.getItem().hasTag('kubejs:catalysts')){
        //存储方块坐标
        let blockX = event.block.x
        let blockY = event.block.y
        let blockZ = event.block.z

        if (event.block.id == 'minecraft:air') return

        //存储方块状态
        let state = event.block.getBlockState().toString()

        //生成重力方块
        if (event.getItem().id != 'kubejs:gravity_catalyst')
        {
            //判断催化剂类型
            let gravityModifier = 0.0
            if (event.getItem().id == 'kubejs:paltaeria_catalyst') gravityModifier = 0.2
            else if (event.getItem().id == 'kubejs:stratine_catalyst') gravityModifier = -0.2
            else if (event.getItem().id == 'kubejs:hover_catalyst') gravityModifier = 0.0

            let gravityBlock = player.level.createEntity("spectrum:gravity_block")
            gravityBlock.setPosition( blockX + 0.5, blockY, blockZ + 0.5)
            gravityBlock.mergeNbt(`{${parseBlockState(state)}}`)
            gravityBlock.mergeNbt(`{GravityModifier:${gravityModifier}}`)
            gravityBlock.spawn()
        }
        //生成下落方块
        else
        {
            let fallingBlock = player.level.createEntity("minecraft:falling_block")
            fallingBlock.setPosition( blockX + 0.5, blockY, blockZ + 0.5)
            fallingBlock.mergeNbt(`{${parseBlockState(state)}}`)
            fallingBlock.spawn()
        }

        //删除目标方块
        event.level.destroyBlock(event.block.pos,false)

        // 消耗催化剂
        if (!player.creative)
            event.getItem().count--
    }

    //处理方块状态字符串
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

// ItemEvents.rightClicked(event => {
//     if (event.hand == "OFF_HAND") return
//     if (event.getItem().id != 'kubejs:rubber') return
//     //console.log(event.getTarget().entity.getNbt().toString())
//     if (event.getTarget().entity == null) return
//     console.log(event.target.entity.getNbt().toString())
// })