let div=document.querySelector("div");

let id=div.getAttribute("id");
console.log(id);

let name=div.getAttribute("name");
console.log(name);


//node.style se main yahi se css ko change krr sakta hu
div.style.backgroundColor="green";



//insert elements

let button=document.createElement("button");

button.innerText="click me";

div.append(button);   //div ke andaar append kiya woh bhi last me



let newHeading=document.createElement("h1");

newHeading.innerText="This is your new heading";

div.before(newHeading);