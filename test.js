// Importar la función sum del archivo app.js
const {fromDollarToYen,fromEuroToDollar,fromYenToPound, oneEuroIs} = require('./app.js');
/*
// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
*/

test ("Si un  dolar equivale a 146.2616", function() {
    const yen = fromDollarToYen(1);
    const esperado = (1 * oneEuroIs.JPY) / oneEuroIs.USD;
    expect(yen).toBe(esperado);
  });

test ("0,0055 Pound equivale a 1 Yen ", function () {
    const libra = fromYenToPound(1);
    const esperado = (1 / oneEuroIs.JPY) * oneEuroIs.GBP;
    expect(libra).toBe(esperado);
});

test(" 1.07 dolares equivale a 1 Euro", function() {
    
    const dolares = fromEuroToDollar(3.5);
    const esperado = 3.5 * oneEuroIs.USD;
    expect(dolares).toBe(esperado); 
});

