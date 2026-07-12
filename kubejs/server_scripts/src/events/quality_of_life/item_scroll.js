let $ItemScrollData = Java.loadClass("com.hollingsworth.arsnouveau.common.items.data.ItemScrollData");

ItemEvents.rightClicked(event => {
    let item = event.getItem()
    let player = event.getPlayer()
    let scrolls = [
        "ars_nouveau:deny_scroll",
        "ars_nouveau:allow_scroll"
    ]

    let result = event.getTarget().type

    if (result != "BLOCK" && result != "MISS") return
    if (event.getHand() != "MAIN_HAND") return

    for (let i = 0; i < scrolls.length; i++) {
        if (item.getId() == scrolls[i]) {

            /**
            * @type {new $ItemScrollData}
            */
            let item_scroll_data = item.get("ars_nouveau:item_scroll_data")
            let items = item_scroll_data.getItems()

            let new_items = []

            items.forEach(item_stack => {
                new_items.push({
                    id: item_stack.id,
                    count: 1
                })
            })

            if (result == "BLOCK" && !player.isShiftKeyDown()) {
                let block = event.target.block
                if (block.id == "ars_nouveau:scribes_table") break

                new_items.push({
                    id: block.getItem().id,
                    count: 1
                })
            } else if (player.isShiftKeyDown()) {
                new_items.pop()
            }

            item.set("ars_nouveau:item_scroll_data", new_items)

            break
        }
    }
})