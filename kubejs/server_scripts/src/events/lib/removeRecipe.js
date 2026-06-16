/**
 * @param {string[]} recipe 
 * @param {number} default_length 默认情况下的数组长度
 */
function removeRecipe(recipe, default_length, event) {
    if (recipe.length == default_length + 1 && recipe[default_length] == false) {
        return
    }
    else if (recipe.length > default_length) {
        for (let i = default_length; i < recipe.length; i++) {
            event.remove(recipe[i])
        }
    }
    else {
        event.remove({ output: recipe[0] })
    }
}
