ServerEvents.recipes(event => {
    let create = event.recipes.create

    //人鱼宝石分液
    create.emptying([Fluid.water(), 'spectrum:mermaids_gem'], 'spectrum:mermaids_gem')
  })
