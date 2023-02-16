/* 
step-01: add withdraw button event handler
step-02: get withdraw amount by using getInputFieldValueById function
step-03: get previous withdraw amount by using  getTextElementValueById function
step-04: calculate new withdraw total and set the value
step-4.5: set new withdraw total by using setTextElementValueById function
step-05: get previous  balance total by using getTextElementValueById function
step-06: calculate new balance total
step-07: set balance total using setTextElementValueById function
 */

document.getElementById('btn__withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw__field');

    const previousWithdrawTotal = getTextElementValueById('withdraw__total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    setTextElementValueById('withdraw__total', newWithdrawTotal);

    const previousBalanceTotal = getTextElementValueById('balance__total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance__total', newBalanceTotal);
})