document.getElementById('btn_deposit').addEventListener('click', function () {
    // 3-step
    const depositField = document.getElementById('input_deposit');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // 3-step
    const depositeTotalElement = document.getElementById('deposit_total');
    const previousDepositTotalString = depositeTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // calculation and set up-2
    const currentDepositeTotal = previousDepositTotal + newDepositAmount;
    depositeTotalElement.innerText = currentDepositeTotal;




    // 3-step
    const balanceTotalElement = document.getElementById('balace_total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // calculation and set up-2
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    // clear input
    depositField.value = '';

});