
// handle deposit button
document.getElementById('d-submit').addEventListener('click', function () {
    //get the amount deposited
    const dAmount = document.getElementById('d-amount');
    if (dAmount.value <= 0) {
        console.log('not valid number');
    } else {
        //deposit total
        const currentDeposit = document.getElementById('d-total');

        // add current and upcomming deposit
        const finalDeposit = parseFloat(currentDeposit.innerText) + parseFloat(dAmount.value);
        // Update balance 
        const balanceTotal = document.getElementById('balance');
        const finalBanlance = parseFloat(dAmount.value) + parseFloat(balanceTotal.innerText);
        if (!isNaN(finalBanlance) && !isNaN(finalDeposit)) {
            currentDeposit.innerText = finalDeposit;
            balanceTotal.innerText = finalBanlance;
        } else { console.log('Input is in valid?') }

    }
    // clear the dinput filed
    dAmount.value = '';

})

// handle withdraw 
document.getElementById('w-submit').addEventListener('click', function () {
    // withdraw amount by input
    const wAmount = document.getElementById('w-amount');
    if (wAmount.value <= 0) {
        console.log('not valid number');
    } else {
        // previous withdraw total
        const wTotal = document.getElementById('w-total');
        // current and previous withdrow amount calculate
        const finalWithdrawTotal = parseFloat(wTotal.innerText) + parseFloat(wAmount.value);
        //update balance
        const balanceTotal = document.getElementById('balance');
        const finalBanlance = parseFloat(balanceTotal.innerText) - parseFloat(wAmount.value);
        if (!isNaN(finalBanlance) && !isNaN(finalWithdrawTotal)) {
            // set final withdraw amount
            wTotal.innerText = finalWithdrawTotal;
            //set final balance
            balanceTotal.innerText = finalBanlance;
        } else { console.log('input is invalid!!') }
    }
    // clear the dinput filed
    wAmount.value = '';
})