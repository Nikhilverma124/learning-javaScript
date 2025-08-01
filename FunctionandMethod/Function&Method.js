// function myFunction(){
//     console.log("welcome to apna collage");
//     console.log("we are learning js: ");
// }

// myFunction();


// //arrow function

// const arrowSum=(a,b)=>{
//     console.log(a+b);
//     //we can return also
// }


// // create a function using "function" keyword that takes a string as an argument & return the number of vowels in the string
// //create an arrow function to perform the same task

// const vowel=(str)=>{
//     count=0;
//      for(let char of str){
//         if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
//             count++;
//         }
//      }
//      return count;
// }



// // forEach loop in array
// let arr=[1,2,3,4,5];

// arr.forEach((val)=>{
//     console.log(val+1);
// }
// )



//question for a given array of number print the square of each value using the foreach loop

// let arr=[1,2,3,4,5];

// arr.forEach((val)=>{
//     console.log(`This is the square of ${val} : ${val*val}`);
// })


//There is one more method

// let calcSquare=(num)=>{

//     console.log(num*num);
    

// }; 

// arr.forEach(calcSquare);




//using map

// let arr=[1,2,3,4,5];

// let newArray=arr.map((val)=>{
//     return val*2;
// })

// console.log(newArray);




//using filter

// let arr=[1,2,3,4,5];

// let newArray=arr.filter((val)=>{
//     return val%2===0;
// })

// console.log(newArray);



//using reduce

let arr=[1,4,3,2];

const output=arr.reduce((res,curr)=>{
    return res+curr;

}) 
 console.log(output);

 //print the largest number

 const largest=arr.reduce((res,curr)=>{
    return res<curr ? curr : res;

 })

 console.log(largest);


 //question  we are given array of marks of students filter out of the marks of students that scored 90+.
 // take a number n as input from user create an array of numbers from 1 to n.
 // use the reduce method to calculate sum of all number in the array
 //use the reduce method to calculate product of all numbers in the array

 let marks=[40,50,101,102,20,10,140,90,95];

 let topper=marks.filter((val)=>{
    return val>=90;
 })

 console.log(topper);


 //next task


 let input=prompt("Enter the array seperated by space: ");

let array=input.split(" ").map(Number);

let sum=array.reduce((res,curr)=>{
    return res+curr;
})

console.log(sum);

//next task
let product=array.reduce((res,curr)=>{
    return res*curr;
})

console.log(product);


