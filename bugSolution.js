function myFunc() {
  const args = Array.from(arguments);
  console.log(args);
}

myFunc(1, 2, 3); // Output: [1, 2, 3]