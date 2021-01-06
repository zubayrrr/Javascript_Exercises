// an incrementing for loop
for (counter = 0; counter < 5; counter++) {
  console.log("Loop" + counter);
}

// a decrementing for loop
for (counter = 5; counter > 0; counter--) {
  console.log("Loop" + counter);
}

// using break inside for loop
for (counter = 0; counter < 5; counter++) {
  console.log("Loop" + counter);
  if (counter === 3) break;
}

// using for loop to loop through an array
const names = ["aphex twin", "jon hopkins", "matzo", "san holo"];

for (counter = 0; counter < names.length; counter++) {
  console.log(names[counter]);
}
for (name of names) {
  //  for of loop
  //deconstrucing/destructing the array and assigning it to name var
  console.log(name);
}

// looping through an object
const user = { firstName: "aphex", lastName: "twin" };
for (key in user) console.log(user[key]); // using key var to access individual key value pair

// while loop
let i = 0;
while (i < 10) {
  i++; // increment only inside the loop, not incrementing will create infinite loop

  if (i === 5) break; // using break

  // using continue to break or skip a loop and then continuing to the next loop

  // if (i === 5) continue;
  console.log(i);
}

// do while loop

let x = 0;

do {
  // checks after running the loop
  x++;
  console.log(x);
} while (x < 10); // stops once checks, its like saying till x stays less than 10 keep "doing" what you're doing, once you've met the condition, stop.

// for each higher order array function

const animals = ["cats", "dogs", "rats", "bats"];

animals.forEach((animal) => {
  // destructures and assigns single value from the array to animal var and keeps looping till it finishs the array
  console.log(animal);
});

// for in loop with an object
const post = { id: 2, slug: "hello-world", title: "Hello" }; // iterates through properties of an object

for (const prop in post) {
  // prop variable is assigned indivitual property of the object

  console.log(prop + ": " + post[prop]);
}

// for in loop with an array

const postIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const i in postIds) {
  console.log(postIds[i]);
}

// for of looping in es6, iterates through items in a collection such as an array

const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const post of posts) {
  console.log(post);
}
