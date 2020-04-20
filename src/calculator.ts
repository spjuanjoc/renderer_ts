console.log('Neumorphic calculator');

let display = document.querySelector("input");
let numbers = document.querySelectorAll(".num__key");
// let operators = document.querySelector(`.op__key`);
const equal = document.querySelector(".eq__key");
const clear = document.querySelector(".op__key[op=clear]");

let result = "result";

if(numbers){
    numbers.forEach(numberButton => {
        numberButton.addEventListener('click',() => {
            display.value = display.value !== "0" ?
                display.value + numberButton.textContent : numberButton.textContent;
        });
    });
}

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

function add(){
    console.log('add!!');
}

for (let operation of operations){
    console.log('operations');
    let operator = document.querySelector(`.op__key[op=${operation}]`);
    operator.addEventListener('click', () => {
        operate(operation);
        console.log('clicked: ', operation, ' for: ', display.value);
        display.value += opMap.get(operation);
        callbacksMap.get(operation)();
        // operator();
    });
}
const buffer:string[] = [];

function operate(operation) {
    let currentValue = parseFloat(display.value);
    console.log('current value: ', currentValue );

    if(operation == "percent"){
        currentValue *= 0.01;
        display.value = currentValue.toString();
        console.log('percent operation called: ', currentValue, display.value);
    }
    else{
        if(buffer.length == 0){
            let lhs = currentValue;
        }
        // if (buffer && buffer.length !== 0){
        //     buffer.push({value: currentValue});
        //     const result = evaluate(buffer);
        //     display.value = ""
        // }
    }
}

function evaluate(op:string):string{

    if (op == 'add'){
        // add()
    }
    return "";
}

// function add(lhs:number, rhs:number):number{
//     return lhs + rhs;
// }


equal.addEventListener('click', () => {
    display.value = result;
});


clear.addEventListener('click', () => {
    display.value = "0";
})
