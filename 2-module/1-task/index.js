/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  var sum = 0;
  for (let key in salaries) {
    if(typeof salaries[key] === "number") {
      sum = sum + salaries[key];
    } 
  }
  return sum;
}
