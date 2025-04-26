ServerEvents.recipes(event => {
    const create = event.recipes.create

    //四轴飞行器
    event.remove('immersive_aircraft:quadrocopter')
    create.mechanical_crafting('immersive_aircraft:quadrocopter', [
      'ABA',
      'BCB',
      'ABA'
    ], {
      A: 'immersive_aircraft:propeller',
      B: 'minecraft:bamboo',
      C: 'immersive_aircraft:engine',
    })

    //磁电核心
    event.remove('anvilcraft:magnetoelectric_core_forge')
    event.remove('anvilcraft:magnetoelectric_core')
    create.mechanical_crafting('anvilcraft:magnetoelectric_core', [
      'ABA',
      'CDC',
      'ABA'
    ], {
      A: '#forge:ingots/copper',
      B: '#c:glass_blocks',
      C: 'kubejs:magnet_mechanism',
      D: 'anvilcraft:hollow_magnet_block'
    })

    //集电器
    event.remove('anvilcraft:charge_collector')
    create.mechanical_crafting('anvilcraft:charge_collector', [
      ' A ',
      'B B',
      'CCC'
    ], {
      A: 'anvilcraft:magnetoelectric_core',
      B: '#forge:ingots/copper',
      C: '#forge:ingots/steel'
    })

    //加热器
    // event.remove('anvilcraft:heater')
    // create.mechanical_crafting(
    //   Item.of('anvilcraft:heater'),
    //   [
    //     'CCC',
    //     'BAB',
    //     'DDD'
    //   ],
    //   {
    //     A: 'anvilcraft:magnetoelectric_core',
    //     B: 'create_dd:infernal_mechanism',
    //     C: '#forge:wires/iron',
    //     D: '#forge:ingots/steel'
    //   }
    // )

    //压电晶体
    event.remove({ output: 'anvilcraft:piezoelectric_crystal' })
    create.mechanical_crafting(
      Item.of('anvilcraft:piezoelectric_crystal', 3),
      [
        'ABA',
        'CDC',
        'ABA'
      ],
      {
        A: '#forge:ingots/copper',
        B: '#forge:storage_blocks/amethyst',
        C: '#vintageimprovements:springs/steel',
        D: 'anvilcraft:magnetoelectric_core'
      }
    )

    //输电杆
    event.remove({ output: 'anvilcraft:transmission_pole' })
    create.mechanical_crafting(
      Item.of('anvilcraft:transmission_pole', 2),
      [
        'A',
        'B',
        'C'
      ],
      {
        A: 'anvilcraft:magnetoelectric_core',
        B: 'minecraft:lightning_rod',
        C: '#forge:storage_blocks/iron'
      }
    )

    //离心机
    event.remove('vintageimprovements:craft/centrifuge')
    create.mechanical_crafting(
      Item.of('anvilcraft:transmission_pole', 2),
      [
        'A',
        'B',
        'C'
      ],
      {
        A: 'anvilcraft:magnetoelectric_core',
        B: 'minecraft:lightning_rod',
        C: '#forge:storage_blocks/iron'
      }
    )
  })