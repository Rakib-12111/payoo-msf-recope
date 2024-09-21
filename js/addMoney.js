document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    // get the add moeny and pin number here


    const addMoney = document.getElementById('input-add-money').value;

    const pinNumber = document.getElementById('input-pin-number').value;

   // get the varify pin Nimber

   if( pinNumber === '1234'){
   
    // get the account balance
    

   }
    else{
        alert('Faild to the adding money')
    }

    
})
