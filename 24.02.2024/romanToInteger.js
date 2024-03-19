function romanToInteger(s) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const value = romanNumerals[s[i].toUpperCase()];

    if (value < prevValue) {
      result -= value;
    } else {
      result += value;
    }

    prevValue = value;
  }

  return result;
}

const integerValue = romanToInteger("XI");
console.log(integerValue);