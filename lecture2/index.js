console.log('chaliye shuru krte hai')

//object crete

// let rectangle={
//     length :1,
//     breath :2, 

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };



//factory function 

// function createRectangle(){
//     return rectangle={
//         length :1,
//         breath: 2,

//         draw : function(){
//             console.log('drawing rectangle');
//         }

//         //we can also write this like this
//         // draw (){
//         //     console.log('drawing rectangle');
//         // }

//     };
    
// }

// let rectangleObj1=createRectangle();


// function createRectangle(len,bre){   //we can also give parameter
//     return rectangle={
//         length : len,
//         breath: bre,

//         draw : function(){
//             console.log('drawing rectangle');
//         }

//         //we can also write this like this
//         // draw (){
//         //     console.log('drawing rectangle');
//         // }

//     };
    
// }

// let rectangleObj1=createRectangle(4,5);
// let rectangleObj2=createRectangle(7,8);
// let rectangleObj3=createRectangle(10,11);


//constructor function
//constructor ik assa function jo ki apki property or method ko innicilize krta hai
//isme hame return nhi krna padhta
//or ham fuction ko create krte hai toh hame pascol notation ko follow krna chahiye eg mean first word capital (NumberOfDigit)
// function Rectangle(len, bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw= function(){
//         console.log('drawing');
//     }
// }

// //object creation using constructor

// let obj=new Rectangle(3,7);

// //Dynamic  Nature of objects in which we can add property or delete
// obj.color='yellow';

//delete obj.color;

//delete obj.length;



//constructor property
 //function is a object
  



 let rectangle={
    length:2,
    breadth: 10
 };


 //For IN
//  for(let key in rectangle){

//     //keys are reflected through key variable
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
 //}



 //for of
 //for of use with iterative

//  for(let key of Object.entries(rectangle)){
//     console.log(key);
//  }



//it will check color property present hai kki nhi rectangle me
if('color' in rectangle){
    console.log('present');
}else{
    console.log('absent');
}






