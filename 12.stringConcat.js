// Write a function that returns the string "something" joined with a space " " and the given argument a.

const addSomething = (string) => `something ${string}`;

console.log(addSomething("is better than nothing"));

// or

const concat = (string) => {
  return "something " + string;
};

console.log(concat("out of nothing"));

// or else

const giveMeSomething = (str) => ["something", str].join(" ");

console.log(giveMeSomething("out of nothing"));
