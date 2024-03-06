const tempValue = document.getElementById('search')
const ftc = document.getElementById('ftc')
const ctf = document.getElementById('ctf')
const btn = document.getElementById('press')
const returnValue = document.getElementById('text')


btn.onclick = function convert(){
    if(ftc.checked){
        temp = parseFloat(tempValue.value)*9/5 +32
        returnValue.textContent = `temperature is ${temp}degree celsius`
        console.log(`ftc is selscted`)
    }
    else if(ctf.checked){
        temp = (parseFloat(tempValue.value)-32)*(5/9)
        returnValue.textContent = `temperature is ${temp}degree fahrenheit`
        console.log(`ctf is selscted`)

    }
}