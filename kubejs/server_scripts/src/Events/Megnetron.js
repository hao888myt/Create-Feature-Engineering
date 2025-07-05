EntityEvents.death("alexscaves:magnetron", event => {
    const magnetron = event.getEntity()

    // 原始数据（假设从某个 NBT 或字符串获取）
    const nbtString = magnetron.getNbt().toString()

    console.log("原始 NBT 字符串:", nbtString)

    // 1. 用正则提取 Blockstates 部分
    const blockstatesMatch = nbtString.match(/Blockstates:\s*({[^{}]*({[^{}]*}[^{}]*)*})/);

    if (blockstatesMatch) {
        const blockstatesStr = blockstatesMatch[1]; // 提取 Blockstates 的内容
        
        // 2. 修复 JSON（键名加引号，确保可以被 JSON.parse 解析）
        const fixedJson = blockstatesStr
            .replace(/([a-zA-Z_]\w*):/g, '"$1":') // 键名加引号，如 BlockData: -> "BlockData":
            .replace(/'/g, '"'); // 单引号转双引号（如果有）

        try {
            // 3. 解析成 JS 对象
            const blockstates = JSON.parse(fixedJson);
            const blockData = blockstates.BlockData;
            
            // 4. 判断 BlockData 长度是否 ≥ 8
            if (blockData.length >= 8) {
                console.log("✅ BlockData 数量 ≥ 8");
            } else {
                console.log("❌ BlockData 数量 < 8");
            }
        } catch (e) {
            console.error("❌ JSON 解析失败:", e);
        }
    } else {
        console.error("❌ 未找到 Blockstates 数据");
    }
})