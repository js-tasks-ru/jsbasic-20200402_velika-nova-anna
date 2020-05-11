/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let m = [];
   arr.forEach(function(item, index, array) {
     if(item >=a && item <=b) {
      m.push(item);
     }
  });
  return m;
}
