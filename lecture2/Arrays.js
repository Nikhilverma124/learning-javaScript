// //arr is a object in this we use index insted of key
// let arr=[10,20,30,40,50];
// console.log(arr);

// console.log(arr.length); //property


// for(let i=0;i<arr.length;i++ ){
//     console.log(arr[i]);
// }

// //we can also write loop like this 

// for(let i of arr){
//     console.log(i);
// }
// //arrays is mutable 
// //str we not change because it is immutable

// let str="hello";

// str[0]="y";



//question- for a given array with marks of students [85,97,44,37,76,60] Find the average marks of the entire class.
let arr=[85,97,44,37,76,60];

let count=0;

for(let i of arr){
    count=count+i;
}

let avg=count/arr.length;
console.log(avg);


//question- for a given array with prices of 5 items [250,645,300,900,50]
//all items have an offer of 10% off on them . change the array to store final price after applying offer.

let items=[250,645,300,900,50];

let index=0;
for(let i of items){
    console.log(`value at index ${index}=${i}`);
    let dis=i-(i/10);
    items[index]=dis;
    console.log(`value after offer=${items[index]}`);
    index++;
}




//Arrays method  push, pop, toString ,concat , unshift, shift

let foodItems=["potato","apple","tomato"];

foodItems.push("banana");
foodItems.push("chips");

console.log(foodItems);

foodItems.pop();
console.log(foodItems);

let marks=[1,2,3,4,5];

console.log(marks.toString());  //it is not change the original array only for print 


//concat

let marvel=["thor","spiderman","ironman"];
let dc=["superman","batman"];

let heros=marvel.concat(dc);

console.log(heros);

let a=[1,2,3,4,5];

a.splice(2,2,101,102,103,104);

console.log(a); 



//question - create an array to store companies "Bloomberg","Microsoft","uber","google","IBM","netflix"

//a- remove the first company from the array
//b- remove uber & add ola in its place
//add amazon at the end

let company=["Bloomberg","Microsoft","uber","google","IBM","netflix"];

company.shift();
console.log(company);

for(let i=0;i<company.length;i++){
    if(company[i]==="uber"){
        company.splice(i,1,"Ola");
    }
}

company.push("Amazon");

console.log(company);










