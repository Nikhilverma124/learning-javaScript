let button=document.getElementById("myid");


console.dir(button);


let heading2=document.getElementsByClassName("myClass");

console.dir(heading2);
console.log(heading2); 


let paras=document.getElementsByTagName("p");
console.dir(paras);
console.log(paras);



// query selector return node list
let firstElements=document.querySelector("p");  //return 1st element
console.dir(firstElements);
console.log(firstElements);


let allelements=document.querySelectorAll("p"); // return all element related to p tag

console.dir(allelements);