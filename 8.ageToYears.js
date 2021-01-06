function calcAge(age) {
  if (typeof age == "number" && age <= 0) {
    return "please enter a positive number";
  }
  return age * 365;
}

console.log(calcAge(21));
