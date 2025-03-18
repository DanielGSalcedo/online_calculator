
    function convertFrom(base) {
    let decValue;
    try {
    if (base === 'dec') decValue = parseInt(document.getElementById('dec').value, 10);
    if (base === 'bin') decValue = parseInt(document.getElementById('bin').value, 2);
    if (base === 'oct') decValue = parseInt(document.getElementById('oct').value, 8);
    if (base === 'hex') decValue = parseInt(document.getElementById('hex').value, 16);

    if (isNaN(decValue)) return;

    document.getElementById('dec').value = decValue;
    document.getElementById('bin').value = decValue.toString(2);
    document.getElementById('oct').value = decValue.toString(8);
    document.getElementById('hex').value = decValue.toString(16).toUpperCase();
} catch (e) {
    console.error("Error en la conversión", e);
}
}

    function calculate(operation) {
    let base = document.getElementById('base').value;
    let radix;
    if (base === 'dec') radix = 10;
    else if (base === 'bin') radix = 2;
    else if (base === 'oct') radix = 8;
    else if (base === 'hex') radix = 16;

    let num1 = parseInt(document.getElementById('num1').value, radix);
    let num2 = parseInt(document.getElementById('num2').value, radix);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('result').innerText = "Error: Ingrese valores válidos";
    return;
}

    if (operation === 'add') result = num1 + num2;
    else if (operation === 'subtract') result = num1 - num2;
    else if (operation === 'multiply') result = num1 * num2;
    else if (operation === 'divide') result = num2 !== 0 ? num1 / num2 : "Error: División por 0";


    if (typeof result === 'number') {
    if (base === 'dec') result = result.toString(10);
    else if (base === 'bin') result = result.toString(2);
    else if (base === 'oct') result = result.toString(8);
    else if (base === 'hex') result = result.toString(16).toUpperCase();
}

    document.getElementById('result').innerText = result;
}
