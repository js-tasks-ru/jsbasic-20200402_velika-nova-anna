/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let result = [];
  let resultFinal = {};
  str.split(/,| /).map(function(item){
    if (/^-?\d+\.?\d*$/.test(item)) result.push(item);
  });
  result.sort((a, b) => a - b );
  resultFinal.min = +result[0];
  resultFinal.max = +result[result.length-1];
  return resultFinal;
}
