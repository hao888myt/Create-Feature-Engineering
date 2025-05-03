ServerEvents.recipes(event => {
    //安山机器
    //安山隧道
    event.remove("create:crafting/logistics/andesite_tunnel")
    event.stonecutting(Item.of("create:andesite_tunnel", 4), "kubejs:andesite_machine")

    //安山漏斗
    event.remove("create:crafting/logistics/andesite_funnel")
    event.stonecutting(Item.of("create:andesite_funnel", 4), "kubejs:andesite_machine")

    //动力压路机
    event.remove("create:crafting/kinetics/mechanical_roller")
    event.stonecutting(Item.of("create:mechanical_roller", 1), "kubejs:andesite_machine")

    //动力收割机
    event.remove("create:crafting/kinetics/mechanical_harvester")
    event.stonecutting(Item.of("create:mechanical_harvester", 2), "kubejs:andesite_machine")

    //动力犁
    event.remove("create:crafting/kinetics/mechanical_plough")
    event.stonecutting(Item.of("create:mechanical_plough", 2), "kubejs:andesite_machine")

    //链式传动箱
    event.stonecutting(Item.of("create:encased_chain_drive", 4), "kubejs:andesite_machine")

    //反转齿轮箱
    event.stonecutting(Item.of("create:gearshift", 4), "kubejs:andesite_machine")

    //反向反转齿轮箱
    event.stonecutting(Item.of("create_connected:inverted_gearshift", 4), "kubejs:andesite_machine")

    //平行齿轮箱
    event.stonecutting(Item.of("create_connected:parallel_gearbox", 4), "kubejs:andesite_machine")

    //竖直平行齿轮箱
    event.stonecutting(Item.of("create_connected:vertical_parallel_gearbox", 4), "kubejs:andesite_machine")

    //十字齿轮箱
    event.stonecutting(Item.of("create:gearbox", 4), "kubejs:andesite_machine")

    //竖十字齿轮箱
    event.stonecutting(Item.of("create:vertical_gearbox", 4), "kubejs:andesite_machine")


    //黄铜机器
    //黄铜隧道
    event.remove("create:crafting/logistics/brass_tunnel")
    event.stonecutting(Item.of("create:brass_tunnel", 4), "kubejs:brass_machine")

    //黄铜漏斗
    event.remove("create:crafting/logistics/brass_funnel")
    event.stonecutting(Item.of("create:brass_funnel", 4), "kubejs:brass_machine")

    //空鼓风机触媒
    event.remove("create_connected:crafting/kinetics/empty_fan_catalyst")
    event.stonecutting(Item.of("create_connected:empty_fan_catalyst", 4), "kubejs:brass_machine")

    //黄铜十字齿轮箱
    event.remove("create_connected:crafting/kinetics/brass_gearbox")
    event.stonecutting(Item.of("create_connected:brass_gearbox", 2), "kubejs:brass_machine")

    //黄铜竖直十字齿轮箱
    event.stonecutting(Item.of("create_connected:vertical_brass_gearbox", 2), "kubejs:brass_machine")

    //转速控制器
    event.remove("create:crafting/kinetics/rotation_speed_controller")
    event.stonecutting(Item.of("create:rotation_speed_controller", 2), "kubejs:brass_machine")

    //可编程齿轮箱
    event.remove("create:crafting/kinetics/sequenced_gearshift")
    event.stonecutting(Item.of("create:sequenced_gearshift", 2), "kubejs:brass_machine")

    //机械手
    event.stonecutting(Item.of("create:deployer", 4), "kubejs:brass_machine")
})