const payment = document.getElementById('Payment_method')
const card = document.getElementById('cardBtn')
const upi = document.getElementById('upiBtn')
const cash = document.getElementById('cashDeliveryBtn')
const p1 = document.getElementById('desc')
const p2 = document.getElementById('desc1')
const btn = document.getElementById('btn')

btn.onclick = function(){
    // console.log("clicked");
    if(payment.checked){
        if(card.checked){
            p1.textContent = `you will be paying through card...`
        }
        else if(upi.checked){
            p1.textContent = `you will be paying through upi....`
        }
        else if(cash.checked){
            p1.textContent = `you should be ready with change as it will be delivered to you shortly...`
        }
        else{
            p2.textContent = `select one of the payment method...`
        }
    } else {
        p2.textContent = (`payment box not checked and  payment type not selected`);
    }
}