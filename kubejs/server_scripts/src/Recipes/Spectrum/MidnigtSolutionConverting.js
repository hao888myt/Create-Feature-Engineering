ServerEvents.recipes(event =>{
    /**
     * @param {string} input
     * @param {string} result
     * @param {number} result_number
     */
    function midnightSolutionConverting(input, result, result_number){
        let recipe = {
            "type": "spectrum:midnight_solution_converting",
            "ingredient": {
              "item": input
            },
            "result": {
              "item": result,
              "count": result_number
            }
          }
        event.custom(recipe)
    }

    //删除黑曜石转哭泣黑曜石的配方
    event.remove('spectrum:midnight_solution_converting/crying_obsidian')

    //腐化珍珠
    //midnightSolutionConverting('minecraft:ender_pearl', 'endermanoverhaul:corrupted_pearl', 1)

    let { spectrum } = event.recipes
    spectrum.midnight_solution_converting('minecraft:coal', Item.of('minecraft:coal', 1))
})