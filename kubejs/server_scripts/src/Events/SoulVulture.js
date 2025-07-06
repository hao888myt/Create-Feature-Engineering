const { $LivingEntity } = require("packages/net/minecraft/world/entity/$LivingEntity")

EntityEvents.hurt("minecraft:piglin", (event) => {
    const entity = event.getSource().getActual()
    if (entity == null || entity.type != "alexsmobs:soul_vulture") return
    if (entity instanceof $LivingEntity && entity.nbt.getInt("SoulLevel") <= 4)
    {
        if (!entity.hasEffect("alexsmobs:soulsteal")) return
        entity.mergeNbt(`{SoulLevel: ${entity.nbt.getInt("SoulLevel") + 1}}`)
    }
})