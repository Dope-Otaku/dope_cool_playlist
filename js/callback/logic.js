// bye();
const h = document.getElementById('h')
hello(bye);
counter()


function hello(x){
    console.log("hello")
    x()
}

function bye(){
    console.log("bye")
}

display(counter)
function counter(){
    let counter = 'counter';
    for (let i in counter){
        console.log(counter[i])
        newCounter = [counter[i]]
    }
    console.log(newCounter.join(""))
}

function display(x){
    console.log(x)
    h.textContent = x

}