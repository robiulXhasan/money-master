document.getElementById("calculate-btn").addEventListener("click", function () {
  const income = getInputFieldValue("income");
  const foodCost = getInputFieldValue("food-cost");
  const rentCost = getInputFieldValue("rent-cost");
  const clotheCost = getInputFieldValue("clothe-cost");
  const totalExpenses = foodCost + rentCost + clotheCost;
  if (totalExpenses > income) {
    window.alert("Cut your coat according to your cloth!!!");
  } else {
    setElementInnerText("total-expenses", totalExpenses);
    const balance = getBalance(income, totalExpenses);
    setElementInnerText("balance", balance);
  }
});
document.getElementById("save-btn").addEventListener("click", function () {
  const income = getInputFieldValue("income");
  const foodCost = getInputFieldValue("food-cost");
  const rentCost = getInputFieldValue("rent-cost");
  const clotheCost = getInputFieldValue("clothe-cost");
  const totalExpenses = foodCost + rentCost + clotheCost;
  const savePercentage = getInputFieldValue("save-percentage");
  const saveAmount = (income * (savePercentage / 100)).toFixed(2);
  console.log(saveAmount);
  const balance = getBalance(income, totalExpenses);
  if (saveAmount > balance) {
    window.alert("You don't have enough money to save...!!");
  } else {
    setElementInnerText("saving-amount", saveAmount);
    const remainingBalance = getBalance(balance, saveAmount);
    setElementInnerText("remaining-balance", remainingBalance);
  }
});
