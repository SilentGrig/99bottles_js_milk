const capitalize =
  string => string.charAt(0).toUpperCase() + string.slice(1);

const downTo = (max, min) => {
  const numbers = [];
  for (let n = max; n >= min; n--) {
    numbers.push(n);
  }
  return numbers;
};

const testPlaysVerseRole = rolePlayer => {
  test('plays verse role', () => {
    expect(rolePlayer).toHaveProperty('lyrics', expect.any(Function));
  });
};

export { capitalize, downTo, testPlaysVerseRole };
