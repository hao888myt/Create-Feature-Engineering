CreateEvents.spoutHandler((event) => {
    // 創建注液器處理器，需要提供 ID，因為這裡沒有辦法生成一個一致的 UUID。
    //
    // 注液器每個 tick 都會以 simulate = true 的方式調用處理器，如果返回值 > 0，則注液器將開始注液動畫，
    // 動畫結束時，處理器將再次以 simulate = false 的方式調用。
    //
    // 返回的整數表示此操作應該消耗多少單位液體。
    // 單位視模組載入器而不同，Forge = 1MB、Fabric = 1 unit
    // 1 B（Bucket，桶） = 1000 MB（MiliBucket，千分之一桶） = 81000 unit（單位流體）
  
    event.add(
      "kubejs:dirt", // ID
      'minecraft:dirt', // 目標方塊
      (block, fluid, simulate) => {
        if (fluid.id === Fluid.water().id && fluid.amount >= 250) {
          if (!simulate) {
            block.set('minecraft:mud');
          }
          return 250
        }
        return 0
      }
    )
  })