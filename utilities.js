function getInputFieldValue(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}

function setElementInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function getBalance(total, expense) {
  return total - expense;
}
