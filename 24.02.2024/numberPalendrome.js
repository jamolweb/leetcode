let isPalindrome = function (x) {
  const len = String(x).length;
  const numberToString = String(x);

  for (let i = 0; i < len / 2; i++) {
    if (numberToString[i] !== numberToString[len - 1 - i]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(11));
