/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
 let str = [];
  let result = data.map(function(item, index, array) {
    if(item.age <= age) str.push(item.name + ', ' + item.balance);
  });
  return str.join('\n');
}
