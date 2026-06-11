ServerEvents.recipes(event => {

	let create = event.recipes.create
	let transitionalItem = "minecraft:barrier"

	// 智能研究包
	transitionalItem = "create:incomplete_precision_mechanism"
	create.sequenced_assembly(Item.of('researchd:research_pack[researchd:research_pack="create_feature_engineering:smart"]', 2),
	 "create:precision_mechanism", [
			create.deploying(transitionalItem, [transitionalItem, "create_connected:empty_fan_catalyst"]),
			create.deploying(transitionalItem, [transitionalItem, "create:electron_tube"]),
			create.deploying(transitionalItem, [transitionalItem, "create:filter"]),
	]).transitionalItem(transitionalItem).loops(1).id("create:sdasdasdasd")
})
