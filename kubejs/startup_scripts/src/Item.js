StartupEvents.registry('item', event =>{

    //批量创建构件
    let mechanism = (name) =>{
        let id = name.toLowerCase()
        event.create(id + '_mechanism')
        event.create('incomplete_' + id + '_mechanism')
    }
    
    mechanism('Andesite') //安山构件
    mechanism('Sturdy') //坚固构件
    mechanism('Magnet') //电磁构件
    mechanism('Infernal') //炼狱构件
    mechanism('Sculk') //幽匿构件
    mechanism('Nuclear') //核能构件
    mechanism('Endless') //终焉构件

    mechanism('Crystal') //水晶构件
    mechanism('Onyx') //缟玛瑙构件
    mechanism('Azurite') //石青构件
    mechanism('Bedrock') //基岩构件
    mechanism('Moonstone') //月长石构件
    mechanism('Glass_Crest') //琉璃构件
    mechanism('Effulgent') //龙翎构件
    mechanism('Aether') //以太构件

    mechanism('Copper') //铜构件
    mechanism('Optical') //光学构件
    mechanism('Candy') //糖果构件
    mechanism('Dark') //黑暗构件
    mechanism('Primal') //原始构件
    mechanism('Ender') //末影构件
    mechanism('Enchantment') //附魔构件
    mechanism('Quitoxic') //奇毒构件
    mechanism('Star') //流星构件
    mechanism('Annihilation') //湮灭构件
    


    event.create('shimmerstone_gem_shard') //火花石碎片
    event.create('shimmerstone_gem_lump') //火花石碎块

    event.create('paltaeria_catalyst') //苍绿催化剂
    event.create('stratine_catalyst') //绯红催化剂
    event.create('hover_catalyst') //悬浮催化剂
    event.create('gravity_catalyst') //重力催化剂

    event.create('rubber') //橡胶

    event.create('adulterated_compound_base')
    event.create('incomplete_chromatic_compound')
    event.create('chromatic_compound_shard')
    event.create('unstable_chromatic_compound')
})