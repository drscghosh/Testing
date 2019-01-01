const { sum, subtract, multiply, division } = require("./sketch");
test("Sum", () => {
  expect(sum(4, 5)).toBe(9);
});
test("subtract", () => {
  expect(subtract(4, 5)).toBe(-1);
});
test("multiply", () => {
  expect(multiply(4, 5)).toBe(20);
});
test("division", () => {
  expect(division(10, 2)).toBe(5);
});