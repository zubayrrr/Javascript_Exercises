function triArea(base, height) {
  return (base * height) / 2;
}

console.log(triArea(4, 9));

// es6

const areaOfTriangle = (base, height) => {
  const a = base * height;
  const b = a / 2;
  return b;
};

console.log(areaOfTriangle(4, 9));
