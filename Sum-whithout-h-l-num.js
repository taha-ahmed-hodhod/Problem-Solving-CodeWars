// //Sum without highest and lowest number

//1- const sum = (arr) => {
//   let total = 0;
//   let maxValue = Math.max(...arr);
//   let minValue = Math.min(...arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== maxValue && arr[i] !== minValue) {
//       total += arr[i];
//     }
//   }
//   return total;
// };

//2- const sum = (arr) => {
//   let filterdArray = arr.filter((x) => x !== maxValue && x !== minValue);
//   let newArray = filterdArray.reduce(
//     (acc, currentValue) => acc + currentValue,
//     0,
//   );
//   return newArray;
// };

// 3 -  const sum = (arr) => {
//     if(arr === null || arr === undefined || arr === false ) return 0
//     return arr.sort((a,b) => a - b).slice(1, -1).reduce((acc, curr) => acc + curr);
// }

// console.log(sum([1, 5 , 11 , 2]));

const sumArray = (a) =>
  a
    ? a
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, curr) => acc + curr, 0)
    : 0;
    
console.log(sumArray([1, 1, 5, 11, 2]));
