 // User input(Deposit amount) is stored into 'depositValueInput' variable.
const depositValueInput= document.getElementById('deposit');
// Displayed Deposit amount is stored into 'depositAmount' variable.
const depositAmount = document.getElementById('deposit-value');
const balance = document.getElementById('balance-value');
// Deposit error message
const depositErrorMessage = document.querySelector('.deposit-error-message');
// User input(Withdraw amount) is stored into 'withdrawValueInput' variable.
const withdrawValueInput = document.getElementById('withdraw');
// Displayed Withdraw amount is stored into 'withdrawAmount' variable.
const withdrawAmount =  document.getElementById('withdraw-value');
// Withdraw error message
const withdrawErrorMessage = document.querySelector('.withdraw-error-message');

document.getElementById('deposit-button').addEventListener('click',function (){
    if(depositValueInput.value > 0){
        // Update Deposit amount 
        // Storing Deposit amount's updated value(user input) in 'newDepositValue' variable.
        const newDepositValue = depositValueInput.value;
        const totalDeposit = parseFloat(depositAmount.innerText) + parseFloat(newDepositValue);
        depositAmount.innerText = totalDeposit;
        
        //Update account balance in case of Deposit
        const newBalance = parseFloat(balance.innerText) + parseFloat(newDepositValue);
        balance.innerText = newBalance;
    }
    else{
        depositErrorMessage.innerText = 'Enter a valid value!';
        depositErrorMessage.style.display = 'block';
    }
        // const previousBalance = balance.innerText;
        // const newBalance = depositValueInput.value;
        // const totalBalance = parseFloat(previousBalance) + parseFloat(newBalance);
        // balance.innerText = totalBalance;
        
        // Clear the deposit amount input field
        depositValueInput.value = '';
})

document.getElementById('withdraw-button').addEventListener('click',
function(){
    if(withdrawValueInput.value > 0){
        
        if(parseFloat(balance.innerText) > parseFloat(withdrawValueInput.value)){ 
            // Storing Withdraw amount's updated value(user input)in'newWithdrawValue' variable.
            const newWithdrawValue = withdrawValueInput.value;
            const totalWithdraw = parseFloat(withdrawAmount.innerText) + parseFloat(newWithdrawValue);
            withdrawAmount.innerText = totalWithdraw;
            
            //Update account balance in case of Withdraw 
            const newBalance = parseFloat(balance.innerText) - parseFloat(newWithdrawValue);
            balance.innerText = newBalance;
        }
        else{
            
            withdrawErrorMessage.innerText = 'Your balance is not sufficient!';
            withdrawErrorMessage.style.display = 'block';
        }
    }
    else{
        withdrawErrorMessage.innerText = 'Enter a valid value!';
        withdrawErrorMessage.style.display = 'block';   
    }    
    // Clear the deposit amount input field
    withdrawValueInput.value = '';
})

document.getElementById('deposit-button').addEventListener('blur',function (){
    depositErrorMessage.style.display = 'none';
})

document.getElementById('withdraw-button').addEventListener('blur',function (){
    withdrawErrorMessage.style.display = 'none';
})


