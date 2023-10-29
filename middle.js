const middle = function(arr) {
  if (arr.length === 1 || arr.length === 2) {
    return [];
  }

  const num1 = arr[Math.floor(arr.length / 2)];
  const num2 = arr[Math.floor(arr.length / 2) - 1];
  
  if (arr.length % 2 === 1) {
    return [num1];
  }

  if (arr.length % 2 === 0) {
    return [num2, num1];
  }

};

module.exports = middle;

