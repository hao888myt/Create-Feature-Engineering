ServerEvents.recipes(event => {

	let create = event.recipes.create
	let transitionalItem = "minecraft:barrier"

	let removes = [
        "create:sequenced_assembly/sturdy_sheet",
		"createdieselgenerators:crafting/pumpjack_bearing",
		"createdieselgenerators:mechanical_crafting/pumpjack_crank",
		"createdieselgenerators:crafting/pumpjack_head",
		"createdieselgenerators:crafting/pumpjack_hole"
    ].forEach(recipe => {
        event.remove(recipe)
    })

	// 流体研究包
	transitionalItem = "create_feature_engineering:incomplete_research_pack"
	create.sequenced_assembly(Item.of('researchd:research_pack[researchd:research_pack="create_feature_engineering:fluid"]', 2),
		"create:fluid_tank", [
		create.deploying(transitionalItem, [transitionalItem, "create:item_drain"]),
		create.deploying(transitionalItem, [transitionalItem, "create:spout"]),
		create.deploying(transitionalItem, [transitionalItem, "create:fluid_pipe"]),
	]).transitionalItem(transitionalItem).loops(1).id(`${global.ModPackId}:fluid`)

	// 智能研究包
	transitionalItem = "create_feature_engineering:incomplete_research_pack"
	create.sequenced_assembly(Item.of('researchd:research_pack[researchd:research_pack="create_feature_engineering:smart"]', 2),
		"create:precision_mechanism", [
		create.deploying(transitionalItem, [transitionalItem, "create:transmitter"]),
		create.deploying(transitionalItem, [transitionalItem, "create:electron_tube"]),
		create.deploying(transitionalItem, [transitionalItem, "create:filter"]),
	]).transitionalItem(transitionalItem).loops(2).id(`${global.ModPackId}:smart`)

	// 包裹研究包
	transitionalItem = "create_feature_engineering:incomplete_research_pack"
	create.sequenced_assembly(Item.of('researchd:research_pack[researchd:research_pack="create_feature_engineering:package"]', 2),
		"fluidlogistics:waterproof_cardboard_block", [
		create.deploying(transitionalItem, [transitionalItem, "create:stock_link"]),
		create.deploying(transitionalItem, [transitionalItem, "create:packager"]),
		create.deploying(transitionalItem, [transitionalItem, "create:package_frogport"]),
	]).transitionalItem(transitionalItem).loops(2).id(`${global.ModPackId}:package`)

	// 坚固板
	transitionalItem = "create:unprocessed_obsidian_sheet"
	create.sequenced_assembly(Item.of("create:sturdy_sheet", 2),
		Ingredient.of("#c:dusts/obsidian"), [
		create.filling(transitionalItem, [transitionalItem, Fluid.of("create_feature_engineering:molten_steel", 90)]),
		create.pressing(transitionalItem, transitionalItem),
		create.filling(transitionalItem, [transitionalItem, Fluid.of("minecraft:lava", 250)]),
	]).transitionalItem(transitionalItem).loops(2)

	// 抽油机轴承
	transitionalItem = "create_feature_engineering:incomplete_pumpjack_bearing"
	create.sequenced_assembly("createdieselgenerators:pumpjack_bearing",
		"create:mechanical_bearing", [
		create.deploying(transitionalItem, [transitionalItem, "create:sturdy_sheet"]),
		create.deploying(transitionalItem, [transitionalItem, Ingredient.of("#c:ingots/zinc")]),
		create.deploying(transitionalItem, [transitionalItem, Ingredient.of("#c:ingots/andesite")]),
	]).transitionalItem(transitionalItem).loops(3)

	// 抽油机曲柄
	transitionalItem = "create_feature_engineering:incomplete_pumpjack_crank"
	create.sequenced_assembly("createdieselgenerators:pumpjack_crank",
		"create:shaft", [
		create.deploying(transitionalItem, [transitionalItem, "create:sturdy_sheet"]),
		create.deploying(transitionalItem, [transitionalItem, Ingredient.of("#c:ingots/zinc")]),
		create.deploying(transitionalItem, [transitionalItem, Ingredient.of("#c:ingots/andesite")]),
	]).transitionalItem(transitionalItem).loops(3)

	// 抽油机驴头
	transitionalItem = "create_feature_engineering:incomplete_pumpjack_head"
	create.sequenced_assembly("createdieselgenerators:pumpjack_head",
		"minecraft:dried_kelp", [
		create.deploying(transitionalItem, [transitionalItem, "create:sturdy_sheet"]),
		create.deploying(transitionalItem, [transitionalItem, Ingredient.of("#c:ingots/zinc")]),
		create.deploying(transitionalItem, [transitionalItem, Ingredient.of("#c:ingots/andesite")]),
	]).transitionalItem(transitionalItem).loops(3)

	// 抽油机油泵
	transitionalItem = "create_feature_engineering:incomplete_pumpjack_hole"
	create.sequenced_assembly("createdieselgenerators:pumpjack_hole",
		"fluidlogistics:fluid_pump", [
		create.deploying(transitionalItem, [transitionalItem, "create:sturdy_sheet"]),
		create.deploying(transitionalItem, [transitionalItem, Ingredient.of("#c:ingots/zinc")]),
		create.deploying(transitionalItem, [transitionalItem, Ingredient.of("#c:ingots/andesite")]),
	]).transitionalItem(transitionalItem).loops(3)
})
