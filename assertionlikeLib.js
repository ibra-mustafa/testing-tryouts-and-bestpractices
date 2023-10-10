const sum = () => {
  return 5;
};
const res = sum(3, 7);
expect(10).toBe(res);
function expect(actual) {
  return {
    toBe(expected) {
      if (expected !== actual) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
