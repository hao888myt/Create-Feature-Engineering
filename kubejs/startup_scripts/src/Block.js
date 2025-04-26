StartupEvents.registry("block", event =>{
    
    let machine = (name) => {
        let id = name.toLowerCase()
            event.create(id + '_machine')
                .model('kubejs:block/' + id + '_machine')
                .hardness(3.0)
                .notSolid()
                .tagBlock("create:wrench_pickup")
                .tagBlock("minecraft:mineable/pickaxe")
        }
        
        machine('Andesite') //安山机器
        machine('Brass') //黄铜机器
        machine('Sturdy') //坚固机器
        machine('Magnet') //电磁机器
        machine('Infernal') //炼狱机器
        machine('Sculk') //幽匿机器
        machine('Nuclear') //核能机器
        machine('Endless') //终焉机器
    
        machine('Crystal') //水晶机器
        machine('Onyx') //缟玛瑙机器
        machine('Azurite') //石青机器
        machine('Bedrock') //基岩机器
        machine('Moonstone') //月长石机器
        machine('Glass_Crest') //琉璃机器
        machine('Effulgent') //龙翎机器
        machine('Aether') //以太机器
    
        machine('Copper') //铜机器
        machine('Optical') //光学机器
        machine('Candy') //糖果机器
        machine('Dark') //黑暗机器
        machine('Primal') //原始机器
        machine('Ender') //末影机器
        machine('Enchantment') //附魔机器
        machine('Quitoxic') //奇毒机器
        machine('Star') //流星机器
        machine('Annihilation') //湮灭机器

    event.create("base_block")
    event.create('adulterated_base_block')

    
})