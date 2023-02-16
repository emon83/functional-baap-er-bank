/* 
step-01: add deposit button event handler
step-02: get deposit amount by using getInputFieldValueById function
step-03: get previous deposit amount by using  getTextElementValueById function
step-04: calculate new deposit total
step-05: set deposit total value
step-06: get previous balance by using the function
step-07: set value in balance total
*/

document.getElementById('btn__deposit').addEventListener('click', function () {
   const newDepositAmount = getInputFieldValueById('deposit__field');
  const previousDepositTotal = getTextElementValueById('deposit__total');
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  setTextElementValueById('deposit__total', newDepositTotal);
  
  const previousBalanceTotal = getTextElementValueById('balance__total');
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById('balance__total', newBalanceTotal);
})