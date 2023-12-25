// Global Scope
const PIE = 3.14;
function foo() {
  console.log(PIE);

  // function scope
  const age = 32;
  console.log(age);
}
// block scope
if (true) {
  const fullName = "Samar";
  console.log(fullName);
}

console.log(PIE); // 3.14
console.log(age); // ReferenceError
console.log(fullName); // ReferenceError
