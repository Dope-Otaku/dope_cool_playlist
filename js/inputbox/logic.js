let username;
// username = window.prompt("what is your name!");

let text = document.getElementById('text')
const text2 = document.getElementById('he')


function alarmText(){
    const ne = text.value
    text2.textContent = `check console it should be ${ne}`
    console.log(ne)
    // window.alert(ne)
}