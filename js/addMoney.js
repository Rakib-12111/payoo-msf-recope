document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    // get the add moeny and pin number here


    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney)

    const pinNumber = document.getElementById('input-pin-number').value;

   // get the varify pin Nimber

   if( pinNumber === '1234'){
   
    // get the account balance
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);
    
    const newBalance = addMoneyNumber + balanceNumber ;
    
    document.getElementById('account-balance').innerText = newBalance;

   }
    else{
        alert('Faild to the adding money')
    }

    
})
