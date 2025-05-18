ItemEvents.rightClicked(event => {
    if (event.getItem().id != "kubejs:ore_feed") return
    const toretoise = event.getTarget().entity
    if (toretoise == null) return
    if (toretoise.type !== "quark:toretoise") return
    if (!hasOreTypeZero(toretoise.getNbt().toString())) return
    
    mergeOreType(toretoise, RandomOreType())
})

BlockEvents.rightClicked(event =>{
    if (event.item.id != "kubejs:ore_feed") return
    if (event.block === null) return
    const block = event.getBlock()
    if (block.id !== "kubejs:toretoise_fossil") return
    const centerPos = event.getBlock().getPos()
    console.log(centerPos)
    const radius = 1

    let area = AABB.of(centerPos.getX() - radius, centerPos.getY() - radius, centerPos.getZ() - radius, centerPos.getX() + radius, centerPos.getY() + radius + 0.1, centerPos.getZ() + radius)
    let entities = event.level.getEntitiesWithin(area)
    console.log(entities)
    
    if (entities == null) return

    let toretoises = []

    entities.forEach(entity => {
        if (entity.type === "quark:toretoise") toretoises.push(entity)
    })
    console.log(toretoises)


    for (let i = 0; i < toretoises.length; i++) {
        if (hasOreTypeZero(toretoises[i].getNbt().toString())) {
            toretoises[i].mergeNbt(`{oreType: ${RandomOreType()}}`)
            break
        }
    }
})

function RandomOreType() {
    let num = randomNum(0, 100)

    if (num > 0 && num <= 20) // 煤炭 20
        return 1
    else if (num > 20 && num <= 30) // 铁 10
        return 2
    else if (num > 30 && num <= 40) // 红石 10
        return 3
    else if (num > 40 && num <= 90) // 青金石 50
        return 4
    else if (num > 90 && num <= 100) // 铜 10
        return 5
}

function hasOreTypeZero(str) {
    return /oreType:0/.test(str);
}

function mergeOreType(toretoise, num){
    toretoise.mergeNbt(`{oreType: ${num}}`)
}

function randomNum(minNum, maxNum){ 
        switch(arguments.length){ 
            case 1: 
                return parseInt(Math.random() * minNum + 1, 10)
            case 2: 
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
            default: 
                return 0;
        } 
    } 