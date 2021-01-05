function addition(a, b) {
  return a + b;
}

console.log(addition(1, 2));

// other ways of doing this

// using es6 methods

const addition_es6 = (a, b) => a + b;

console.log(addition_es6(4, 2));

// with type check

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "sorry, please check your input";
  }
  return a + b;
}
