ServerEvents.recipes(event => {

    const create = event.recipes.create

	//高炉
	create.sequenced_assembly([
		Item.of('minecraft:blast_furnace')
	], '#forge:furnaces', [
		create.deploying('minecraft:furnace', ['kubejs:incomplete_andsite_mechanism', 'minecraft:smooth_stone']),
		create.deploying('minecraft:furnace', ['kubejs:incomplete_andsite_mechanism', '#forge:ingots/iron']),
		create.pressing('minecraft:furnace', 'minecraft:furnace')
	]).transitionalItem('minecraft:furnace').loops(3)

	create.sequenced_assembly([
		Item.of('minecraft:blast_furnace', 2)
	], '#forge:furnaces', [
		create.deploying('minecraft:furnace', ['minecraft:furnace', 'minecraft:smooth_stone']),
		create.deploying('minecraft:furnace', ['minecraft:furnace', '#forge:ingots/industrial_iron']),
		create.pressing('minecraft:furnace', 'minecraft:furnace')
	]).transitionalItem('minecraft:furnace').loops(3)

	//锅炉
	event.remove('immersive_aircraft:boiler')
	create.sequenced_assembly([
		Item.of('immersive_aircraft:boiler')
	], '#forge:furnaces', [
		create.deploying('minecraft:furnace', ['minecraft:furnace', '#forge:ingots/copper']),
		create.pressing('minecraft:furnace', 'minecraft:furnace')
	]).transitionalItem('minecraft:furnace').loops(7)

	//发动机
    event.remove('immersive_aircraft:engine')
	create.sequenced_assembly([
		Item.of('immersive_aircraft:engine')
	], 'minecraft:blast_furnace', [
		create.deploying('minecraft:blast_furnace', ['minecraft:blast_furnace', 'immersive_aircraft:boiler']),
		create.deploying('minecraft:blast_furnace', ['minecraft:blast_furnace', 'minecraft:piston']),
		create.deploying('minecraft:blast_furnace', ['minecraft:blast_furnace', 'minecraft:piston']),
		create.filling('minecraft:blast_furnace', ['minecraft:blast_furnace', Fluid.of('createmetallurgy:molten_iron', 180)]),
	]).transitionalItem('minecraft:blast_furnace').loops(2)

	//机身
	event.remove('immersive_aircraft:hull')
	create.sequenced_assembly([
		Item.of('immersive_aircraft:hull')
	], '#minecraft:logs', [
		create.deploying('minecraft:oak_log', ['minecraft:oak_log', '#minecraft:logs']),
		create.deploying('minecraft:oak_log', ['minecraft:oak_log', '#forge:plates/iron']),
		create.deploying('minecraft:oak_log', ['minecraft:oak_log', '#forge:string']),
	]).transitionalItem('minecraft:oak_log').loops(3)
	create.sequenced_assembly([
		Item.of('immersive_aircraft:hull', 2)
	], '#minecraft:logs', [
		create.deploying('minecraft:oak_log', ['minecraft:oak_log', '#minecraft:logs']),
		create.deploying('minecraft:oak_log', ['minecraft:oak_log', '#forge:plates/industrial_iron']),
		create.deploying('minecraft:oak_log', ['minecraft:oak_log', '#forge:string']),
	]).transitionalItem('minecraft:oak_log').loops(3)

	//增强型螺旋桨
	event.remove('immersive_aircraft:enhanced_propeller')
	create.sequenced_assembly([
		Item.of('immersive_aircraft:enhanced_propeller')
	], 'immersive_aircraft:propeller', [
		create.filling('immersive_aircraft:propeller', ['immersive_aircraft:propeller', Fluid.of('createmetallurgy:molten_copper', 90)]),
		create.pressing('immersive_aircraft:propeller', 'immersive_aircraft:propeller')
	]).transitionalItem('immersive_aircraft:propeller').loops(4)

	//钢制锅炉
	event.remove('immersive_aircraft:steel_boiler')
	create.sequenced_assembly([
		Item.of('immersive_aircraft:steel_boiler')
	], 'minecraft:blast_furnace', [
		create.deploying('minecraft:blast_furnace', ['minecraft:blast_furnace', 'immersive_aircraft:boiler']),
		create.filling('minecraft:blast_furnace', ['minecraft:blast_furnace', Fluid.of('createmetallurgy:molten_steel', 180)])
	]).transitionalItem('minecraft:blast_furnace').loops(2)

	//坚固板
	event.remove('create:sequenced_assembly/sturdy_sheet')
	create.sequenced_assembly([
		Item.of('create:sturdy_sheet', 4)
	], 'spectrum:neolith', [
		create.filling('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', Fluid.of('createmetallurgy:molten_steel', 90)]),
		create.cutting('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet'),
		create.cutting('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet')
	]).transitionalItem('create:unprocessed_obsidian_sheet').loops(1)

	create.sequenced_assembly([
		Item.of('create:sturdy_sheet')
	], 'create:powdered_obsidian', [
		create.filling('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', Fluid.of('createmetallurgy:molten_steel', 180)]),
		create.pressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet'),
		create.pressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet')
	]).transitionalItem('create:unprocessed_obsidian_sheet').loops(1)

	//余烬合金
	// event.remove('create_dd:crafting/ember_alloy')
	// create.sequenced_assembly([
	// 	Item.of('create_dd:ember_alloy')
	// ], '#forge:ingots/industrial_iron', [
	// 	create.filling('#forge:ingots/industrial_iron', ['#forge:ingots/industrial_iron', Fluid.of('minecraft:lava', 200)]),
	// 	create.filling('#forge:ingots/industrial_iron', ['#forge:ingots/industrial_iron', Fluid.of('netherexp:ectoplasm', 100)]),
	// 	create.filling('#forge:ingots/industrial_iron', ['#forge:ingots/industrial_iron', Fluid.of('minecraft:lava', 200)]),
	// ]).transitionalItem('#forge:ingots/industrial_iron').loops(1)

    //安山构件
    create.sequenced_assembly([
		Item.of('kubejs:andesite_mechanism')
	], 'create:andesite_alloy', [
		create.deploying('kubejs:incomplete_andesite_mechanism', ['kubejs:incomplete_andesite_mechanism', 'petrolsparts:coaxial_gear']),
		create.deploying('kubejs:incomplete_andesite_mechanism', ['kubejs:incomplete_andesite_mechanism', 'petrolsparts:coaxial_gear'])
	]).transitionalItem('kubejs:incomplete_andesite_mechanism').loops(1)

	//铜构件
    create.sequenced_assembly([
		Item.of('kubejs:copper_mechanism')
	], 'kubejs:andesite_mechanism', [
		create.deploying('kubejs:incomplete_copper_mechanism', ['kubejs:incomplete_copper_mechanism', '#forge:plates/copper']),
		create.deploying('kubejs:incomplete_copper_mechanism', ['kubejs:incomplete_copper_mechanism', '#kubejs:sap']),
	]).transitionalItem('kubejs:incomplete_copper_mechanism').loops(2)

    //精密构件
    event.remove('create:sequenced_assembly/precision_mechanism')
	create.sequenced_assembly([
		Item.of('create:precision_mechanism')
	], 'kubejs:andesite_mechanism', [
		create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:electron_tube']),
		create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:electron_tube']),
		create.filling('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', Fluid.of('createmetallurgy:molten_gold', 90)])
	]).transitionalItem('create:incomplete_precision_mechanism').loops(1)

	//坚固构件
	create.sequenced_assembly([
		Item.of('kubejs:sturdy_mechanism')
	], 'create:precision_mechanism', [
		create.deploying('kubejs:incomplete_sturdy_mechanism', ['kubejs:incomplete_sturdy_mechanism', '#forge:plates/obsidian']),
		create.filling('kubejs:incomplete_sturdy_mechanism', ['kubejs:incomplete_sturdy_mechanism', Fluid.of('createmetallurgy:molten_tungsten', 90)]),
		create.pressing('kubejs:incomplete_sturdy_mechanism', 'kubejs:incomplete_sturdy_mechanism')
	]).transitionalItem('kubejs:incomplete_sturdy_mechanism').loops(2)


	//电磁构件
	create.sequenced_assembly([
		Item.of('kubejs:magnet_mechanism')
	], 'kubejs:copper_mechanism', [
		create.deploying('kubejs:incomplete_magnet_mechanism', ['kubejs:incomplete_magnet_mechanism', 'alexscaves:scarlet_neodymium_ingot']),
		create.deploying('kubejs:incomplete_magnet_mechanism', ['kubejs:incomplete_magnet_mechanism', 'alexscaves:azure_neodymium_ingot']),
		create.filling('kubejs:incomplete_magnet_mechanism', ['kubejs:incomplete_magnet_mechanism', Fluid.of('createmetallurgy:molten_lead', 90)]),
		create.deploying('kubejs:incomplete_magnet_mechanism', ['kubejs:incomplete_magnet_mechanism', '#forge:rubber']),
	]).transitionalItem('kubejs:incomplete_magnet_mechanism').loops(3)

	//糖果构件

	//光学构件
	// create.sequenced_assembly([
	// 	Item.of('kubejs:optical_mechanism')
	// ], 'kubejs:crystal_mechanism', [
	// 	create.deploying('kubejs:incomplete_optical_mechanism', ['kubejs:incomplete_optical_mechanism', '#forge:ingots/refined_radiance']),
	// 	create.deploying('kubejs:incomplete_optical_mechanism', ['kubejs:incomplete_optical_mechanism', '#quark:corundum']),
	// 	create.filling('kubejs:incomplete_optical_mechanism', ['kubejs:incomplete_optical_mechanism', Fluid.of('create_dd:shimmer', 100)])
	// ]).transitionalItem('kubejs:incomplete_optical_mechanism').loops(3)


	//酷热构件
	// create.sequenced_assembly([
	// 	Item.of('create_dd:infernal_mechanism')
	// ], 'create:precision_mechanism', [
	// 	create.deploying('create_dd:incomplete_infernal_mechanism', ['create_dd:incomplete_infernal_mechanism', '#forge:ingots/ember_alloy']),
	// 	create.filling('create_dd:incomplete_infernal_mechanism', ['create_dd:incomplete_infernal_mechanism', Fluid.of('minecraft:lava', 100)]),
	// 	create.filling('create_dd:incomplete_infernal_mechanism', ['create_dd:incomplete_infernal_mechanism', Fluid.of('spelunkery:portal_fluid', 100)])
	// ]).transitionalItem('create_dd:incomplete_infernal_mechanism').loops(3)

	//寂静构件

	//末影构件

	//幽匿构件

	//核能构件

	//湮灭构件

	//终焉构件

	//水晶构件
	create.sequenced_assembly([
		Item.of('kubejs:crystal_mechanism')
	], 'spectrum:polished_calcite_slab', [
		create.deploying('kubejs:incomplete_crystal_mechanism', ['kubejs:incomplete_crystal_mechanism', 'minecraft:amethyst_shard']),
		create.deploying('kubejs:incomplete_crystal_mechanism', ['kubejs:incomplete_crystal_mechanism', 'spectrum:citrine_shard']),
		create.deploying('kubejs:incomplete_crystal_mechanism', ['kubejs:incomplete_crystal_mechanism', 'spectrum:topaz_shard'])
	]).transitionalItem('kubejs:incomplete_crystal_mechanism').loops(1)

	//缟玛瑙构件
	create.sequenced_assembly([
		Item.of('kubejs:onyx_mechanism')
	], 'kubejs:crystal_mechanism', [
		create.deploying('kubejs:incomplete_onyx_mechanism', ['kubejs:incomplete_onyx_mechanism', 'spectrum:onyx_shard']),
		create.filling('kubejs:incomplete_onyx_mechanism', ['kubejs:incomplete_onyx_mechanism', Fluid.of('minecraft:lava', 500)]),
	]).transitionalItem('kubejs:incomplete_onyx_mechanism').loops(1)


	// // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
	// let inter = 'kubejs:incomplete_spore_blossom' // making a variable to store the transitional item makes the code more readable
	// event.recipes.create.sequenced_assembly([
	// 	Item.of('minecraft:spore_blossom').withChance(16.0), // this is the item that will appear in JEI as the result
	// 	Item.of('minecraft:flowering_azalea_leaves').withChance(16.0), // the rest of these items will be part of the scrap
	// 	Item.of('minecraft:azalea_leaves').withChance(2.0),
	// 	'minecraft:oak_leaves',
	// 	'minecraft:spruce_leaves',
	// 	'minecraft:birch_leaves',
	// 	'minecraft:jungle_leaves',
	// 	'minecraft:acacia_leaves',
	// 	'minecraft:dark_oak_leaves'
	// ], 'minecraft:flowering_azalea_leaves', [ // 'minecraft:flowering_azalea_leaves' is the input
	// 	// the transitional item is a variable, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly
	// 	event.recipes.createPressing(inter, inter),
	// 	// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	// 	event.recipes.createDeploying(inter, [inter, 'minecraft:hanging_roots']),
	// 	event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
	// 	event.recipes.createDeploying(inter, [inter, 'minecraft:moss_carpet']),
	// 	event.recipes.createCutting(inter, inter)
	// ]).transitionalItem(inter).loops(2) // set the transitional item and the number of loops
})