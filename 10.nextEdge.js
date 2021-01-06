// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

const nextEdge = (side1, side2) => {
  if (side1 && side2 <= 0) {
    return "please enter a positive integer";
  }

  return side1 + side2 - 1;
};

console.log(nextEdge(2, 4));
