/**
 * 
 */
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber =  getInputFieldValueById('input-pin-number');

    if(isNaN(addMoney)){
        alert('Failed to add Moeny');
        return;
    }
    
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;
        
        //add to transaction hisoty
         const p = document.createElement('p');
         p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`

         //should be a common function
         document.getElementById('transaction-container').appendChild(p); 
    }
    else{
        alert("Invalid, Please Correct pin input");
    }
});
























// if(pinNumber === '1234'){
//     const balance = document.getElementById('account-balance').innerText;
//     const balanceNumber = parseFloat(balance);
//     const newBalance = balanceNumber + addMoneyNumber;
//     document.getElementById('account-balance').innerText = newBalance;
// }
// else{
//     alert('Failed to add Money');
// }