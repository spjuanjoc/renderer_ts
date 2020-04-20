console.log('Neumorphic calculator');

let calculator = document.querySelector("input");

let buttons = document.querySelectorAll(".num__key");

if(buttons){
    buttons.forEach( button => {
        button.addEventListener('click',() => {
            calculator.value = calculator.value !== "0" ?
                calculator.value + button.textContent : button.textContent;
        });
    });
}
