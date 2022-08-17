document.getElementById('btn_withdraw').addEventListener('click', function () {

    const withdrawField = document.getElementById('withdrawField');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('pls number input');
        return;

    }

    const previousWithdrawTotalElement = document.getElementById('withdraw_total');
    const previousWithdrawTotalElementString = previousWithdrawTotalElement.innerText;
    const previousWithdrawTotalElementAmount = parseFloat(previousWithdrawTotalElementString);






    const balanceTotalElement = document.getElementById('balace_total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    if (newWithdrawAmount > previousBalanceTotal) {
        alert('baper bank a taka nai');
        return;

    }

    const currentWithDrawAmount = previousWithdrawTotalElementAmount + newWithdrawAmount;
    previousWithdrawTotalElement.innerText = currentWithDrawAmount;


    const newBalaceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalaceTotal;





});