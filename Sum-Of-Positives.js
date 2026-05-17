//You get an array of numbers, return the sum of all of the positives ones.
const sumOfPositives = (arr) =>{
    let sum = 0;
    for(let i =0; i < arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumOfPositives([-2, -5 , 10, 5]));