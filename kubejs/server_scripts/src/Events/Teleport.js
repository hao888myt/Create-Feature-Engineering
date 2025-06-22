var uuidArray = []
NativeEvents.onEvent(Java.loadClass("net.minecraftforge.event.entity.EntityTeleportEvent"), event =>{
    var entity = event.getEntity()

    if (entity == null) return
    if (entity.type != "minecraft:enderman") return

    var currentBlockPos = entity.getOnPos()

    // 获得生物的uuid
    const uuid = entity.getUuid()
    // 判断uuid是否已经存在于数组中
    if (uuidArray.indexOf(uuid) != -1)  return
    // 如果不存在，则添加到数组中
    uuidArray.push(uuid)
    // 延迟1t删除uuid
    if (uuidArray.indexOf(uuid) != -1)
    {
        Utils.getServer().scheduleInTicks(1, () => {
            uuidArray.splice(uuidArray.indexOf(uuid), 1)
            // console.log("Teleport event handled for Enderman: " + uuid)
        })
    }

        
})