// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dolares){
 let yen = ((dolares *oneEuroIs.JPY)/oneEuroIs.USD);
 return yen;
}
function fromEuroToDollar(euros){
    let dolar = oneEuroIs.USD * euros;
    return dolar;
}
 function fromYenToPound(yenes){
    let euros = yenes / oneEuroIs.JPY;
    let libras = euros * oneEuroIs.GBP;
    return libras;

 }
module.exports = {fromDollarToYen,fromEuroToDollar,fromYenToPound, oneEuroIs};
