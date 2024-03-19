// const maxChar = (str) => {
//   const charMap = {};

//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char] = charMap[char] + 1;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   const arrOfValues = Object.values(charMap);
//   const arrOfKeys = Object.keys(charMap);

//   const maxLength = Math.max(...arrOfValues);

//   const maxUsedChar = arrOfKeys[maxLength];

//   return maxUsedChar;
// };
const maxChar = (str) => {
  const charMap = {};

  let max = 0,
    maxChar = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
  }

  for (const [key, value] of Object.entries(charMap)) {
    if (value > max) {
      max = value;
      maxChar = key;
    }
  }

  return maxChar;
};

console.log(maxChar("hello"));
// h: 1,
//     e: 1,
//     l: 2,
//     o: 1
