// part1.js

function getIntegerValueOfElementId(someElementId, someElement=document) {
  let stringValue = someElement.getElementById(someElementId).value;
  return parseInt(stringValue);
}

function printSum() {
  debugger
  let num1 = getIntegerValueOfElementId('num1');
  let num2 = getIntegerValueOfElementId('num2');

  document.getElementById("sum").innerHTML = "Sum: " + calculateSum(num1, num2);
}

function calculateSum(num1, num2) {
  let result = num1 + num2;
  return result;
}

function init() {
  document.getElementById('printSum').addEventListener('click', printSum);
}

window.addEventListener('DOMContentLoaded', init);