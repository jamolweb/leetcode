// ? reverse with method
const reverse = (str) => {
  const arrOfChar = str.split(""); // example string: "hello world". It will return: ['h', 'e', 'l', 'l', 'o', ' ', 'w'......]

  arrOfChar.reverse(); // this method will reverse elements in array

  let reversed = arrOfChar.join(""); // this method combine elements in array to one string

  return reversed; // returning the reversed string
};

console.log(reverse('he'));

// ? much  more simple solution 
// const reverse = (str) => str.split("").reverse().join("");

// ? reverse with for loop
// const reverse = (str) => {
//   let reversed = '';

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// };

// console.log(reverse("hello"));
