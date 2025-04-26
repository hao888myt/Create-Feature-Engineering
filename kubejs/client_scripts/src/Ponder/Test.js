Ponder.registry((event) => {
    event.create("minecraft:paper").scene("our_first_scene", "First example scene", (scene, util) => {
        /**
         * Shows the whole structure.
         * Alternatively, `scene.showBasePlate()` can be used to show the base plate.
         * Useful for animating different parts of the structure.
         */
        scene.showStructure();
        
        /**
         * Encapsulate the structure bounds to given positions. This is useful if the custom structure has no proper bounds.
         * scene.showStructure() automatically encapsulates the bounds.
         */
        // scene.encapsulateBounds(blockPos)

        /**
         * idle(ticks) or idleSeconds(seconds) is used to wait for a certain amount of time.
         * 20 ticks = 1 second
         */
        scene.idle(10);

        /**
         * `.createEntity()` returns an entity link from Create which will be used
         * as reference in the future
         * [x, y, z] is the position but any KubeJS way to represent a position can be used.
         *
         * Don't modify the entity directly!
         */
        const creeperLink = scene.world.createEntity("creeper", [2.5, 1, 2.5]);

        /**
         * 50 -> the tick length of the instruction
         * [x, y, z] -> the position that the text should point at
         */
        scene
            .text(60, "Example text", [2.0, 2.5, 2.5])
            /**
             * Optional | Sets the color of the text.
             * Possible values:
             * - PonderPalette.WHITE, PonderPalette.BLACK
             * - PonderPalette.RED, PonderPalette.GREEN, PonderPalette.BLUE
             * - PonderPalette.SLOW, PonderPalette.MEDIUM, PonderPalette.FAST
             * - PonderPalette.INPUT, PonderPalette.OUTPUT
             */
            .colored(PonderPalette.RED)
            /**
             * Optional | Places the text closer to the target position.
             */
            .placeNearTarget()
            /**
             * Optional | Adds a keyframe to the scene.
             */
            .attachKeyFrame();

        /**
         * 120 -> the tick length of the instruction
         * [x, y, z] -> the position that the controls should point at
         * "down" -> the direction that is used by the controls for pointing
         */
        scene
            .showControls(60, [2.5, 3, 2.5], "down")
            /**
             * Uses mouse right click as icon.
             * Alternatively, `.leftClick()` can be used
             * or `.showing(icon)` for a custom icon.
             */
            .rightClick()
            /**
             * Defines the item that should be shown with the icon.
             */
            .withItem("shears")
            /**
             * Optional | Defines that controls are only shown when sneaking.
             * `.whileSneaking()` and `withCTRL()` can not be used simultaneously.
             */
            .whileSneaking()
            /**
             * Optional | Defines that controls are only shown when holding CTRL.
             * `.whileSneaking()` and `withCTRL()` can not be used simultaneously.
             */
            .whileCTRL();
    });
});