ServerEvents.highPriorityData(event => {
    event.addJson("oei:replacements/lead_materials.json", [
        {
            "matchItems":
                [
                    "#forge:raw_materials/lead"
                ],
            "resultItems": "anvilcraft:raw_lead"
        },
        {
            "matchItems":
                [
                    "createnuclear:raw_lead_block",
                    "anvilcraft:raw_lead_block"
                ],
            "resultItems": "anvilcraft:raw_lead_block"
        },
        {
            "matchItems":
                [
                    "#forge:ingots/lead"
                ],
            "resultItems": "anvilcraft:lead_ingot"
        },
        {
            "matchItems":
                [
                    "#forge:nuggets/lead"
                ],
            "resultItems": "anvilcraft:lead_nugget"
        },
        {
            "matchItems":
                [
                    "createnuclear:lead_block",
                    "anvilcraft:lead_block"
                ],
            "resultItems": "anvilcraft:lead_block"
        }
    ]);

    event.addJson("oei:replacements/zinc_materials.json", [
        {
            "matchItems":
                [
                    "createfisheryindustry:zinc_sheet", 
                    "createaddition:zinc_sheet", 
                    "vintageimprovements:zinc_sheet"
                ],
            "resultItems": "createfisheryindustry:zinc_sheet"
        },
        {
            "matchItems":
                [
                    "#forge:ingots/zinc"
                ],
            "resultItems": "create:zinc_ingot"
        },
        {
            "matchItems":
                [
                    "#forge:nuggets/zinc"
                ],
            "resultItems": "create:zinc_nugget"
        },
        {
            "matchItems":
                [
                    "create:zinc_block", 
                    "anvilcraft:zinc_block"
                ],
            "resultItems": "create:zinc_block"
        },
        {
            "matchItems":
                [
                    "#forge:raw_materials/zinc"
                ],
            "resultItems": "create:raw_zinc"
        },
        {
            "matchItems":
                [
                    "anvilcraft:raw_zinc_block", 
                    "create:raw_zinc_block"
                ],
            "resultItems": "create:raw_zinc_block"
        },
        {
            "matchItems":
                [
                    "anvilcraft:deepslate_zinc_ore", 
                    "create:deepslate_zinc_ore"
                ],
            "resultItems": "create:deepslate_zinc_ore"
        }
    ])

    event.addJson("oei:replacements/steel_materials.json", [
        {
            "matchItems":
                [
                    "#forge:storage_blocks/steel"
                ],
            "resultItems": "createnuclear:steel_block"
        },
        {
            "matchItems":
                [
                    "#forge:ingots/steel"
                ],
            "resultItems": "createnuclear:steel_ingot"
        }
    ])

    event.addJson("oei:replacements/brass_materials.json", [
        {
            "matchItems":
                [
                    "#c:brass_blocks"
                ],
            "resultItems": "create:brass_block"
        },
        {
            "matchItems":
                [
                    "#forge:ingots/brass"
                ],
            "resultItems": "create:brass_ingot"
        }
    ])

    event.addJson("oei:replacements/tungsten_materials.json", [
        {
            "matchItems":
                [
                    "#forge:ingots/tungsten"
                ],
            "resultItems": "anvilcraft:tungsten_ingot"
        },
        {
            "matchItems":
                [
                    "#forge:nuggets/tungsten"
                ],
            "resultItems": "anvilcraft:tungsten_nugget"
        },
        {
            "matchItems":
                [
                    "#forge:raw_materials/tungsten"
                ],
            "resultItems": "anvilcraft:raw_tungsten"
        },
        {
            "matchItems":
                [
                    "#forge:storage_blocks/tungsten"
                ],
            "resultItems": "anvilcraft:tungsten_block"
        },
        {
            "matchItems":
                [
                    "anvilcraft:raw_tungsten_block",
                    "createmetallurgy:raw_wolframite_block",
                ],
            "resultItems": "anvilcraft:raw_tungsten_block"
        }
    ])

    event.addJson("oei:replacements/dough.json", [
        {
            "matchItems":
                [
                    "#forge:dough/wheat"
                ],
            "resultItems": "create:dough"
        }
    ])

    event.addJson("oei:replacements/belt.json", [
        {
            "matchItems":
                [
                    "vintageimprovements:grinder_belt",
                    "createmetallurgy:sandpaper_belt",
                ],
            "resultItems": "createmetallurgy:sandpaper_belt",
        },
        {
            "matchItems":
                [
                    "vintageimprovements:belt_grinder",
                    "createmetallurgy:mechanical_belt_grinder"
                ],
            "resultItems": "createmetallurgy:mechanical_belt_grinder"
        }
    ])

    event.addJson("oei:replacements/copycat.json", [
        {
            "matchItems":
                [
                    "create_connected:copycat_block",
                    "copycats:copycat_block",
                ],
            "resultItems": "copycats:copycat_block",
        },
        {
            "matchItems":
                [
                    "create_connected:copycat_slab",
                    "copycats:copycat_slab"
                ],
            "resultItems": "copycats:copycat_slab"
        },
        {
            "matchItems":
                [
                    "create_connected:copycat_beam",
                    "copycats:copycat_beam",
                ],
            "resultItems": "copycats:copycat_beam",
        },
        {
            "matchItems":
                [
                    "create_connected:copycat_vertical_step",
                    "copycats:copycat_vertical_step"
                ],
            "resultItems": "copycats:copycat_vertical_step"
        },
        {
            "matchItems":
                [
                    "create_connected:copycat_stairs",
                    "copycats:copycat_stairs",
                ],
            "resultItems": "copycats:copycat_stairs",
        },
        {
            "matchItems":
                [
                    "create_connected:copycat_fence",
                    "copycats:copycat_fence"
                ],
            "resultItems": "copycats:copycat_fence"
        },
        {
            "matchItems":
                [
                    "create_connected:copycat_fence_gate",
                    "copycats:copycat_fence_gate",
                ],
            "resultItems": "copycats:copycat_fence_gate",
        },
        {
            "matchItems":
                [
                    "create_connected:copycat_wall",
                    "copycats:copycat_wall"
                ],
            "resultItems": "copycats:copycat_wall"
        },
        {
            "matchItems":
                [
                    "create_connected:copycat_board",
                    "copycats:copycat_board"
                ],
            "resultItems": "copycats:copycat_board"
        },
        {
            "matchItems":
                [
                    "create_connected:copycat_box",
                    "copycats:copycat_box"
                ],
            "resultItems": "copycats:copycat_box"
        },
        {
            "matchItems":
                [
                    "create_connected:copycat_catwalk",
                    "copycats:copycat_catwalk"
                ],
            "resultItems": "copycats:copycat_catwalk"
        }
    ])
})