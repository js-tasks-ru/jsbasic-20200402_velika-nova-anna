/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  return str.split('-').map(function(item, index) {
    if (index == 0) {
      return item;
    } else {
      return item.charAt(0).toUpperCase() + item.substr(1);
    }    
  }).join('');
}
