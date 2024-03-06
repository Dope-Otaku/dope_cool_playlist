let radius = document.getElementById('radius')
// radius = 0;

const area = document.getElementById('area');
const diameter = document.getElementById('diameter');
const circumference = document.getElementById('circumference');
let pi = 3.14;






const calculate = () => {
    const radiusCont = parseFloat(radius.value)
    if (!isNaN(radiusCont)){
        // radius = Number(radius.value)
        const diameterValue = 2*radiusCont;
        const areaValue = pi * (radiusCont**2);
        const circumferenceValue = 2*pi*radiusCont;

        diameter.textContent = diameterValue;
        area.textContent = areaValue;
        circumference.textContent = circumferenceValue;
    }
    else{
        window.alert('wrong input')
        
    }
}