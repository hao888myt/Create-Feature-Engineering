ServerEvents.recipes(event => {

	let create = event.recipes.create
	let transitional_item = "minecraft:barrier"

	let removes = [
		"fluidlogistics:copper_basin",

		"create:sequenced_assembly/sturdy_sheet",
		"createdieselgenerators:crafting/pumpjack_bearing",
		"createdieselgenerators:mechanical_crafting/pumpjack_crank",
		"createdieselgenerators:crafting/pumpjack_head",
		"createdieselgenerators:crafting/pumpjack_hole",
		"create:sequenced_assembly/precision_mechanism",
		"anvilcraft:redstone_wire",
		"createadditionallogistics:crafting/kinetics/flexible_shaft",
		"create:crafting/kinetics/mechanical_crafter",

		"create:crafting/logistics/content_observer",
		"create:crafting/logistics/stockpile_switch",

		"create_connected:crafting/kinetics/sequenced_pulse_generator",
		"create:crafting/kinetics/sequenced_gearshift",

		"create:crafting/kinetics/mechanical_arm",
		"fluidlogistics:mechanical_fluid_gun",

		"fluidlogistics:smart_hopper",
		"fluidlogistics:fluid_transporter",

		"fluidlogistics:fluid_packager",
		"createadditionallogistics:crafting/logistics/package_accelerator"
	].forEach(recipe => {
		event.remove(recipe)
	})

	// 流体研究包
	transitional_item = "create_feature_engineering:incomplete_research_pack"
	create.sequenced_assembly(Item.of('researchd:research_pack[researchd:research_pack="create_feature_engineering:fluid"]'),
		"create:fluid_tank", [
		create.deploying(transitional_item, [transitional_item, "create:item_drain"]),
		create.deploying(transitional_item, [transitional_item, "create:spout"]),
		create.deploying(transitional_item, [transitional_item, "create:fluid_pipe"]),
	]).transitionalItem(transitional_item).loops(1).id(`${global.ModPackId}:fluid`)

	// 智能研究包
	transitional_item = "create_feature_engineering:incomplete_research_pack"
	create.sequenced_assembly(Item.of('researchd:research_pack[researchd:research_pack="create_feature_engineering:smart"]'),
		"create:precision_mechanism", [
		create.deploying(transitional_item, [transitional_item, "create:transmitter"]),
		create.deploying(transitional_item, [transitional_item, "create:electron_tube"]),
		create.deploying(transitional_item, [transitional_item, "create:filter"]),
	]).transitionalItem(transitional_item).id(`${global.ModPackId}:smart`)

	// 包裹研究包
	transitional_item = "create_feature_engineering:incomplete_research_pack"
	create.sequenced_assembly(Item.of('researchd:research_pack[researchd:research_pack="create_feature_engineering:package"]'),
		"create:chain_conveyor", [
		create.deploying(transitional_item, [transitional_item, "create:factory_gauge"]),
		create.deploying(transitional_item, [transitional_item, "create:packager"]),
		create.deploying(transitional_item, [transitional_item, "create:package_frogport"]),
	]).transitionalItem(transitional_item).id(`${global.ModPackId}:package`)

	// 铜工作盆
	transitional_item = "create:basin"
	create.sequenced_assembly(Item.of("fluidlogistics:copper_basin", 2),
		"create:basin", [
		create.deploying(transitional_item, [transitional_item, "create:fluid_tank"]),
		create.deploying(transitional_item, [transitional_item, "create:copper_casing"]),
		create.deploying(transitional_item, [transitional_item, "create:fluid_tank"]),
	]).transitionalItem(transitional_item)

	// 安山机壳
	transitional_item = "minecraft:stripped_oak_log"
	create.sequenced_assembly(Item.of("create:andesite_casing", 4),
		Ingredient.of("#c:stripped_logs"), [
		create.deploying(transitional_item, [transitional_item, "create:andesite_alloy"]),
		create.deploying(transitional_item, [transitional_item, "create:andesite_alloy"]),
		create.filling(transitional_item, [transitional_item, Fluid.of("createdieselgenerators:plant_oil", 100)]),
	]).transitionalItem(transitional_item)

	// 红石导线
	transitional_item = "anvilcraft:brass_pressure_plate"
	create.sequenced_assembly(Item.of("anvilcraft:redstone_wire", 16),
		Ingredient.of("#c:plates/brass"), [
		create.deploying(transitional_item, [transitional_item, "create:electron_tube"]),
		create.deploying(transitional_item, [transitional_item, "minecraft:redstone"]),
		create.deploying(transitional_item, [transitional_item, "minecraft:redstone"]),
	]).transitionalItem(transitional_item)

	// 精密构件
	transitional_item = "create:incomplete_precision_mechanism"
	create.sequenced_assembly("create:precision_mechanism",
		Ingredient.of("#c:plates/gold"), [
		create.deploying(transitional_item, [transitional_item, "create:cogwheel"]),
		create.deploying(transitional_item, [transitional_item, "create:large_cogwheel"]),
		create.filling(transitional_item, [transitional_item, Fluid.of("createdieselgenerators:plant_oil", 100)]),
	]
	).transitionalItem(transitional_item).loops(2)

	// 存量转信器
	transitional_item = "create:brass_casing"
	create.sequenced_assembly(Item.of("create:stockpile_switch", 4),
		"create:brass_casing", [
		create.deploying(transitional_item, [transitional_item, "minecraft:comparator"]),
		create.deploying(transitional_item, [transitional_item, "create:electron_tube"])
	]
	).transitionalItem(transitional_item)

	// 智能侦测器
	transitional_item = "create:brass_casing"
	create.sequenced_assembly(Item.of("create:content_observer", 4),
		"create:brass_casing", [
		create.deploying(transitional_item, [transitional_item, "minecraft:observer"]),
		create.deploying(transitional_item, [transitional_item, "create:electron_tube"])
	]
	).transitionalItem(transitional_item)

	// 可编程齿轮箱
	transitional_item = "create:brass_casing"
	create.sequenced_assembly(Item.of("create:sequenced_gearshift", 4),
		"create:brass_casing", [
		create.deploying(transitional_item, [transitional_item, "create:cogwheel"]),
		create.deploying(transitional_item, [transitional_item, "create:electron_tube"])
	]
	).transitionalItem(transitional_item)

	// 可编程脉冲生成器
	transitional_item = "create:brass_casing"
	create.sequenced_assembly(Item.of("create_connected:sequenced_pulse_generator", 4),
		"create:brass_casing", [
		create.deploying(transitional_item, [transitional_item, "minecraft:repeater"]),
		create.deploying(transitional_item, [transitional_item, "create:electron_tube"])
	]
	).transitionalItem(transitional_item)

	// 动力合成器
	transitional_item = "create:brass_casing"
	create.sequenced_assembly(Item.of("create:mechanical_crafter", 3),
		"create:brass_casing", [
		create.deploying(transitional_item, [transitional_item, "minecraft:crafter"]),
		create.deploying(transitional_item, [transitional_item, "create:electron_tube"])
	]).transitionalItem(transitional_item)

	// 惰性灵活传动杆
	transitional_item = "create:brass_casing"
	create.sequenced_assembly(Item.of("createadditionallogistics:flexible_shaft", 8),
		"create:brass_casing", [
		create.deploying(transitional_item, [transitional_item, Ingredient.of("#createadditionallogistics:basic_shafts")]),
		create.deploying(transitional_item, [transitional_item, "create:precision_mechanism"])
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
	create.sequenced_assembly(Item.of("fluidlogistics:smart_hopper", 4),
		"create:copper_casing", [
		create.deploying(transitional_item, [transitional_item, "create:item_vault"]),
		create.deploying(transitional_item, [transitional_item, "fluidlogistics:multi_fluid_tank"]),
		create.deploying(transitional_item, [transitional_item, "create:electron_tube"])
	]).transitionalItem(transitional_item)

	// 流体传输器
	transitional_item = "create:copper_casing"
	create.sequenced_assembly(Item.of("fluidlogistics:fluid_transporter", 4),
		"create:copper_casing", [
		create.deploying(transitional_item, [transitional_item, "create:fluid_tank"]),
		create.deploying(transitional_item, [transitional_item, "create:fluid_pipe"]),
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
		create.deploying(transitional_item, [transitional_item, Ingredient.of("#c:ingots/andesite_alloy")]),
	]).transitionalItem(transitional_item).loops(3)

	// 抽油机曲柄
	transitional_item = "create_feature_engineering:incomplete_pumpjack_crank"
	create.sequenced_assembly("createdieselgenerators:pumpjack_crank",
		"create:shaft", [
		create.deploying(transitional_item, [transitional_item, "create:sturdy_sheet"]),
		create.deploying(transitional_item, [transitional_item, Ingredient.of("#c:ingots/zinc")]),
		create.deploying(transitional_item, [transitional_item, Ingredient.of("#c:ingots/andesite_alloy")]),
	]).transitionalItem(transitional_item).loops(3)

	// 抽油机驴头
	transitional_item = "create_feature_engineering:incomplete_pumpjack_head"
	create.sequenced_assembly("createdieselgenerators:pumpjack_head",
		"minecraft:dried_kelp", [
		create.deploying(transitional_item, [transitional_item, "create:sturdy_sheet"]),
		create.deploying(transitional_item, [transitional_item, Ingredient.of("#c:ingots/zinc")]),
		create.deploying(transitional_item, [transitional_item, Ingredient.of("#c:ingots/andesite_alloy")]),
	]).transitionalItem(transitional_item).loops(3)

	// 抽油机油泵
	transitional_item = "create_feature_engineering:incomplete_pumpjack_hole"
	create.sequenced_assembly("createdieselgenerators:pumpjack_hole",
		"fluidlogistics:fluid_pump", [
		create.deploying(transitional_item, [transitional_item, "create:sturdy_sheet"]),
		create.deploying(transitional_item, [transitional_item, Ingredient.of("#c:ingots/zinc")]),
		create.deploying(transitional_item, [transitional_item, Ingredient.of("#c:ingots/andesite_alloy")]),
	]).transitionalItem(transitional_item).loops(3)

	// 流体打包机
	transitional_item = "create:cardboard_block"
	create.sequenced_assembly("fluidlogistics:fluid_packager",
		"create:cardboard_block", [
		create.deploying(transitional_item, [transitional_item, "minecraft:copper_ingot"]),
		create.deploying(transitional_item, [transitional_item, Ingredient.of("#c:glass_blocks")]),
	]).transitionalItem(transitional_item)

	// 包裹加速器
	transitional_item = "create:brass_casing"
	create.sequenced_assembly(Item.of("createadditionallogistics:package_accelerator", 4),
		"create:brass_casing", [
		create.deploying(transitional_item, [transitional_item, "create:propeller"]),
		create.deploying(transitional_item, [transitional_item, "create:precision_mechanism"]),
		create.deploying(transitional_item, [transitional_item, "create:cardboard_block"]),
	]).transitionalItem(transitional_item)
})
