ServerEvents.recipes(event => {

    const create = event.recipes.create

	//坚固板
	event.remove("create:sequenced_assembly/sturdy_sheet")
	create.sequenced_assembly([
		Item.of("create:sturdy_sheet", 4)
	], "spectrum:neolith", [
		create.filling("create:unprocessed_obsidian_sheet", ["create:unprocessed_obsidian_sheet", Fluid.of("createmetallurgy:molten_steel", 90)]),
		create.cutting("create:unprocessed_obsidian_sheet", "create:unprocessed_obsidian_sheet"),
		create.cutting("create:unprocessed_obsidian_sheet", "create:unprocessed_obsidian_sheet")
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
		create.deploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "create:electron_tube"]),
		create.deploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "create:electron_tube"]),
		create.filling("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", Fluid.of("createmetallurgy:molten_gold", 90)])
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

	// 电路板
	event.remove("anvilcraft:circuit_board")
	create.sequenced_assembly([
		Item.of("anvilcraft:circuit_board")
	], "anvilcraft:hardend_resin", [
		create.deploying("kubejs:incomplete_circuit_board", ["kubejs:incomplete_circuit_board", "create:electron_tube"]),
		create.deploying("kubejs:incomplete_circuit_board", ["kubejs:incomplete_circuit_board", "#forge:wires/copper"]),
		create.deploying("kubejs:incomplete_circuit_board", ["kubejs:incomplete_circuit_board", "#forge:wires/copper"])
	]).transitionalItem("kubejs:incomplete_circuit_board").loops(2)

	// 电磁构件
	create.sequenced_assembly([
		Item.of("kubejs:magnet_mechanism")
	], "#forge:plates/obsidian", [
		create.deploying("kubejs:incomplete_magnet_mechanism", ["kubejs:incomplete_magnet_mechanism", "alexscaves:scarlet_neodymium_ingot"]),
		create.deploying("kubejs:incomplete_magnet_mechanism", ["kubejs:incomplete_magnet_mechanism", "alexscaves:azure_neodymium_ingot"]),
		create.deploying("kubejs:incomplete_magnet_mechanism", ["kubejs:incomplete_magnet_mechanism", "anvilcraft:circuit_board"]),
		create.deploying("kubejs:incomplete_magnet_mechanism", ["kubejs:incomplete_magnet_mechanism", "#forge:rubber"]),
	]).transitionalItem("kubejs:incomplete_magnet_mechanism").loops(3)


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
	], "kubejs:crystal_mechanism", [
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

	//水晶构件
	create.sequenced_assembly([
		Item.of("kubejs:crystal_mechanism")
	], "spectrum:polished_calcite_slab", [
		create.deploying("kubejs:incomplete_crystal_mechanism", ["kubejs:incomplete_crystal_mechanism", "minecraft:amethyst_shard"]),
		create.deploying("kubejs:incomplete_crystal_mechanism", ["kubejs:incomplete_crystal_mechanism", "spectrum:citrine_shard"]),
		create.deploying("kubejs:incomplete_crystal_mechanism", ["kubejs:incomplete_crystal_mechanism", "spectrum:topaz_shard"])
	]).transitionalItem("kubejs:incomplete_crystal_mechanism").loops(1)

	//缟玛瑙构件
	create.sequenced_assembly([
		Item.of("kubejs:onyx_mechanism")
	], "kubejs:crystal_mechanism", [
		create.deploying("kubejs:incomplete_onyx_mechanism", ["kubejs:incomplete_onyx_mechanism", "spectrum:polished_basalt_slab"]),
		create.deploying("kubejs:incomplete_onyx_mechanism", ["kubejs:incomplete_onyx_mechanism", "spectrum:onyx_shard"]),
		create.filling("kubejs:incomplete_onyx_mechanism", ["kubejs:incomplete_onyx_mechanism", Fluid.of("minecraft:lava", 500)]),
	]).transitionalItem("kubejs:incomplete_onyx_mechanism").loops(1)
})