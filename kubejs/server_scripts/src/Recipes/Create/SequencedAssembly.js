ServerEvents.recipes(event => {

	const create = event.recipes.create

	//坚固板
	event.remove("create:sequenced_assembly/sturdy_sheet")
	create.sequenced_assembly([
		Item.of("create:sturdy_sheet", 4)
	], "spectrum:neolith", [
		create.filling("create:unprocessed_obsidian_sheet", ["create:unprocessed_obsidian_sheet", Fluid.of("createmetallurgy:molten_steel", 90)]),
		create.pressing("create:unprocessed_obsidian_sheet", "create:unprocessed_obsidian_sheet"),
		create.pressing("create:unprocessed_obsidian_sheet", "create:unprocessed_obsidian_sheet")
	]).transitionalItem("create:unprocessed_obsidian_sheet").loops(1)

	create.sequenced_assembly([
		Item.of("create:sturdy_sheet")
	], "create:powdered_obsidian", [
		create.filling("create:unprocessed_obsidian_sheet", ["create:unprocessed_obsidian_sheet", Fluid.of("createmetallurgy:molten_steel", 180)]),
		create.pressing("create:unprocessed_obsidian_sheet", "create:unprocessed_obsidian_sheet"),
		create.pressing("create:unprocessed_obsidian_sheet", "create:unprocessed_obsidian_sheet")
	]).transitionalItem("create:unprocessed_obsidian_sheet").loops(1)

	//安山构件
	create.sequenced_assembly([
		Item.of("kubejs:andesite_mechanism")
	], "create:andesite_alloy", [
		create.deploying("kubejs:incomplete_andesite_mechanism", ["kubejs:incomplete_andesite_mechanism", "petrolsparts:coaxial_gear"]),
		create.deploying("kubejs:incomplete_andesite_mechanism", ["kubejs:incomplete_andesite_mechanism", "petrolsparts:coaxial_gear"])
	]).transitionalItem("kubejs:incomplete_andesite_mechanism").loops(1)

	//删除流体构件配方
	event.remove("create_factory_logistics:sequenced_assembly/fluid_mechanism")

	//精密构件
	event.remove("create:sequenced_assembly/precision_mechanism")
	create.sequenced_assembly([
		Item.of("create:precision_mechanism")
	], "kubejs:andesite_mechanism", [
		create.filling("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", Fluid.of("createdieselgenerators:biodiesel", 250)]),
		create.deploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "create:electron_tube"]),
		create.filling("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", Fluid.of("createmetallurgy:molten_gold", 90)]),
	]).transitionalItem("create:incomplete_precision_mechanism").loops(1)

	//坚固构件
	create.sequenced_assembly([
		Item.of("kubejs:sturdy_mechanism")
	], "create:precision_mechanism", [
		create.deploying("kubejs:incomplete_sturdy_mechanism", ["kubejs:incomplete_sturdy_mechanism", "#forge:plates/obsidian"]),
		create.filling("kubejs:incomplete_sturdy_mechanism", ["kubejs:incomplete_sturdy_mechanism", Fluid.of("createmetallurgy:molten_tungsten", 90)]),
		create.pressing("kubejs:incomplete_sturdy_mechanism", "kubejs:incomplete_sturdy_mechanism"),
		create.filling("kubejs:incomplete_sturdy_mechanism", ["kubejs:incomplete_sturdy_mechanism", Fluid.of("createmetallurgy:molten_zinc", 180)]),
	]).transitionalItem("kubejs:incomplete_sturdy_mechanism").loops(2)

	// 熔铸搅拌器
	event.remove("createmetallurgy:crafting/content/foundry_mixer")
	create.sequenced_assembly([
		Item.of("createmetallurgy:foundry_mixer")
	], "kubejs:sturdy_machine", [
		create.deploying("kubejs:incomplete_foundry_mixer", ["kubejs:incomplete_foundry_mixer", "#forge:plates/iron"]),
		create.deploying("kubejs:incomplete_foundry_mixer", ["kubejs:incomplete_foundry_mixer", "#forge:rods/steel"]),
		create.deploying("kubejs:incomplete_foundry_mixer", ["kubejs:incomplete_foundry_mixer", "createmetallurgy:sturdy_whisk"]),
	]).transitionalItem("kubejs:incomplete_foundry_mixer").loops(1)

	// 分馏塔控制器
	event.remove("createdieselgenerators:crafting/distillation_controller")
	create.sequenced_assembly([
		Item.of("createdieselgenerators:distillation_controller", 2)
	], "kubejs:sturdy_mechanism", [
		create.deploying("kubejs:incomplete_distillation_controller", ["kubejs:incomplete_distillation_controller", "minecraft:clock"]),
		create.deploying("kubejs:incomplete_distillation_controller", ["kubejs:incomplete_distillation_controller", "create:andesite_alloy"]),
		create.deploying("kubejs:incomplete_distillation_controller", ["kubejs:incomplete_distillation_controller", "create:fluid_pipe"]),
	]).transitionalItem("kubejs:incomplete_distillation_controller").loops(1)

	// 批量发酵器
	event.remove("createdieselgenerators:crafting/bulk_fermenter")
	create.sequenced_assembly([
		Item.of("createdieselgenerators:bulk_fermenter", 3)
	], "kubejs:sturdy_machine", [
		create.deploying("kubejs:incomplete_bulk_fermenter", ["kubejs:incomplete_bulk_fermenter", "createdieselgenerators:basin_lid"]),
		create.deploying("kubejs:incomplete_bulk_fermenter", ["kubejs:incomplete_bulk_fermenter", "#kubejs:fluid_tanks"]),
	]).transitionalItem("kubejs:incomplete_bulk_fermenter").loops(1)

	// 冲击桩
	event.remove("anvilcraft:impact_pile")
	create.sequenced_assembly([
		Item.of("anvilcraft:impact_pile")
	], "kubejs:sturdy_machine", [
		create.deploying("kubejs:incomplete_impact_pile", ["kubejs:incomplete_impact_pile", "#forge:plates/obsidian"]),
		create.pressing("kubejs:incomplete_impact_pile", ["kubejs:incomplete_impact_pile"]),
		create.filling("kubejs:incomplete_impact_pile", ["kubejs:incomplete_impact_pile", Fluid.of("createdieselgenerators:biodiesel", 250)]),
	]).transitionalItem("kubejs:incomplete_impact_pile").loops(3)
	create.sequenced_assembly([
		Item.of("anvilcraft:impact_pile", 4)
	], "kubejs:sturdy_machine", [
		create.deploying("kubejs:incomplete_impact_pile", ["kubejs:incomplete_impact_pile", "#forge:plates/obsidian"]),
		create.pressing("kubejs:incomplete_impact_pile", ["kubejs:incomplete_impact_pile"]),
		create.filling("kubejs:incomplete_impact_pile", ["kubejs:incomplete_impact_pile", Fluid.of("createdieselgenerators:diesel", 250)]),
	]).transitionalItem("kubejs:incomplete_impact_pile").loops(1)

	// 柴油引擎
	event.remove("createdieselgenerators:crafting/diesel_engine")
	create.sequenced_assembly([
		Item.of("createdieselgenerators:diesel_engine")
	], "kubejs:sturdy_machine", [
		create.deploying("kubejs:incomplete_diesel_engine", ["kubejs:incomplete_diesel_engine", "#kubejs:fluid_tanks"]),
		create.deploying("kubejs:incomplete_diesel_engine", ["kubejs:incomplete_diesel_engine", "#forge:storage_blocks/brass"]),
		create.deploying("kubejs:incomplete_diesel_engine", ["kubejs:incomplete_diesel_engine", "createdieselgenerators:engine_piston"]),
	]).transitionalItem("kubejs:incomplete_diesel_engine").loops(1)

	// 抽油机油泵
	event.remove("createdieselgenerators:crafting/pumpjack_hole")
	create.sequenced_assembly([
		Item.of("createdieselgenerators:pumpjack_hole")
	], "kubejs:sturdy_machine", [
		create.deploying("kubejs:incomplete_pumpjack_hole", ["kubejs:incomplete_pumpjack_hole", "#supplementaries:chains"]),
		create.deploying("kubejs:incomplete_pumpjack_hole", ["kubejs:incomplete_pumpjack_hole", "create:mechanical_pump"]),
		create.deploying("kubejs:incomplete_pumpjack_hole", ["kubejs:incomplete_pumpjack_hole", "create:fluid_pipe"]),
	]).transitionalItem("kubejs:incomplete_pumpjack_hole").loops(1)

	// 抽油机曲柄
	event.remove("createdieselgenerators:mechanical_crafting/pumpjack_crank")
	create.sequenced_assembly([
		Item.of("createdieselgenerators:pumpjack_crank")
	], "kubejs:sturdy_machine", [
		create.deploying("kubejs:incomplete_pumpjack_crank", ["kubejs:incomplete_pumpjack_crank", "create:shaft"]),
		create.deploying("kubejs:incomplete_pumpjack_crank", ["kubejs:incomplete_pumpjack_crank", "#forge:ingots/zinc"]),
		create.deploying("kubejs:incomplete_pumpjack_crank", ["kubejs:incomplete_pumpjack_crank", "create:andesite_alloy"]),
	]).transitionalItem("kubejs:incomplete_pumpjack_crank").loops(1)

	// 抽油机驴头
	event.remove("createdieselgenerators:mechanical_crafting/pumpjack_head")
	create.sequenced_assembly([
		Item.of("createdieselgenerators:pumpjack_head")
	], "kubejs:sturdy_machine", [
		create.deploying("kubejs:incomplete_pumpjack_head", ["kubejs:incomplete_pumpjack_head", "minecraft:dried_kelp"]),
		create.deploying("kubejs:incomplete_pumpjack_head", ["kubejs:incomplete_pumpjack_head", "#forge:ingots/zinc"]),
		create.deploying("kubejs:incomplete_pumpjack_head", ["kubejs:incomplete_pumpjack_head", "create:andesite_alloy"]),
	]).transitionalItem("kubejs:incomplete_pumpjack_head").loops(1)

	// 抽油机轴承
	event.remove("createdieselgenerators:crafting/pumpjack_bearing")
	create.sequenced_assembly([
		Item.of("createdieselgenerators:pumpjack_bearing")
	], "kubejs:sturdy_machine", [
		create.deploying("kubejs:incomplete_pumpjack_bearing", ["kubejs:incomplete_pumpjack_bearing", "create:mechanical_bearing"]),
		create.deploying("kubejs:incomplete_pumpjack_bearing", ["kubejs:incomplete_pumpjack_bearing", "#forge:ingots/zinc"]),
		create.deploying("kubejs:incomplete_pumpjack_bearing", ["kubejs:incomplete_pumpjack_bearing", "create:andesite_alloy"]),
	]).transitionalItem("kubejs:incomplete_pumpjack_bearing").loops(1)

	// 电路板
	event.remove("anvilcraft:circuit_board")
	create.sequenced_assembly([
		Item.of("anvilcraft:circuit_board")
	], "anvilcraft:hardend_resin", [
		create.deploying("kubejs:incomplete_circuit_board", ["kubejs:incomplete_circuit_board", "create:electron_tube"]),
		create.deploying("kubejs:incomplete_circuit_board", ["kubejs:incomplete_circuit_board", "#forge:wires/copper"]),
		create.deploying("kubejs:incomplete_circuit_board", ["kubejs:incomplete_circuit_board", "#forge:wires/copper"])
	]).transitionalItem("kubejs:incomplete_circuit_board").loops(2)

	// 磁电核心
	event.remove({ output: "anvilcraft:magnetoelectric_core" })
	create.sequenced_assembly([
		Item.of("anvilcraft:magnetoelectric_core", 2)
	], "anvilcraft:magnet_block", [
		create.deploying("kubejs:incomplete_magnetoelectric_core", ["kubejs:incomplete_magnetoelectric_core", "kubejs:silicon_plate"]),
		create.filling("kubejs:incomplete_magnetoelectric_core", ["kubejs:incomplete_magnetoelectric_core", Fluid.of("kubejs:lubricant", 100)]),
		create.deploying("kubejs:incomplete_magnetoelectric_core", ["kubejs:incomplete_magnetoelectric_core", "create_optical:copper_coil"]),
	]).transitionalItem("kubejs:incomplete_magnetoelectric_core").loops(3)

	// 电容器
	event.remove("anvilcraft:capacitor_empty")
	event.remove("createaddition:crafting/capacitor_1")
	event.remove("createaddition:crafting/capacitor_2")
	create.sequenced_assembly([
		Item.of("anvilcraft:capacitor_empty", 4)
	], "#kubejs:sap", [
		create.deploying("kubejs:incomplete_capacitor", ["kubejs:incomplete_capacitor", "#forge:plates/copper"]),
		create.deploying("kubejs:incomplete_capacitor", ["kubejs:incomplete_capacitor", "minecraft:redstone_torch"]),
		create.deploying("kubejs:incomplete_capacitor", ["kubejs:incomplete_capacitor", "#forge:plates/zinc"]),
	]).transitionalItem("kubejs:incomplete_capacitor").loops(1)

	// 电磁构件
	create.sequenced_assembly([
		Item.of("kubejs:magnet_mechanism")
	], "#forge:plates/obsidian", [
		create.deploying("kubejs:incomplete_magnet_mechanism", ["kubejs:incomplete_magnet_mechanism", "alexscaves:scarlet_neodymium_ingot"]),
		create.deploying("kubejs:incomplete_magnet_mechanism", ["kubejs:incomplete_magnet_mechanism", "alexscaves:azure_neodymium_ingot"]),
		create.deploying("kubejs:incomplete_magnet_mechanism", ["kubejs:incomplete_magnet_mechanism", "anvilcraft:circuit_board"]),
		create.deploying("kubejs:incomplete_magnet_mechanism", ["kubejs:incomplete_magnet_mechanism", "#forge:rubber"]),
	]).transitionalItem("kubejs:incomplete_magnet_mechanism").loops(3)

	// 电动马达
	event.remove("createaddition:mechanical_crafting/electric_motor")
	create.sequenced_assembly([
		Item.of("createaddition:electric_motor")
	], "kubejs:magnet_machine", [
		create.deploying("kubejs:incomplete_electric_motor", ["kubejs:incomplete_electric_motor", "#forge:plates/brass"]),
		create.deploying("kubejs:incomplete_electric_motor", ["kubejs:incomplete_electric_motor", "#anvilcraft:capacitor"]),
		create.deploying("kubejs:incomplete_electric_motor", ["kubejs:incomplete_electric_motor", "anvilcraft:magnetoelectric_core"])
	]).transitionalItem("kubejs:incomplete_electric_motor").loops(1)

	// 交流发电机
	event.remove("createaddition:mechanical_crafting/alternator")
	create.sequenced_assembly([
		Item.of("createaddition:alternator")
	], "kubejs:magnet_machine", [
		create.deploying("kubejs:incomplete_alternator", ["kubejs:incomplete_alternator", "#forge:plates/iron"]),
		create.deploying("kubejs:incomplete_alternator", ["kubejs:incomplete_alternator", "#anvilcraft:capacitor"]),
		create.deploying("kubejs:incomplete_alternator", ["kubejs:incomplete_alternator", "anvilcraft:magnetoelectric_core"])
	]).transitionalItem("kubejs:incomplete_alternator").loops(1)

	// 特斯拉线圈
	event.remove("createaddition:mechanical_crafting/tesla_coil")
	create.sequenced_assembly([
		Item.of("createaddition:tesla_coil")
	], "kubejs:magnet_machine", [
		create.deploying("kubejs:incomplete_tesla_coil", ["kubejs:incomplete_tesla_coil", "createaddition:electrum_spool"]),
		create.deploying("kubejs:incomplete_tesla_coil", ["kubejs:incomplete_tesla_coil", "#anvilcraft:capacitor"]),
		create.deploying("kubejs:incomplete_tesla_coil", ["kubejs:incomplete_tesla_coil", "anvilcraft:magnetoelectric_core"])
	]).transitionalItem("kubejs:incomplete_tesla_coil").loops(1)

	// 蓄电池
	event.remove({ output: "createaddition:modular_accumulator" })
	create.sequenced_assembly([
		Item.of("createaddition:modular_accumulator", 3)
	], "kubejs:magnet_machine", [
		create.deploying("kubejs:incomplete_modular_accumulator", ["kubejs:incomplete_modular_accumulator", "anvilcraft:magnetoelectric_core"]),
		create.deploying("kubejs:incomplete_modular_accumulator", ["kubejs:incomplete_modular_accumulator", "#anvilcraft:capacitor"]),
		create.deploying("kubejs:incomplete_modular_accumulator", ["kubejs:incomplete_modular_accumulator", "#forge:plates/electrum"])
	]).transitionalItem("kubejs:incomplete_modular_accumulator").loops(1)

	// 连接器
	event.remove({ output: "createaddition:connector" })
	create.sequenced_assembly([
		Item.of("createaddition:connector", 4)
	], "kubejs:magnet_mechanism", [
		create.deploying("kubejs:incomplete_connector", ["kubejs:incomplete_connector", "#forge:rods/copper"]),
		create.deploying("kubejs:incomplete_connector", ["kubejs:incomplete_connector", "#forge:slimeballs"])
	]).transitionalItem("kubejs:incomplete_connector").loops(1)

	// 大型连接器
	event.remove({ output: "createaddition:large_connector" })
	create.sequenced_assembly([
		Item.of("createaddition:large_connector", 4)
	], "kubejs:magnet_mechanism", [
		create.deploying("kubejs:incomplete_large_connector", ["kubejs:incomplete_large_connector", "#forge:rods/electrum"]),
		create.deploying("kubejs:incomplete_large_connector", ["kubejs:incomplete_large_connector", "#forge:slimeballs"])
	]).transitionalItem("kubejs:incomplete_larger_connector").loops(1)

	// 移动式能量接口
	event.remove("createaddition:crafting/portable_energy_interface")
	create.sequenced_assembly([
		Item.of("createaddition:portable_energy_interface", 4)
	], "kubejs:magnet_machine", [
		create.deploying("kubejs:incomplete_portable_energy_interface", ["kubejs:incomplete_portable_energy_interface", "#anvilcraft:capacitor"]),
		create.deploying("kubejs:incomplete_portable_energy_interface", ["kubejs:incomplete_portable_energy_interface", "createaddition:copper_spool"])
	]).transitionalItem("kubejs:incomplete_portable_energy_interface").loops(1)

	// 输电杆
	event.remove("anvilcraft:transmission_pole")
	create.sequenced_assembly([
		Item.of("anvilcraft:transmission_pole", 2)
	], "#forge:storage_blocks/iron", [
		create.deploying("kubejs:incomplete_transmission_pole", ["kubejs:incomplete_transmission_pole", "minecraft:lightning_rod"]),
		create.deploying("kubejs:incomplete_transmission_pole", ["kubejs:incomplete_transmission_pole", "anvilcraft:magnetoelectric_core"]),
	]).transitionalItem("kubejs:incomplete_transmission_pole").loops(1)

	// 远程输电杆
	event.remove("anvilcraft:remote_transmission_pole")
	create.sequenced_assembly([
		Item.of("anvilcraft:remote_transmission_pole")
	], "anvilcraft:transmission_pole", [
		create.deploying("kubejs:incomplete_remote_transmission_pole", ["kubejs:incomplete_remote_transmission_pole", "minecraft:anvil"]),
		create.deploying("kubejs:incomplete_remote_transmission_pole", ["kubejs:incomplete_remote_transmission_pole", "minecraft:lightning_rod"]),
		create.deploying("kubejs:incomplete_remote_transmission_pole", ["kubejs:incomplete_remote_transmission_pole", "anvilcraft:magnetoelectric_core"]),
	]).transitionalItem("kubejs:incomplete_remote_transmission_pole").loops(1)

	// 加热器
	event.remove("anvilcraft:heater")
	create.sequenced_assembly([
		Item.of("anvilcraft:heater")
	], "kubejs:sturdy_machine", [
		create.deploying("kubejs:incomplete_heater", ["kubejs:incomplete_heater", "moreburners:copper_coil"]),
		create.deploying("kubejs:incomplete_heater", ["kubejs:incomplete_heater", "#forge:plates/copper"]),
		create.deploying("kubejs:incomplete_heater", ["kubejs:incomplete_heater", "moreburners:copper_coil"]),
	]).transitionalItem("kubejs:incomplete_heater").loops(1)

	// 集电器
	event.remove("anvilcraft:charge_collector")
	create.sequenced_assembly([
		Item.of("anvilcraft:charge_collector")
	], "anvilcraft:magnetoelectric_core", [
		create.deploying("kubejs:incomplete_charge_collector", ["kubejs:incomplete_charge_collector", "#forge:ingots/iron"]),
		create.deploying("kubejs:incomplete_charge_collector", ["kubejs:incomplete_charge_collector", "#forge:ingots/copper"]),
	]).transitionalItem("kubejs:incomplete_charge_collector").loops(1)

	// 压电晶体
	event.remove({ output: "anvilcraft:piezoelectric_crystal"})
	create.sequenced_assembly([
		Item.of("anvilcraft:piezoelectric_crystal")
	], "#kubejs:crystal_blocks", [
		create.deploying("kubejs:incomplete_piezoelectric_crystal", ["kubejs:incomplete_piezoelectric_crystal", "#forge:plates/copper"]),
		create.deploying("kubejs:incomplete_piezoelectric_crystal", ["kubejs:incomplete_piezoelectric_crystal", "#forge:plates/copper"]),
	]).transitionalItem("kubejs:incomplete_piezoelectric_crystal").loops(1)

	//铜构件
	create.sequenced_assembly([
		Item.of("kubejs:copper_mechanism")
	], "kubejs:andesite_mechanism", [
		create.deploying("kubejs:incomplete_copper_mechanism", ["kubejs:incomplete_copper_mechanism", "#forge:plates/copper"]),
		create.deploying("kubejs:incomplete_copper_mechanism", ["kubejs:incomplete_copper_mechanism", "#kubejs:sap"]),
	]).transitionalItem("kubejs:incomplete_copper_mechanism").loops(1)


	// 物流构件
	create.sequenced_assembly([
		Item.of("kubejs:logistics_mechanism")
	], "kubejs:andesite_mechanism", [
		create.deploying("kubejs:incomplete_logistics_mechanism", ["kubejs:incomplete_logistics_mechanism", "minecraft:chain"]),
		create.deploying("kubejs:incomplete_logistics_mechanism", ["kubejs:incomplete_logistics_mechanism", "create:transmitter"]),
		create.deploying("kubejs:incomplete_logistics_mechanism", ["kubejs:incomplete_logistics_mechanism", "create:belt_connector"]),
	]).transitionalItem("kubejs:incomplete_logistics_mechanism").loops(1)

	// 铜线圈
	event.remove("create_optical:sequenced_assembly/copper_coil")
	create.sequenced_assembly([
		Item.of("create_optical:copper_coil")
	], "create:andesite_alloy", [
		create.deploying("create_optical:incomplete_copper_coil", ["create_optical:incomplete_copper_coil", "#forge:wires/copper"]),
		create.pressing("create_optical:incomplete_copper_coil", ["create_optical:incomplete_copper_coil"]),
		create.deploying("create_optical:incomplete_copper_coil", ["create_optical:incomplete_copper_coil", "#forge:wires/copper"])
	]).transitionalItem("create_optical:incomplete_copper_coil").loops(1)

	//糖果构件

	//光学构件
	create.sequenced_assembly([
		Item.of("kubejs:optical_mechanism")
	], "kubejs:crystal_core", [
		create.deploying("kubejs:incomplete_optical_mechanism", ["kubejs:incomplete_optical_mechanism", "create_optical:mirror"]),
		create.deploying("kubejs:incomplete_optical_mechanism", ["kubejs:incomplete_optical_mechanism", "create_optical:polarizing_filter"]),
		create.filling("kubejs:incomplete_optical_mechanism", ["kubejs:incomplete_optical_mechanism", Fluid.of("supplementaries:lumisene", 100)])
	]).transitionalItem("kubejs:incomplete_optical_mechanism").loops(1)


	//酷热构件
	// create.sequenced_assembly([
	// 	Item.of("create_dd:infernal_mechanism")
	// ], "create:precision_mechanism", [
	// 	create.deploying("create_dd:incomplete_infernal_mechanism", ["create_dd:incomplete_infernal_mechanism", "#forge:ingots/ember_alloy"]),
	// 	create.filling("create_dd:incomplete_infernal_mechanism", ["create_dd:incomplete_infernal_mechanism", Fluid.of("minecraft:lava", 100)]),
	// 	create.filling("create_dd:incomplete_infernal_mechanism", ["create_dd:incomplete_infernal_mechanism", Fluid.of("spelunkery:portal_fluid", 100)])
	// ]).transitionalItem("create_dd:incomplete_infernal_mechanism").loops(3)

	//寂静构件

	//末影构件

	//幽匿构件

	//核能构件

	//湮灭构件

	//终焉构件

	//水晶核心
	create.sequenced_assembly([
		Item.of("kubejs:crystal_core")
	], "spectrum:polished_calcite_slab", [
		create.deploying("kubejs:incomplete_crystal_mechanism", ["kubejs:incomplete_crystal_mechanism", "minecraft:amethyst_shard"]),
		create.deploying("kubejs:incomplete_crystal_mechanism", ["kubejs:incomplete_crystal_mechanism", "spectrum:citrine_shard"]),
		create.deploying("kubejs:incomplete_crystal_mechanism", ["kubejs:incomplete_crystal_mechanism", "spectrum:topaz_shard"])
	]).transitionalItem("kubejs:incomplete_crystal_mechanism").loops(1)

	//缟玛瑙构件
	create.sequenced_assembly([
		Item.of("kubejs:onyx_mechanism")
	], "kubejs:crystal_core", [
		create.deploying("kubejs:incomplete_onyx_mechanism", ["kubejs:incomplete_onyx_mechanism", "spectrum:polished_basalt_slab"]),
		create.deploying("kubejs:incomplete_onyx_mechanism", ["kubejs:incomplete_onyx_mechanism", "spectrum:onyx_shard"]),
		create.filling("kubejs:incomplete_onyx_mechanism", ["kubejs:incomplete_onyx_mechanism", Fluid.of("minecraft:lava", 500)]),
	]).transitionalItem("kubejs:incomplete_onyx_mechanism").loops(1)
})