Ponder.registry((event) => {
    event.create("spectrum:block_detector")
        .scene("spectrum:block_detector_0", "方块探测器", (scene, util) => {
            scene.showBasePlate()

            scene.addKeyframe()
            scene.idle(15)
            scene.world.setBlock([2, 2, 2], "spectrum:block_detector", true);
            scene.world.modifyBlock([2, 2, 2], (curState) => curState.with("orientation", "west_up"), false);
            scene.world.setBlocks([1, 1, 2, 3, 1, 2], "create:andesite_casing", true);
            scene.world.setBlock([3, 2, 2], "minecraft:redstone_lamp", true)

            let show1 = [
                [1, 1, 2], [2, 1, 2], [3, 1, 2],
                [2, 2, 2], [3, 2, 2]
            ]
            show1.forEach((pos) => {
                scene.world.showSection(pos, Direction.DOWN)
                scene.idle(2)
            })

            scene.idle(10)
            scene.text(30, "这是一个方块探测器", [2.0, 3.5, 2.5]).attachKeyFrame()
            scene.idle(45)
            scene.text(30, "你可以用它来检测方块", [2.0, 3.5, 2.5])
            scene.idle(45)

            scene.text(30, "方块检测器可以将它面朝的方块的方块", [1.5, 2.5, 2.5]).attachKeyFrame()
            scene.idle(45)
            scene.text(30, "与它下方方块进行比较", [2.5, 1.5, 2.5])
            scene.idle(45)

            scene.text(30, "就像这样", [2.0, 2.5, 2.5]).attachKeyFrame()
            scene.idle(20)
            scene.world.setBlock([1, 2, 2], "create:andesite_casing", true)
            scene.world.showSection([1, 2, 2], Direction.DOWN)
            scene.world.modifyBlock([2, 2, 2], (curState) => curState.with("triggered", "true"), false);
            scene.world.modifyBlock([2, 2, 2], (curState) => curState.with("orientation", "west_up"), false);
            scene.idle(2)
            scene.world.modifyBlock([2, 2, 2], (curState) => curState.with("triggered", "true"), false);
            scene.world.modifyBlock([2, 2, 2], (curState) => curState.with("orientation", "west_up"), false);
            scene.world.modifyBlock([3, 2, 2], (curState) => curState.with("lit", "true"), false)
            scene.idle(8)
            scene.world.modifyBlock([3, 2, 2], (curState) => curState.with("lit", "false"), false)
            scene.idle(10)

            scene.text(30, "当它面朝的方块被改变成其它的时候", [1.5, 2.5, 2.5]).attachKeyFrame()
            scene.idle(45)
            scene.world.hideSection([1, 2, 2], Direction.UP)
            scene.idle(15)
            scene.world.setBlock([1, 2, 2], "create:brass_casing", false)
            scene.world.showSection([1, 2, 2], Direction.DOWN)
            scene.idle(10)
            scene.text(30, "它不会发出红石信号", [2.5, 2.5, 2.5])
        })
        .scene("spectrum:block_detector_1", "其它方向的方块探测器", (scene, util) => {
            scene.showBasePlate()

            scene.addKeyframe()
            scene.idle(15)
            scene.world.setBlock([2, 2, 2], "spectrum:block_detector", true);
            scene.world.modifyBlock([2, 2, 2], (curState) => curState.with("orientation", "up_east"), false);
            scene.world.setBlock([2, 1, 2], "create:andesite_casing", true);
            scene.world.setBlock([1, 2, 2], "create:brass_casing", true);
            scene.world.setBlock([1, 1, 2], "minecraft:redstone_lamp", true)

            let show1 = [
                [1, 1, 2],
                [2, 1, 2],
                [1, 2, 2],
                [2, 2, 2]
            ]
            show1.forEach((pos) => {
                scene.world.showSection(pos, Direction.DOWN)
                scene.idle(2)
            })
            scene.idle(10)

            scene.text(30, "再强调一次", [2.5, 2.5, 2.5]).attachKeyFrame()
            scene.idle(45)

            scene.text(30, "方块探测器是将它面朝的方块的方块", [2.5, 3.5, 2.5]).attachKeyFrame()
            scene.idle(45)

            scene.text(30, "与它下方方块进行比较", [2.5, 1.5, 2.5]).attachKeyFrame()
            scene.idle(45)

            scene.text(30, "而不是与视觉上的底部相连的方块进行比较", [1, 2.5, 2.5]).attachKeyFrame()
            scene.idle(45)

            scene.addKeyframe()
            scene.world.setBlocks([2, 3, 2], "create:andesite_casing", true)
            scene.world.showSection([2, 3, 2], Direction.DOWN)
            scene.world.modifyBlock([2, 2, 2], (curState) => curState.with("triggered", "true"), false);
            scene.world.modifyBlock([2, 2, 2], (curState) => curState.with("orientation", "up_east"), false);
            scene.idle(2)
            scene.world.modifyBlock([2, 2, 2], (curState) => curState.with("triggered", "false"), false);
            scene.world.modifyBlock([2, 2, 2], (curState) => curState.with("orientation", "up_east"), false);
            scene.world.modifyBlock([1, 1, 2], (curState) => curState.with("lit", "true"), false)
            scene.idle(8)
            scene.world.modifyBlock([1, 1, 2], (curState) => curState.with("lit", "false"), false)
            scene.idle(10)
            scene.world.hideSection([2, 3, 2], Direction.UP)

            scene.addKeyframe()
            scene.idle(20)
            scene.world.setBlocks([2, 3, 2], "create:brass_casing", false)
            scene.world.showSection([2, 3, 2], Direction.DOWN)
        })
        .scene("spectrum:block_detector_2", "方块状态的匹配", (scene, util) => {
            scene.showBasePlate()

            scene.addKeyframe()
            scene.idle(15)
            scene.world.setBlock([2, 2, 2], "spectrum:block_detector", true);
            scene.world.modifyBlock([2, 2, 2], (curState) => curState.with("orientation", "up_east"), false);
            scene.world.setBlock([2, 1, 2], "minecraft:barrel", true)
            scene.world.setBlock([2, 3, 2], "minecraft:barrel", true)
            scene.world.setBlock([1, 1, 2], "minecraft:redstone_lamp", true)

            let show1 = [
                [1, 1, 2],
                [2, 1, 2],
                [2, 2, 2],
                [2, 3, 2]
            ]
            show1.forEach((pos) => {
                scene.world.showSection(pos, Direction.DOWN)
                scene.idle(2)
            })
            scene.idle(10)

            scene.text(30, "方块探测器会比较方块状态", [2.5, 2.5, 2.5]).attachKeyFrame()
            scene.idle(45)
            scene.text(30, "对于方块探测器来说", [2.5, 2.5, 2.5])
            scene.idle(45)
            scene.text(30, "打开的木桶和关闭的木桶是不同的方块", [2.5, 3.5, 2.5])
            scene.idle(20)
            scene.world.modifyBlock([2, 3, 2], (curState) => curState.with("open", "true"), false);
            scene.idle(45)

            scene.addKeyframe()
            scene.world.modifyBlock([2, 3, 2], (curState) => curState.with("open", "false"), false);
            scene.idle(2)
            scene.world.modifyBlock([2, 2, 2], (curState) => curState.with("triggered", "true"), false);
            scene.world.modifyBlock([2, 2, 2], (curState) => curState.with("orientation", "up_east"), false);
            scene.idle(2)
            scene.world.modifyBlock([2, 2, 2], (curState) => curState.with("triggered", "false"), false);
            scene.world.modifyBlock([2, 2, 2], (curState) => curState.with("orientation", "up_east"), false);
            scene.world.modifyBlock([1, 1, 2], (curState) => curState.with("lit", "true"), false)
            scene.idle(8)
            scene.world.modifyBlock([1, 1, 2], (curState) => curState.with("lit", "false"), false)
            scene.idle(10)


            scene.text(30, "但是方块探测器不会比较NBT", [2.5, 3.5, 2.5]).attachKeyFrame()
            scene.idle(45)
            scene.world.setBlocks([2, 4, 2], "create:andesite_funnel", true)
            scene.world.modifyBlock([2, 4, 2], (curState) => curState.with("extracting", "false"), false);
            scene.world.modifyBlock([2, 4, 2], (curState) => curState.with("facing", "up"), false);
            scene.world.showSection([2, 4, 2], Direction.DOWN)
            scene.idle(20)

            scene.text(30, "无论木桶里有什么", [2.5, 3.5, 2.5]).attachKeyFrame()
            let itemEntity1 = scene.world.createItemEntity([2.5, 5, 2.5], Direction.DOWN, "minecraft:honey_bottle")
            scene.idle(5)
            scene.world.removeEntity(itemEntity1)
            scene.idle(45)

            scene.text(30, "都不影响它是个关着的木桶", [2.5, 3.5, 2.5]).attachKeyFrame()
            scene.idle(45)
            scene.world.setBlocks([1, 3, 2], "create:andesite_funnel", true)
            scene.world.modifyBlock([1, 3, 2], (curState) => curState.with("extracting", "true"), false);
            scene.world.modifyBlock([1, 3, 2], (curState) => curState.with("facing", "west"), false);
            scene.world.showSection([1, 3, 2], Direction.EAST)
            scene.idle(15)
            scene.world.createItemEntity([1.5, 3.5, 2.5], Direction.DOWN, "minecraft:honey_bottle")
            scene.idle(20)
        })
});