function myFunction(){
    console.log("hello");
    console.log("world");
}
myFunction();

// function myFunction(msg, n){
//         console.log(msg, n);
//     }
// myFunction("I love JS", 100)

//sum of two numbers 
// function sum(x,y){
//     console.log(x+y);
// }
// sum (15, 5);

// function sum(x,y){
//    //local variables -> 
//    s =x+y  ;
//    console.log("before return");
//    return s;
// }
// let val = sum(15,5);
// console.log(val)


//arrow function
// const arrowSum = (a,b)=>{
//    console.log(a+b);
// }

// const x = 5;

// const arrowMul = (a,b) => {
//    console.log(a*b)
// }

// let arrowMul = (a,b) => {
//    return a*b;
// };

// arrowMul = 5;

// const printHello = () => {
//     console.log("hello");
// };

// function countVowels(str){
//     let count = 0;
//     for (const char of str){
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u" 
//         ){
//           count++;  
//         }
//     }
//     return count;
// }

// let arr=[1,2,3,4,5]
// arr.forEach (function printVal (val)
// {
//     console.log(val);
// } );

//map method
// let nums = [1,2,3];
// let newArr = nums.map((val)=>{
//     return val;
// });
// console.log(newArr);

//FILTER METHOD
// let arr = [1,2,3,4,5,6,7];
// let evenArr = arr.filter ((val) =>{
//    return val % 2===0;
// });
// console.log(evenArr);

// const array1 = [1,2,3,4];
// const initialVal = 0;
// const sumWithInitial = array1.reduce(
//     (accumulator, currentVal) => accumulator+currentVal,
//     initialVal,
// );
// console.log(sumWithInitial);

let arr = [1,2,3,4,5]
const output = arr.reduce((res, curr) =>{
return res+curr;
});
console.log(output);