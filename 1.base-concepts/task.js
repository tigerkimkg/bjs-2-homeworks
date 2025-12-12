"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4*a*c;
  let root;
  if (discriminant === 0) {
    root = -b/(2*a);
    arr.push(root);
  } else if (discriminant > 0) {
    root = (-b + Math.sqrt(discriminant) )/(2*a);
    arr.push(root);
    root = (-b - Math.sqrt(discriminant) )/(2*a);
    arr.push(root);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = percent/100/12;
  let bodyCredit = amount - contribution;
  let monthlyPayment = bodyCredit * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
  let totalPayment = (monthlyPayment * countMonths).toFixed(2);
  return +totalPayment;
}