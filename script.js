const display = document.getElementById('display');

function valor(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function limpar() {
    display.textContent = '0';
}

function calc() {
    const expressao = display.textContent
        .replace(/x/g, '*')
        .replace(/,/g, '.')
        .replace(/÷/g, '/');


    try {
        display.textContent = eval(expressao);
    } catch (e) {
        display.textContent = 'Erro';
    }
}