// let div=document.querySelector("h2");

// div.innerText+=" from Apna Collage";


let divs=document.querySelectorAll(".box");
// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";


let index=0;

divs.forEach((div)=>{
    div.innerText=`new unique value ${index}`;
    index++;
})

