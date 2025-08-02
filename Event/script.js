let button=document.createElement("button");
button.innerText="Click me!"
document.querySelector("body").prepend(button);


let para=document.createElement("p");
para.innerText="Hi my name is Nikhil Verma and button is clicked successfully!!";
button.onclick=function(){
    console.log("I am ok!!!");
    //alert("button clicked!!");
    document.querySelector("button").after(para);
}

let button2=document.createElement("button");
button2.innerText="Click me 2 time!";

let para2=document.createElement("p");
para2.innerText="second button";
document.querySelector("div").before(button2);

button2.ondblclick=function(){
    document.querySelector("div").before(para2);
}


let button3=document.createElement("button");

button3.innerText="Change Mode!";

document.querySelector("body").append(button3);

let currMode="light";

button3.addEventListener("click",()=>{
    if(currMode==="light"){
     currMode="dark";
    document.querySelector("body").style.backgroundColor="black";
}
    else{
        currMode="light";
       document.querySelector("body").style.backgroundColor="white";
    }

    console.log(currMode);
});

