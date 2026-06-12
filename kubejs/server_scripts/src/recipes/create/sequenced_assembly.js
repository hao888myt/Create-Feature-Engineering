ServerEvents.recipes(event => {

	let create = event.recipes.create
	let transitionalItem = "minecraft:barrier"

	// 物流研究包
	transitionalItem = "create_feature_engineering:incomplete_research_pack"
	create.sequenced_assembly(Item.of('researchd:research_pack[researchd:research_pack="create_feature_engineering:logistics"]', 4),
	 "create:cardboard_block", [
			create.deploying(transitionalItem, [transitionalItem, "create:belt_connector"]),
			create.deploying(transitionalItem, [transitionalItem, "create:chain_conveyor"]),
			create.deploying(transitionalItem, [transitionalItem, "create:andesite_funnel"]),
	]).transitionalItem(transitionalItem).loops(1)

	// 流体研究包
	transitionalItem = "create_feature_engineering:incomplete_research_pack"
	create.sequenced_assembly(Item.of('researchd:research_pack[researchd:research_pack="create_feature_engineering:fluid"]', 2),
	 "create:fluid_tank", [
			create.deploying(transitionalItem, [transitionalItem, "create:item_drain"]),
			create.deploying(transitionalItem, [transitionalItem, "create:spout"]),
			create.deploying(transitionalItem, [transitionalItem, "create:fluid_pipe"]),
	]).transitionalItem(transitionalItem).loops(1)

	// 智能研究包
	transitionalItem = "create_feature_engineering:incomplete_research_pack"
	create.sequenced_assembly(Item.of('researchd:research_pack[researchd:research_pack="create_feature_engineering:smart"]', 2),
	 "create:precision_mechanism", [
			create.deploying(transitionalItem, [transitionalItem, "create:transmitter"]),
			create.deploying(transitionalItem, [transitionalItem, "create:electron_tube"]),
			create.deploying(transitionalItem, [transitionalItem, "create:filter"]),
	]).transitionalItem(transitionalItem).loops(2)

	// 包裹研究包
	transitionalItem = "create_feature_engineering:incomplete_research_pack"
	create.sequenced_assembly(Item.of('researchd:research_pack[researchd:research_pack="create_feature_engineering:package"]', 2),
	 "fluidlogistics:waterproof_cardboard_block", [
			create.deploying(transitionalItem, [transitionalItem, "create:stock_link"]),
			create.deploying(transitionalItem, [transitionalItem, "create:packager"]),
			create.deploying(transitionalItem, [transitionalItem, "create:package_frogport"]),
	]).transitionalItem(transitionalItem).loops(2)
})
