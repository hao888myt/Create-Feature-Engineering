// 有可附魔的机器
global.EnchantableMachines = [
    "create:encased_fan", 
    "create:millstone", 
    "create:crushing_wheel", 
    "create:mechanical_press", 
    "create:mechanical_mixer", 
    "create:spout", 
    "create:mechanical_roller", 
    "create:mechanical_saw", 
    "create:mechanical_plough",
    "create:mechanical_drill"
]

global.randomNum = (minNum, maxNum) => { 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random() * minNum + 1, 10)
        case 2: 
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
        default: 
            return 0;
    } 
} 