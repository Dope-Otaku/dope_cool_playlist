let number = document.getElementById('number')
const increase = document.getElementById('Increase')
const decrease = document.getElementById('Decrease')
const reset = document.getElementById('Reset')
let count = 0;

const numberValue = parseFloat(number.value)

increase.onclick = function(){
    count++;
    // console.log(count)
    number.textContent = count;
}

decrease.onclick = function(){
    if(count!=0){
        count--;
        number.textContent = count;
    }
}

reset.onclick = function(){
    count = 0;
    number.textContent = count;
}