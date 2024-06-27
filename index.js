// code your solution here
function saturdayFun(activity = "roller-skate") {
 return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(whereToGo = "go to the office"){
    return `This Monday, I will ${whereToGo}.`;
}
mondayWork();

function wrapAdjective(symbol = "'*'") {
    return function (word = "special"){
        return`You are ${symbol}${word}${symbol}!`
    }
}
wrapAdjective();
