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

	//坚固板
	event.remove("create:sequenced_assembly/sturdy_sheet")
	// create.sequenced_assembly([
	// 	Item.of("create:sturdy_sheet", 4)
	// ], "spectrum:neolith", [
	// 	create.filling("create:unprocessed_obsidian_sheet", ["create:unprocessed_obsidian_sheet", Fluid.of("createmetallurgy:molten_steel", 90)]),
	// 	create.pressing("create:unprocessed_obsidian_sheet", "create:unprocessed_obsidian_sheet"),
	// 	create.pressing("create:unprocessed_obsidian_sheet", "create:unprocessed_obsidian_sheet")
	// ]).transitionalItem("create:unprocessed_obsidian_sheet").loops(1)

	// create.sequenced_assembly([
	// 	Item.of("create:sturdy_sheet")
	// ], "create:powdered_obsidian", [
	// 	create.filling("create:unprocessed_obsidian_sheet", ["create:unprocessed_obsidian_sheet", Fluid.of("createmetallurgy:molten_steel", 180)]),
	// 	create.pressing("create:unprocessed_obsidian_sheet", "create:unprocessed_obsidian_sheet"),
	// 	create.pressing("create:unprocessed_obsidian_sheet", "create:unprocessed_obsidian_sheet")
	// ]).transitionalItem("create:unprocessed_obsidian_sheet").loops(1)

	//安山构件
	// create.sequenced_assembly([
	// 	Item.of("create_feature_engineering:andesite_mechanism")
	// ], "create:andesite_alloy", [
	// 	create.deploying("create_feature_engineering:incomplete_andesite_mechanism", ["create_feature_engineering:incomplete_andesite_mechanism", "petrolsparts:coaxial_gear"]),
	// 	create.deploying("create_feature_engineering:incomplete_andesite_mechanism", ["create_feature_engineering:incomplete_andesite_mechanism", "petrolsparts:coaxial_gear"])
	// ]).transitionalItem("create_feature_engineering:incomplete_andesite_mechanism").loops(1)

	//删除流体构件配方
	event.remove("create_factory_logistics:sequenced_assembly/fluid_mechanism")

	//精密构件
	event.remove("create:sequenced_assembly/precision_mechanism")
	create.sequenced_assembly([
		Item.of("create:precision_mechanism")
	], "create_feature_engineering:andesite_mechanism", [
		create.filling("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", Fluid.of("createdieselgenerators:biodiesel", 250)]),
		create.deploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "create:electron_tube"]),
		create.filling("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", Fluid.of("create_feature_engineering:flowing_molten_gold", 90)]),
	]).transitionalItem("create:incomplete_precision_mechanism").loops(1)

	//坚固构件
	// create.sequenced_assembly([
	// 	Item.of("create_feature_engineering:sturdy_mechanism")
	// ], "create:precision_mechanism", [
	// 	create.deploying("create_feature_engineering:incomplete_sturdy_mechanism", ["create_feature_engineering:incomplete_sturdy_mechanism", "#forge:plates/obsidian"]),
	// 	create.filling("create_feature_engineering:incomplete_sturdy_mechanism", ["create_feature_engineering:incomplete_sturdy_mechanism", Fluid.of("createmetallurgy:molten_tungsten", 90)]),
	// 	create.pressing("create_feature_engineering:incomplete_sturdy_mechanism", "create_feature_engineering:incomplete_sturdy_mechanism"),
	// 	create.filling("create_feature_engineering:incomplete_sturdy_mechanism", ["create_feature_engineering:incomplete_sturdy_mechanism", Fluid.of("createmetallurgy:molten_zinc", 180)]),
	// ]).transitionalItem("create_feature_engineering:incomplete_sturdy_mechanism").loops(2)

	// 分馏塔控制器
	event.remove("createdieselgenerators:crafting/distillation_controller")
	create.sequenced_assembly([
		Item.of("createdieselgenerators:distillation_controller", 2)
	], "create_feature_engineering:sturdy_mechanism", [
		create.deploying("create_feature_engineering:incomplete_distillation_controller", ["create_feature_engineering:incomplete_distillation_controller", "minecraft:clock"]),
		create.deploying("create_feature_engineering:incomplete_distillation_controller", ["create_feature_engineering:incomplete_distillation_controller", "create:andesite_alloy"]),
		create.deploying("create_feature_engineering:incomplete_distillation_controller", ["create_feature_engineering:incomplete_distillation_controller", "create:fluid_pipe"]),
	]).transitionalItem("create_feature_engineering:incomplete_distillation_controller").loops(1)

	// 批量发酵器
	event.remove("createdieselgenerators:crafting/bulk_fermenter")
	// create.sequenced_assembly([
	// 	Item.of("createdieselgenerators:bulk_fermenter", 3)
	// ], "create_feature_engineering:sturdy_machine", [
	// 	create.deploying("create_feature_engineering:incomplete_bulk_fermenter", ["create_feature_engineering:incomplete_bulk_fermenter", "createdieselgenerators:basin_lid"]),
	// 	create.deploying("create_feature_engineering:incomplete_bulk_fermenter", ["create_feature_engineering:incomplete_bulk_fermenter", "#create_feature_engineering:fluid_tanks"]),
	// ]).transitionalItem("create_feature_engineering:incomplete_bulk_fermenter").loops(1)

	// 冲击桩
	event.remove("anvilcraft:impact_pile")
	// create.sequenced_assembly([
	// 	Item.of("anvilcraft:impact_pile")
	// ], "create_feature_engineering:sturdy_machine", [
	// 	create.deploying("create_feature_engineering:incomplete_impact_pile", ["create_feature_engineering:incomplete_impact_pile", "#forge:plates/obsidian"]),
	// 	create.pressing("create_feature_engineering:incomplete_impact_pile", ["create_feature_engineering:incomplete_impact_pile"]),
	// 	create.filling("create_feature_engineering:incomplete_impact_pile", ["create_feature_engineering:incomplete_impact_pile", Fluid.of("createdieselgenerators:biodiesel", 250)]),
	// ]).transitionalItem("create_feature_engineering:incomplete_impact_pile").loops(3)
	// create.sequenced_assembly([
	// 	Item.of("anvilcraft:impact_pile", 4)
	// ], "create_feature_engineering:sturdy_machine", [
	// 	create.deploying("create_feature_engineering:incomplete_impact_pile", ["create_feature_engineering:incomplete_impact_pile", "#forge:plates/obsidian"]),
	// 	create.pressing("create_feature_engineering:incomplete_impact_pile", ["create_feature_engineering:incomplete_impact_pile"]),
	// 	create.filling("create_feature_engineering:incomplete_impact_pile", ["create_feature_engineering:incomplete_impact_pile", Fluid.of("createdieselgenerators:diesel", 250)]),
	// ]).transitionalItem("create_feature_engineering:incomplete_impact_pile").loops(1)

	// 柴油引擎
	event.remove("createdieselgenerators:crafting/diesel_engine")
	// create.sequenced_assembly([
	// 	Item.of("createdieselgenerators:diesel_engine")
	// ], "create_feature_engineering:sturdy_machine", [
	// 	create.deploying("create_feature_engineering:incomplete_diesel_engine", ["create_feature_engineering:incomplete_diesel_engine", "#create_feature_engineering:fluid_tanks"]),
	// 	create.deploying("create_feature_engineering:incomplete_diesel_engine", ["create_feature_engineering:incomplete_diesel_engine", "#forge:storage_blocks/brass"]),
	// 	create.deploying("create_feature_engineering:incomplete_diesel_engine", ["create_feature_engineering:incomplete_diesel_engine", "createdieselgenerators:engine_piston"]),
	// ]).transitionalItem("create_feature_engineering:incomplete_diesel_engine").loops(1)

	// 抽油机油泵
	event.remove("createdieselgenerators:crafting/pumpjack_hole")
	// create.sequenced_assembly([
	// 	Item.of("createdieselgenerators:pumpjack_hole")
	// ], "create_feature_engineering:sturdy_machine", [
	// 	create.deploying("create_feature_engineering:incomplete_pumpjack_hole", ["create_feature_engineering:incomplete_pumpjack_hole", "#supplementaries:chains"]),
	// 	create.deploying("create_feature_engineering:incomplete_pumpjack_hole", ["create_feature_engineering:incomplete_pumpjack_hole", "create:mechanical_pump"]),
	// 	create.deploying("create_feature_engineering:incomplete_pumpjack_hole", ["create_feature_engineering:incomplete_pumpjack_hole", "create:fluid_pipe"]),
	// ]).transitionalItem("create_feature_engineering:incomplete_pumpjack_hole").loops(1)

	// 抽油机曲柄
	event.remove("createdieselgenerators:mechanical_crafting/pumpjack_crank")
	// create.sequenced_assembly([
	// 	Item.of("createdieselgenerators:pumpjack_crank")
	// ], "create_feature_engineering:sturdy_machine", [
	// 	create.deploying("create_feature_engineering:incomplete_pumpjack_crank", ["create_feature_engineering:incomplete_pumpjack_crank", "create:shaft"]),
	// 	create.deploying("create_feature_engineering:incomplete_pumpjack_crank", ["create_feature_engineering:incomplete_pumpjack_crank", "#forge:ingots/zinc"]),
	// 	create.deploying("create_feature_engineering:incomplete_pumpjack_crank", ["create_feature_engineering:incomplete_pumpjack_crank", "create:andesite_alloy"]),
	// ]).transitionalItem("create_feature_engineering:incomplete_pumpjack_crank").loops(1)

	// 抽油机驴头
	event.remove("createdieselgenerators:mechanical_crafting/pumpjack_head")
	// create.sequenced_assembly([
	// 	Item.of("createdieselgenerators:pumpjack_head")
	// ], "create_feature_engineering:sturdy_machine", [
	// 	create.deploying("create_feature_engineering:incomplete_pumpjack_head", ["create_feature_engineering:incomplete_pumpjack_head", "minecraft:dried_kelp"]),
	// 	create.deploying("create_feature_engineering:incomplete_pumpjack_head", ["create_feature_engineering:incomplete_pumpjack_head", "#forge:ingots/zinc"]),
	// 	create.deploying("create_feature_engineering:incomplete_pumpjack_head", ["create_feature_engineering:incomplete_pumpjack_head", "create:andesite_alloy"]),
	// ]).transitionalItem("create_feature_engineering:incomplete_pumpjack_head").loops(1)

	// 抽油机轴承
	event.remove("createdieselgenerators:crafting/pumpjack_bearing")
	// create.sequenced_assembly([
	// 	Item.of("createdieselgenerators:pumpjack_bearing")
	// ], "create_feature_engineering:sturdy_machine", [
	// 	create.deploying("create_feature_engineering:incomplete_pumpjack_bearing", ["create_feature_engineering:incomplete_pumpjack_bearing", "create:mechanical_bearing"]),
	// 	create.deploying("create_feature_engineering:incomplete_pumpjack_bearing", ["create_feature_engineering:incomplete_pumpjack_bearing", "#forge:ingots/zinc"]),
	// 	create.deploying("create_feature_engineering:incomplete_pumpjack_bearing", ["create_feature_engineering:incomplete_pumpjack_bearing", "create:andesite_alloy"]),
	// ]).transitionalItem("create_feature_engineering:incomplete_pumpjack_bearing").loops(1)

	// 电路板
	event.remove("anvilcraft:circuit_board")
	// create.sequenced_assembly([
	// 	Item.of("anvilcraft:circuit_board")
	// ], "anvilcraft:hardend_resin", [
	// 	create.deploying("create_feature_engineering:incomplete_circuit_board", ["create_feature_engineering:incomplete_circuit_board", "create:electron_tube"]),
	// 	create.deploying("create_feature_engineering:incomplete_circuit_board", ["create_feature_engineering:incomplete_circuit_board", "#forge:wires/copper"]),
	// 	create.deploying("create_feature_engineering:incomplete_circuit_board", ["create_feature_engineering:incomplete_circuit_board", "#forge:wires/copper"])
	// ]).transitionalItem("create_feature_engineering:incomplete_circuit_board").loops(2)

	// 磁电核心
	event.remove({ output: "anvilcraft:magnetoelectric_core" })
	// create.sequenced_assembly([
	// 	Item.of("anvilcraft:magnetoelectric_core", 2)
	// ], "anvilcraft:magnet_block", [
	// 	create.deploying("create_feature_engineering:incomplete_magnetoelectric_core", ["create_feature_engineering:incomplete_magnetoelectric_core", "create_feature_engineering:silicon_plate"]),
	// 	create.filling("create_feature_engineering:incomplete_magnetoelectric_core", ["create_feature_engineering:incomplete_magnetoelectric_core", Fluid.of("create_feature_engineering:lubricant", 100)]),
	// 	create.deploying("create_feature_engineering:incomplete_magnetoelectric_core", ["create_feature_engineering:incomplete_magnetoelectric_core", "create_optical:copper_coil"]),
	// ]).transitionalItem("create_feature_engineering:incomplete_magnetoelectric_core").loops(3)

	// 电容器
	event.remove("anvilcraft:capacitor_empty")
	// create.sequenced_assembly([
	// 	Item.of("anvilcraft:capacitor_empty", 4)
	// ], "#create_feature_engineering:sap", [
	// 	create.deploying("create_feature_engineering:incomplete_capacitor", ["create_feature_engineering:incomplete_capacitor", "#forge:plates/copper"]),
	// 	create.deploying("create_feature_engineering:incomplete_capacitor", ["create_feature_engineering:incomplete_capacitor", "minecraft:redstone_torch"]),
	// 	create.deploying("create_feature_engineering:incomplete_capacitor", ["create_feature_engineering:incomplete_capacitor", "#forge:plates/zinc"]),
	// ]).transitionalItem("create_feature_engineering:incomplete_capacitor").loops(1)

	// 电磁构件
	// create.sequenced_assembly([
	// 	Item.of("create_feature_engineering:magnet_mechanism")
	// ], "#forge:plates/obsidian", [
	// 	create.deploying("create_feature_engineering:incomplete_magnet_mechanism", ["create_feature_engineering:incomplete_magnet_mechanism", "alexscaves:scarlet_neodymium_ingot"]),
	// 	create.deploying("create_feature_engineering:incomplete_magnet_mechanism", ["create_feature_engineering:incomplete_magnet_mechanism", "alexscaves:azure_neodymium_ingot"]),
	// 	create.deploying("create_feature_engineering:incomplete_magnet_mechanism", ["create_feature_engineering:incomplete_magnet_mechanism", "anvilcraft:circuit_board"]),
	// 	create.deploying("create_feature_engineering:incomplete_magnet_mechanism", ["create_feature_engineering:incomplete_magnet_mechanism", "#neoforge:rubber"]),
	// ]).transitionalItem("create_feature_engineering:incomplete_magnet_mechanism").loops(3)

	// 输电杆
	event.remove("anvilcraft:transmission_pole")
	// create.sequenced_assembly([
	// 	Item.of("anvilcraft:transmission_pole", 2)
	// ], "#forge:storage_blocks/iron", [
	// 	create.deploying("create_feature_engineering:incomplete_transmission_pole", ["create_feature_engineering:incomplete_transmission_pole", "minecraft:lightning_rod"]),
	// 	create.deploying("create_feature_engineering:incomplete_transmission_pole", ["create_feature_engineering:incomplete_transmission_pole", "anvilcraft:magnetoelectric_core"]),
	// ]).transitionalItem("create_feature_engineering:incomplete_transmission_pole").loops(1)

	// 远程输电杆
	event.remove("anvilcraft:remote_transmission_pole")
	// create.sequenced_assembly([
	// 	Item.of("anvilcraft:remote_transmission_pole")
	// ], "anvilcraft:transmission_pole", [
	// 	create.deploying("create_feature_engineering:incomplete_remote_transmission_pole", ["create_feature_engineering:incomplete_remote_transmission_pole", "minecraft:anvil"]),
	// 	create.deploying("create_feature_engineering:incomplete_remote_transmission_pole", ["create_feature_engineering:incomplete_remote_transmission_pole", "minecraft:lightning_rod"]),
	// 	create.deploying("create_feature_engineering:incomplete_remote_transmission_pole", ["create_feature_engineering:incomplete_remote_transmission_pole", "anvilcraft:magnetoelectric_core"]),
	// ]).transitionalItem("create_feature_engineering:incomplete_remote_transmission_pole").loops(1)

	// 加热器
	event.remove("anvilcraft:heater")
	// create.sequenced_assembly([
	// 	Item.of("anvilcraft:heater")
	// ], "create_feature_engineering:sturdy_machine", [
	// 	create.deploying("create_feature_engineering:incomplete_heater", ["create_feature_engineering:incomplete_heater", "moreburners:copper_coil"]),
	// 	create.deploying("create_feature_engineering:incomplete_heater", ["create_feature_engineering:incomplete_heater", "#forge:plates/copper"]),
	// 	create.deploying("create_feature_engineering:incomplete_heater", ["create_feature_engineering:incomplete_heater", "moreburners:copper_coil"]),
	// ]).transitionalItem("create_feature_engineering:incomplete_heater").loops(1)

	// 集电器
	event.remove("anvilcraft:charge_collector")
	// create.sequenced_assembly([
	// 	Item.of("anvilcraft:charge_collector")
	// ], "anvilcraft:magnetoelectric_core", [
	// 	create.deploying("create_feature_engineering:incomplete_charge_collector", ["create_feature_engineering:incomplete_charge_collector", "#forge:ingots/iron"]),
	// 	create.deploying("create_feature_engineering:incomplete_charge_collector", ["create_feature_engineering:incomplete_charge_collector", "#forge:ingots/copper"]),
	// ]).transitionalItem("create_feature_engineering:incomplete_charge_collector").loops(1)

	// 压电晶体
	event.remove({ output: "anvilcraft:piezoelectric_crystal" })
	// create.sequenced_assembly([
	// 	Item.of("anvilcraft:piezoelectric_crystal")
	// ], "#create_feature_engineering:crystal_blocks", [
	// 	create.deploying("create_feature_engineering:incomplete_piezoelectric_crystal", ["create_feature_engineering:incomplete_piezoelectric_crystal", "#forge:plates/copper"]),
	// 	create.deploying("create_feature_engineering:incomplete_piezoelectric_crystal", ["create_feature_engineering:incomplete_piezoelectric_crystal", "#forge:plates/copper"]),
	// ]).transitionalItem("create_feature_engineering:incomplete_piezoelectric_crystal").loops(1)

	//铜构件
	// create.sequenced_assembly([
	// 	Item.of("create_feature_engineering:copper_mechanism")
	// ], "create_feature_engineering:andesite_mechanism", [
	// 	create.deploying("create_feature_engineering:incomplete_copper_mechanism", ["create_feature_engineering:incomplete_copper_mechanism", "#forge:plates/copper"]),
	// 	create.deploying("create_feature_engineering:incomplete_copper_mechanism", ["create_feature_engineering:incomplete_copper_mechanism", "#create_feature_engineering:sap"]),
	// ]).transitionalItem("create_feature_engineering:incomplete_copper_mechanism").loops(1)


	// 物流构件
	create.sequenced_assembly([
		Item.of("create_feature_engineering:logistics_mechanism")
	], "create_feature_engineering:andesite_mechanism", [
		create.deploying("create_feature_engineering:incomplete_logistics_mechanism", ["create_feature_engineering:incomplete_logistics_mechanism", "minecraft:chain"]),
		create.deploying("create_feature_engineering:incomplete_logistics_mechanism", ["create_feature_engineering:incomplete_logistics_mechanism", "create:transmitter"]),
		create.deploying("create_feature_engineering:incomplete_logistics_mechanism", ["create_feature_engineering:incomplete_logistics_mechanism", "create:belt_connector"]),
	]).transitionalItem("create_feature_engineering:incomplete_logistics_mechanism").loops(1)

	// 铜线圈
	event.remove("create_optical:sequenced_assembly/copper_coil")
	// create.sequenced_assembly([
	// 	Item.of("create_optical:copper_coil")
	// ], "create:andesite_alloy", [
	// 	create.deploying("create_optical:incomplete_copper_coil", ["create_optical:incomplete_copper_coil", "#forge:wires/copper"]),
	// 	create.pressing("create_optical:incomplete_copper_coil", ["create_optical:incomplete_copper_coil"]),
	// 	create.deploying("create_optical:incomplete_copper_coil", ["create_optical:incomplete_copper_coil", "#forge:wires/copper"])
	// ]).transitionalItem("create_optical:incomplete_copper_coil").loops(1)

	//糖果构件

	//光学构件
	// create.sequenced_assembly([
	// 	Item.of("create_feature_engineering:optical_mechanism")
	// ], "create_feature_engineering:crystal_core", [
	// 	create.deploying("create_feature_engineering:incomplete_optical_mechanism", ["create_feature_engineering:incomplete_optical_mechanism", "create_optical:mirror"]),
	// 	create.deploying("create_feature_engineering:incomplete_optical_mechanism", ["create_feature_engineering:incomplete_optical_mechanism", "create_optical:polarizing_filter"]),
	// 	create.filling("create_feature_engineering:incomplete_optical_mechanism", ["create_feature_engineering:incomplete_optical_mechanism", Fluid.of("supplementaries:lumisene", 100)])
	// ]).transitionalItem("create_feature_engineering:incomplete_optical_mechanism").loops(1)


	//酷热构件
	// create.sequenced_assembly([
	// 	Item.of("create_dd:infernal_mechanism")
	// ], "create:precision_mechanism", [
	// 	create.deploying("create_dd:incomplete_infernal_mechanism", ["create_dd:incomplete_infernal_mechanism", "#forge:ingots/ember_alloy"]),
	// 	create.filling("create_dd:incomplete_infernal_mechanism", ["create_dd:incomplete_infernal_mechanism", Fluid.of("minecraft:lava", 100)]),
	// 	create.filling("create_dd:incomplete_infernal_mechanism", ["create_dd:incomplete_infernal_mechanism", Fluid.of("spelunkery:portal_fluid", 100)])
	// ]).transitionalItem("create_dd:incomplete_infernal_mechanism").loops(3)
})
