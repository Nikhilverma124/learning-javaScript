let button=document.createElement("button");
button.innerText="Click me!";
document.querySelector("body").prepend(button);
button.style.color="white";
button.style.backgroundColor="blue";

let para=document.querySelector(".content");

para.classList.add("update");


