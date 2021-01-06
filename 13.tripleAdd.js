// currying in Javascript

// simple function
function tripleAdd(x, y, z) {
  return x + y + z;
}

// curried function

function tripleAddCurry(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

console.log(tripleAdd(1, 2, 3));
console.log(tripleAddCurry(10)(20)(30));
