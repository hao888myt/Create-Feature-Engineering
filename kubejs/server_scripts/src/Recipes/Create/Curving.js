ServerEvents.recipes(event => {
    const vintageimprovements = event.recipes.vintageimprovements
    
    // 各种模具
    event.remove("createdieselgenerators:cutting/lines_mold")
    event.remove("createdieselgenerators:cutting/chain_mold")
    event.remove("createdieselgenerators:cutting/bar_mold")
    event.remove("createdieselgenerators:cutting/bowl_mold")
    vintageimprovements.curving(Item.of('createdieselgenerators:mold', 1, '{Mold:"createdieselgenerators:lines"}'), "createdieselgenerators:mold").head("minecraft:stick")
    vintageimprovements.curving(Item.of('createdieselgenerators:mold', 1, '{Mold:"createdieselgenerators:chain"}'), "createdieselgenerators:mold").head("minecraft:chain")
    vintageimprovements.curving(Item.of('createdieselgenerators:mold', 1, '{Mold:"createdieselgenerators:bar"}'), "createdieselgenerators:mold").head("minecraft:iron_ingot")
    vintageimprovements.curving(Item.of('createdieselgenerators:mold', 1, '{Mold:"createdieselgenerators:bowl"}'), "createdieselgenerators:mold").head("minecraft:bowl")
})