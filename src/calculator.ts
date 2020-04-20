console.log('Neumorphic calculator');

let display = document.querySelector("input");
let numbers = document.querySelectorAll(".num__key");
const equal = document.querySelector(".eq__key");
const clear = document.querySelector(".op__key[op=clear]");

let result = "";
let numResult: number = 0;
let buffer: number[] = [];
let resoperation: string;

const operations = ['add', 'subtract', 'multiply', 'divide', 'percent'];
let opMap = new Map<string, string>();
opMap.set('add', '+');
opMap.set('subtract', '-');
opMap.set('multiply', 'x');
opMap.set('divide', '/');
opMap.set('percent', '');
opMap.set('negate', '--');

let callbacksMap = new Map<string, () => void>();
callbacksMap.set('add', () => { add(); });
callbacksMap.set('subtract', () => { subtract(); });
callbacksMap.set('multiply', () => { multiply(); });
callbacksMap.set('divide', () => { divide(); });
callbacksMap.set('percent', () => { percent(); });
callbacksMap.set('negate', () => { negate(); });

if (numbers) {
    numbers.forEach(numberButton => {
        numberButton.addEventListener('click', () => {
            let currentValue = parseFloat(numberButton.textContent);
            console.log('clicked:', currentValue);
            display.value = display.value !== "0" ?
                display.value + numberButton.textContent : numberButton.textContent;

            buffer.push(currentValue);
        });
    });
}

for (let operation of operations) {
    console.log('operations');
    let operator = document.querySelector(`.op__key[op=${operation}]`);
    operator.addEventListener('click', () => {
        buffer.push()
        console.log('clicked:', opMap.get(operation));
        display.value += opMap.get(operation);
        resoperation = operation;
    });
}

equal.addEventListener('click', () => {
    if (resoperation) {
        callbacksMap.get(resoperation)();
    }
    display.value = numResult.toString();
    buffer = [];
    if(numResult != 0) {
        buffer.push(numResult);
    }
    numResult = 0;
});

clear.addEventListener('click', () => {
    display.value = "0";
    buffer = [];
    numResult = 0;
});

//Math functions
function add() {
    console.log('add!!');
    if (buffer.length >= 1) {
        for (let num of buffer) {
            numResult += +num;
        }
        buffer = [];
    }
}

function subtract() {
    console.log('subtract!!');
    if (buffer.length > 1) {
        let tmp = buffer.splice(0,1);
        numResult = tmp.pop();
        for (let num of buffer) {
            numResult -= +num;
        }
        buffer = [];
    }
}

function multiply() {
    console.log('multiply!!');
    result = 'multiply!!';
}

function divide() {
    console.log('divide!!');
    result = 'divide!!';
}

function percent() {
    console.log('percent!!')
    result = 'percent!!'
    let currentValue = parseFloat(display.value);
    currentValue *= 0.01;
    display.value = currentValue.toString();
    console.log('percent operation called: ', currentValue, display.value);
}

function negate() {
    console.log('negate!!');
    result = 'negate!!';
}
