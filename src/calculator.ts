console.log('Neumorphic calculator');

let display = document.querySelector("input");
let numbers = document.querySelectorAll(".num__key");
const equal = document.querySelector(".eq__key");
const clear = document.querySelector(".op__key[op=clear]");

let result = "";
let numResult: number = 0;
let numBuffer: number[] = [];
let opBuffer: Function[] = [];
let resoperation: string;

const operations = ['add', 'subtract', 'multiply', 'divide', 'percent'];
let opMap = new Map<string, string>();
opMap.set('add', '+');
opMap.set('subtract', '-');
opMap.set('multiply', 'x');
opMap.set('divide', '/');
opMap.set('percent', '');
opMap.set('negate', '--');

let callbacksMap = new Map<string, Function>();
callbacksMap.set('add', add);
callbacksMap.set('subtract', subtract);
callbacksMap.set('multiply', multiply);
callbacksMap.set('divide', divide);
callbacksMap.set('percent', percent);
callbacksMap.set('negate', negate);

if (numbers) {
    numbers.forEach(numberButton => {
        numberButton.addEventListener('click', () => {
            let currentValue = parseFloat(numberButton.textContent);
            console.log('clicked:', currentValue);
            display.value = display.value !== "0" ?
                display.value + numberButton.textContent : numberButton.textContent;

            numBuffer.push(currentValue);
        });
    });
}

for (let operation of operations) {
    console.log('operations');
    let operator = document.querySelector(`.op__key[op=${operation}]`);
    operator.addEventListener('click', () => {

        const opSymbol = opMap.get(operation);
        const opCallback = callbacksMap.get(operation);
        console.log('clicked:', opSymbol);
        display.value += opSymbol;
        opBuffer.push(opCallback);
        resoperation = operation;
        if(operation == 'percent'){
            percent();
        }
    });
}

equal.addEventListener('click', () => {
    if (resoperation) {
        callbacksMap.get(resoperation)();
    }
    display.value = numResult.toString();
    numBuffer = [];
    if (numResult != 0) {
        numBuffer.push(numResult);
    }
    numResult = 0;
});

clear.addEventListener('click', () => {
    display.value = "0";
    numBuffer = [];
    opBuffer = [];
    numResult = 0;
});

//Math functions
function add() {
    console.log('add!!');
    if (numBuffer.length >= 1) {
        console.log(">",numBuffer);
        for (let num of numBuffer) {
            numResult += +num;
        }
        numBuffer = [];
        console.log("empty",numBuffer);
    }
}

function subtract() {
    console.log('subtract!!');
    if (numBuffer.length > 1) {
        console.log(numBuffer);
        let tmp = numBuffer.splice(0, 1);
        numResult = tmp.pop();
        for (let num of numBuffer) {
            numResult -= +num;
        }
        numBuffer = [];
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
