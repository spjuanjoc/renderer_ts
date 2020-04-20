console.log('Neumorphic calculator');

let display = document.querySelector("input");
let numbers = document.querySelectorAll(".num__key");
// let operators = document.querySelector(`.op__key`);
const equal = document.querySelector(".eq__key");
const clear = document.querySelector(".op__key[op=clear]");

let result = "result";
const buffer:string[] = [];

const operations =['add','subtract','multiply','divide','percent'];
let opMap = new Map<string,string>();
opMap.set('add','+');
opMap.set('subtract','-');
opMap.set('multiply','x');
opMap.set('divide','/');
opMap.set('percent','');
opMap.set('negate','--');

let callbacksMap = new Map<string,()=>void >();
callbacksMap.set('add',()=>{ add(); });
callbacksMap.set('subtract', ()=> {subtract();});
callbacksMap.set('multiply', ()=> {multiply();});
callbacksMap.set('divide', ()=> {divide();});
callbacksMap.set('percent',()=> {percent();});
callbacksMap.set('negate', ()=> {negate();});

if(numbers){
    numbers.forEach(numberButton => {
        numberButton.addEventListener('click',() => {
            display.value = display.value !== "0" ?
                display.value + numberButton.textContent : numberButton.textContent;
            let currentValue = parseFloat(display.value);
            buffer.push(display.value);
        });
    });
}

for (let operation of operations){
    console.log('operations');
    let operator = document.querySelector(`.op__key[op=${operation}]`);
    operator.addEventListener('click', () => {
        buffer.push()
        console.log('clicked:', operation, ' for: ', display.value);
        display.value += opMap.get(operation);
        callbacksMap.get(operation)();
    });
}

equal.addEventListener('click', () => {
    display.value = result;
});

clear.addEventListener('click', () => {
    display.value = "0";
})

//Math functions
function add(){
    console.log('add!!');
    result = 'add!!';
}
function subtract(){
    console.log('subtract!!');
    result = 'subtract!!';
}
function multiply(){
    console.log('multiply!!');
    result = 'multiply!!';
}
function divide(){
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
function negate(){
    console.log('negate!!');
    result = 'negate!!';
}
