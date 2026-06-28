ServerEvents.recipes(event => {

	let create = event.recipes.create
	let transitional_item = "minecraft:barrier"

	let removes = [
		"create:sequenced_assembly/sturdy_sheet",
		"createdieselgenerators:crafting/pumpjack_bearing",
		"createdieselgenerators:mechanical_crafting/pumpjack_crank",
		"createdieselgenerators:crafting/pumpjack_head",
		"createdieselgenerators:crafting/pumpjack_hole",
		"create:sequenced_assembly/precision_mechanism",
		"create:crafting/kinetics/mechanical_crafter",

		"create:crafting/kinetics/mechanical_arm",
		"fluidlogistics:mechanical_fluid_gun",

		"fluidlogistics:smart_hopper"
	].forEach(recipe => {
		event.remove(recipe)
	})

	// 流体研究包
	transitional_item = "create_feature_engineering:incomplete_research_pack"
	create.sequenced_assembly(Item.of('researchd:research_pack[researchd:research_pack="create_feature_engineering:fluid"]', 2),
		"create:fluid_tank", [
		create.deploying(transitional_item, [transitional_item, "create:item_drain"]),
		create.deploying(transitional_item, [transitional_item, "create:spout"]),
		create.deploying(transitional_item, [transitional_item, "create:fluid_pipe"]),
	]).transitionalItem(transitional_item).loops(1).id(`${global.ModPackId}:fluid`)

	// 智能研究包
	transitional_item = "create_feature_engineering:incomplete_research_pack"
	create.sequenced_assembly(Item.of('researchd:research_pack[researchd:research_pack="create_feature_engineering:smart"]', 2),
		"create:precision_mechanism", [
		create.deploying(transitional_item, [transitional_item, "create:transmitter"]),
		create.deploying(transitional_item, [transitional_item, "create:electron_tube"]),
		create.deploying(transitional_item, [transitional_item, "create:filter"]),
	]).transitionalItem(transitional_item).id(`${global.ModPackId}:smart`)

	// 包裹研究包
	transitional_item = "create_feature_engineering:incomplete_research_pack"
	create.sequenced_assembly(Item.of('researchd:research_pack[researchd:research_pack="create_feature_engineering:package"]', 2),
		"create:chain_conveyor", [
		create.deploying(transitional_item, [transitional_item, "create:stock_link"]),
		create.deploying(transitional_item, [transitional_item, "create:packager"]),
		create.deploying(transitional_item, [transitional_item, "create:package_frogport"]),
	]).transitionalItem(transitional_item).id(`${global.ModPackId}:package`)

	// 精密构件
	transitional_item = "create:incomplete_precision_mechanism"
	create.sequenced_assembly("create:precision_mechanism",
		Ingredient.of("#c:plates/gold"), [
		create.deploying(transitional_item, [transitional_item, "create:cogwheel"]),
		create.deploying(transitional_item, [transitional_item, "create:large_cogwheel"]),
		create.filling(transitional_item, [transitional_item, Fluid.of("createdieselgenerators:plant_oil", 100)]),
	]
	).transitionalItem(transitional_item).loops(2)

	// 动力合成器
	transitional_item = "minecraft:crafter"
	create.sequenced_assembly(Item.of("create:mechanical_crafter", 3),
		"minecraft:crafter", [
		create.deploying(transitional_item, [transitional_item, "create:brass_casing"]),
		create.deploying(transitional_item, [transitional_item, "create:electron_tube"])
	]).transitionalItem(transitional_item)

	// 动力臂
	transitional_item = "create:brass_casing"
	create.sequenced_assembly(Item.of("create:mechanical_arm", 2),
		"create:brass_casing", [
		create.deploying(transitional_item, [transitional_item, "create:precision_mechanism"]),
		create.deploying(transitional_item, [transitional_item, "create:andesite_alloy"])
	]).transitionalItem(transitional_item)

	// 动力注液枪
	transitional_item = "create:copper_casing"
	create.sequenced_assembly(Item.of("fluidlogistics:mechanical_fluid_gun", 2),
		"create:copper_casing", [
		create.deploying(transitional_item, [transitional_item, "create:precision_mechanism"]),
		create.deploying(transitional_item, [transitional_item, "create:spout"])
	]).transitionalItem(transitional_item)

	// 智能漏斗
	transitional_item = "create:copper_casing"
	create.sequenced_assembly(Item.of("fluidlogistics:smart_hopper", 8),
		"create:copper_casing", [
		create.deploying(transitional_item, [transitional_item, "create:item_vault"]),
		create.deploying(transitional_item, [transitional_item, "fluidlogistics:multi_fluid_tank"]),
		create.deploying(transitional_item, [transitional_item, "create:electron_tube"])
	]).transitionalItem(transitional_item)

	// 坚固板
	transitional_item = "create:unprocessed_obsidian_sheet"
	create.sequenced_assembly(Item.of("create:sturdy_sheet", 2),
		Ingredient.of("#c:dusts/obsidian"), [
		create.filling(transitional_item, [transitional_item, Fluid.of("create_feature_engineering:molten_steel", 90)]),
		create.pressing(transitional_item, transitional_item),
		create.filling(transitional_item, [transitional_item, Fluid.of("minecraft:lava", 250)]),
	]).transitionalItem(transitional_item).loops(2)

	// 抽油机轴承
	transitional_item = "create_feature_engineering:incomplete_pumpjack_bearing"
	create.sequenced_assembly("createdieselgenerators:pumpjack_bearing",
		"create:mechanical_bearing", [
		create.deploying(transitional_item, [transitional_item, "create:sturdy_sheet"]),
		create.deploying(transitional_item, [transitional_item, Ingredient.of("#c:ingots/zinc")]),
		create.deploying(transitional_item, [transitional_item, Ingredient.of("#c:ingots/andesite")]),
	]).transitionalItem(transitional_item).loops(3)

	// 抽油机曲柄
	transitional_item = "create_feature_engineering:incomplete_pumpjack_crank"
	create.sequenced_assembly("createdieselgenerators:pumpjack_crank",
		"create:shaft", [
		create.deploying(transitional_item, [transitional_item, "create:sturdy_sheet"]),
		create.deploying(transitional_item, [transitional_item, Ingredient.of("#c:ingots/zinc")]),
		create.deploying(transitional_item, [transitional_item, Ingredient.of("#c:ingots/andesite")]),
	]).transitionalItem(transitional_item).loops(3)

	// 抽油机驴头
	transitional_item = "create_feature_engineering:incomplete_pumpjack_head"
	create.sequenced_assembly("createdieselgenerators:pumpjack_head",
		"minecraft:dried_kelp", [
		create.deploying(transitional_item, [transitional_item, "create:sturdy_sheet"]),
		create.deploying(transitional_item, [transitional_item, Ingredient.of("#c:ingots/zinc")]),
		create.deploying(transitional_item, [transitional_item, Ingredient.of("#c:ingots/andesite")]),
	]).transitionalItem(transitional_item).loops(3)

	// 抽油机油泵
	transitional_item = "create_feature_engineering:incomplete_pumpjack_hole"
	create.sequenced_assembly("createdieselgenerators:pumpjack_hole",
		"fluidlogistics:fluid_pump", [
		create.deploying(transitional_item, [transitional_item, "create:sturdy_sheet"]),
		create.deploying(transitional_item, [transitional_item, Ingredient.of("#c:ingots/zinc")]),
		create.deploying(transitional_item, [transitional_item, Ingredient.of("#c:ingots/andesite")]),
	]).transitionalItem(transitional_item).loops(3)
})
