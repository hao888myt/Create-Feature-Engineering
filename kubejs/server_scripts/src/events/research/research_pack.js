ResearchdEvents.registerResearchPacks(event => {
    let researchPacks = [
        ["conveying", [167, 173, 159]],
        ["logistics", [12, 34, 56]],
        ["smart", [248, 202, 103]],
        ["fluid", [231, 143, 97]],
        ["chemical", [50, 200, 50]],
        ["optical", [50, 200, 50]],
        ["electrical", [50, 200, 50]],
        ["package", [50, 200, 50]]
    ]
    researchPacks.forEach(pack => {
        event.create(`${global.ModPackId}:${pack[0]}`)
            .color(pack[1][0], pack[1][1], pack[1][2])
    })
});