// Your code here
const saturdayFun = (activity ="roller-skate") => {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity ="go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(aStr = "*") {
    return function (something = "special") {
        return `You are ${aStr}${something}${aStr}!`;
    }
}