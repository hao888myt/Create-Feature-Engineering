StartupEvents.registry("item", event => {
    event.create(`${global.ModPackId}:net_creater`)
        .unstackable()
        .texture("beyonddimensions:item/net_creater")
        .use((level, player, hand) => {
            if (level.isClientSide()) return true
            // 用于判断用户是否已拥有维度存储
            let existing = DimensionsNet.getNetFromPlayer(player)

            if (existing != null) {
                player.tell("§7你已经在虚空中开创出了属于你的维度存储网络，你无法再使用这个物品了...")
                return true
            }

            // 单个物品、流体种类最大可存储上限（可自行修改，最大值为 9223372036854775807）
            let defaultSlotCapability = 8192
            // 最多可以存储的物品、流体种类（可自行修改，最大值为 2147483647）
            let defaultSlotMaxSize = 256
            DimensionsNet.createNewNetForPlayer(player, defaultSlotCapability, defaultSlotMaxSize)

            let stack = player.getItemInHand(hand)
            stack.shrink(1)
            player.tell("维度网络已创建")
        })

    event.create(`${global.ModPackId}:singularity`)
        .texture("kubejs:item/singularity")
        .use((level, player, hand) => {
            if (level.isClientSide()) return true
            let dnet = DimensionsNet.getNetFromPlayer(player)
            if (dnet == null) {
                player.tell("§7你没有网络管理权，或你没有网络...")
                return true
            }

            // 获取当前网络信息
            let dus = dnet.getUnifiedStorage()
            // 在当前网络的基础上，为单个物品种类可存储上限添加 512，例（升级前4096 -> 升级后 4096+512=4608，可根据自身需求修改）
            dus.setSlotCapacity(dus.slotCapacity + 512)
            // 在当前网络的基础上，为可存储的物品物品种类上限添加 4，例（升级前64 -> 升级后 64+4=68，可根据自身需求修改）
            dus.setSlotMaxSize(dus.slotMaxSize + 4)
            let stack = player.getItemInHand(hand)
            stack.shrink(1)
            player.tell("维度网络已升级")
        })

    event.create(`${global.ModPackId}:net_checker`)
        .unstackable()
        .texture("beyonddimensions:item/net_gifter") // 默认图标为超越维度的网络赠与器，可自行修改
        .use((level, player, hand) => {
            if (level.isClientSide()) return true

            let dnet = DimensionsNet.getNetFromPlayer(player)
            if (dnet == null) {
                player.tell("§7你不是网络主人，或你没有网络...")
                return true
            }
            let dus = dnet.getUnifiedStorage()

            player.tell("§7你的网络情况如下")
            player.tell("§7=========================")
            player.tell("§7已存储种类：" + dus.getSlots() + " / " + dus.slotMaxSize)
            player.tell("§7每个种类最大可存储数量：" + dus.slotCapacity)
            player.tell("§7=========================")
            return true
        })
})
