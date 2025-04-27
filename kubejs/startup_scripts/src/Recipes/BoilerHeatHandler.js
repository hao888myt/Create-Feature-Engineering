CreateEvents.boilerHeatHandler(event => {
    // 熱量等級說明：
    // -1：此方塊不提供任何形式的熱量。
    // 0 ：此方塊提供被動熱量。（例如未加燃料的烈焰使者燃燒室）
    // 1 ：此方塊提供 1 單位的熱量（在狀態欄中顯示 1 個綠色條，例如加燃料的烈焰使者燃燒室）
    // 2 ：此方塊提供 2 單位的熱量（例如烈焰蛋糕＋烈焰使者燃燒室）
    // X ：此方塊提供 X 單位的熱量，狀態欄中顯示 X 個綠色條
    //
    // 注意，回調函數僅在鍋爐有更新信號時調用。
    // 例如相鄰方塊的狀態變化、破壞或放置等。
  
    // 添加單個方塊的加熱器。
    // 回調函數的參數類型為 BlockContainerJS。
    event.add('anvilcraft:incandescent_netherite_block', (block) => {
      return 2
    })

    event.add('anvilcraft:incandescent_tungsten_block', (block) => {
      return 2
    })

    event.add('anvilcraft:glowing_netherite_block', (block) => {
      return 1
    })

    event.add('anvilcraft:glowing_tungsten_block', (block) => {
      return 1
    })

    event.add('anvilcraft:redhot_netherite_block', (block) => {
      return 1
    })

    event.add('anvilcraft:redhot_tungsten_block', (block) => {
      return 1
    })
})