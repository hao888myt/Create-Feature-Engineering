// 材料注册
/** 材料种类 */
class MaterialType {
    static MOLTEN = "molten"
    static SHEET = "sheet"

    static INGOT = "ingot"
    static BLOCK = "block"
    static NUGGET = "nugget"
}

global.Materials = [
    {
        id: "iron",
        color: "#891414",
        types: [
            MaterialType.MOLTEN
        ],
        zh_cn: "铁",
    },
    {
        id: "gold",
        color: "#f7d349",
        types: [
            MaterialType.MOLTEN
        ],
        zh_cn: "金",
    },
    {
        id: "copper",
        color: "#E2733B",
        types: [
            MaterialType.MOLTEN
        ],
        zh_cn: "铜",
    },
    {
        id: "zinc",
        color: "#B8C0C0",
        types: [
            MaterialType.MOLTEN
        ],
        zh_cn: "锌",
    },
    {
        id: "lead",
        color: "#4B4B4B",
        types: [
            MaterialType.MOLTEN
        ],
        zh_cn: "铅",
    },
    {
        id: "andesite_alloy",
        color: "#B8B8B8",
        types: [
            MaterialType.MOLTEN
        ],
        zh_cn: "安山合金",
    },
    {
        id: "brass",
        color: "#E5B769",
        types: [
            MaterialType.MOLTEN
        ],
        zh_cn: "黄铜",
    },
    {
        id: "steel",
        color: "#888888",
        types: [
            MaterialType.MOLTEN
        ],
        zh_cn: "钢",
    },
    {
        id: "azure_neodymium",
        color: "#163cb8",
        types: [
            MaterialType.MOLTEN
        ],
        zh_cn: "青钕合金",
    },
    {
        id: "scarlet_neodymium",
        color: "#d90f1f",
        types: [
            MaterialType.MOLTEN
        ],
        zh_cn: "赤钕",
    },
    {
        id: "silicon",
        color: "#cccccc",
        types: [
            MaterialType.SHEET
        ],
        zh_cn: "硅"
    }
]

global.BasicItems = [
    {
        id: "paltaeria_catalyst",
        zh_cn: "苍绿催化剂",
    },
    {
        id: "stratine_catalyst",
        zh_cn: "绯红催化剂",
    },
    {
        id: "hover_catalyst",
        zh_cn: "悬浮催化剂",
    },
    {
        id: "gravity_catalyst",
        zh_cn: "重力催化剂",
    },
    {
        id: "rubber",
        zh_cn: "橡胶",
    },
    {
        id: "royal_prism",
        zh_cn: "皇家棱镜",
    },
    {
        id: "royal_optical_device",
        zh_cn: "皇家光学设备",
    },
    {
        id: "soul_vulture_heart",
        zh_cn: "灵魂鹫之心",
    },
    {
        id: "ectoplasm",
        zh_cn: "灵质",
    },
    {
        id: "world_edit_tool",
        zh_cn: "创世神工具",
    },
    {
        id: "cyan_mixture",
        zh_cn: "青色混合物",
    }
]

global.IncompletedItems = [
    {
        id: "research_pack",
        zh_cn: "研究包",
    },
    {
        id: "distillation_controller",
        zh_cn: "分馏塔控制器",
    },
    {
        id: "bulk_fermenter",
        zh_cn: "批量发酵器",
    },
    {
        id: "impact_pile",
        zh_cn: "冲击桩",
    },
    {
        id: "diesel_engine",
        zh_cn: "柴油引擎",
    },
    {
        id: "pumpjack_hole",
        zh_cn: "抽油机油泵",
    },
    {
        id: "pumpjack_crank",
        zh_cn: "抽油机曲柄",
    },
    {
        id: "pumpjack_head",
        zh_cn: "抽油机驴头",
    },
    {
        id: "pumpjack_bearing",
        zh_cn: "抽油机轴承",
    },

    {
        id: "circuit_board",
        zh_cn: "电路板",
    },
    {
        id: "magnetoelectric_core",
        zh_cn: "磁电核心",
    },

    {
        id: "transmission_pole",
        zh_cn: "输电杆",
    },
    {
        id: "remote_transmission_pole",
        zh_cn: "远程输电杆",
    },
    {
        id: "heater",
        zh_cn: "加热器",
    },
    {
        id: "charge_collector",
        zh_cn: "集电器",
    }
]

global.ReserchPacks = [
    {
        id: "conveying",
        color: "#A7C7E7",
        zh_cn: "传动"
    },
    {
        id: "logistics",
        color: "#C7A7E7",
        zh_cn: "物流"
    },
    {
        id: "smart",
        color: "#E7C7A7",
        zh_cn: "智能"
    },
    {
        id: "fluid",
        color: "#E7A7C7",
        zh_cn: "流体"
    },
    {
        id: "chemical",
        color: "#A7E7C7",
        zh_cn: "化学"
    },
    {
        id: "optical",
        color: "#C7E7A7",
        zh_cn: "光学"
    },
    {
        id: "electrical",
        color: "#E7E7A7",
        zh_cn: "电磁"
    },
    {
        id: "package",
        color: "#A7E7A7",
        zh_cn: "包裹"
    }
]

global.BasicBlocks = [
    {}
]

global.BasicFluids = [
    {
        id: "liquid_number",
        color: "#ffffff",
        type: "thin",
        zh_cn: "液态数字"
    },
    {
        id: "ectoplasm",
        color: "#85e6ff",
        type: "thin",
        zh_cn: "灵质"
    },
    {
        id: "light_oil",
        color: "#f9e000",
        type: "thin",
        zh_cn: "轻油"
    },
    {
        id: "heavy_oil",
        color: "#e59500",
        type: "thin",
        zh_cn: "重油"
    },
    {
        id: "petroleum_gas",
        color: "#242121",
        type: "thin",
        zh_cn: "石油气"
    },
    {
        id: "lubricant",
        color: "#1ec900",
        type: "thin",
        zh_cn: "润滑油"
    },
    {
        id: "oxygen",
        color: "#90c8ff",
        type: "thin",
        zh_cn: "氧气"
    },
    {
        id: "hydrogen",
        color: "#ffffff",
        type: "thin",
        zh_cn: "氢气"
    },
    {
        id: "nitrogen",
        color: "#909090",
        type: "thin",
        zh_cn: "氮气"
    },
    {
        id: "ammonia",
        color: "#00ff22",
        type: "thin",
        zh_cn: "氨气"
    },
    {
        id: "chlorine",
        color: "#00ff55",
        type: "thin",
        zh_cn: "氯气"
    },
    {
        id: "carbon_dioxide",
        color: "#888888",
        type: "thin",
        zh_cn: "二氧化碳"
    },
    {
        id: "nitric_oxide",
        color: "#ff8888",
        type: "thin",
        zh_cn: "一氧化氮"
    },
    {
        id: "nitrogen_dioxide",
        color: "#ff5500",
        type: "thin",
        zh_cn: "二氧化氮"
    },
    {
        id: "hydrochloric_acid",
        color: "#00ffaa",
        type: "thin",
        zh_cn: "盐酸"
    },
    {
        id: "nitric_acid",
        color: "#ffee00",
        type: "thin",
        zh_cn: "硝酸"
    }
]
