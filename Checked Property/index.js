// .checked = property that determines the checked state of an
//            HTML checkbox or radio button element 

const myCheckbox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById('visaBtn');
const masteCardBtn = document.getElementById('masterCardBtn');
const payPalBtn = document.getElementById('payPalBtn');
const mySubmit = document.getElementById('mySubmit');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = 'You are subscribed';
    }
    else{
        subResult.textContent = 'You are not subscribed';
    }

    if(visaBtn.checked){
        paymentResult.textContent = 'You are paying via visa';
    }
    else if(masteCardBtn.checked){
        paymentResult.textContent = 'You are paying via the mastecard';
    }
    else if (payPalBtn.checked){
        paymentResult.textContent = 'You are paying using Pay Pal';
    }
    else{
        paymentResult.textContent = 'You must select a payment type';
    }
}