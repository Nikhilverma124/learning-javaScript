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


function createRectangle(len,bre){   //we can also give parameter
    return rectangle={
        length : len,
        breath: bre,

        draw : function(){
            console.log('drawing rectangle');
        }

        //we can also write this like this
        // draw (){
        //     console.log('drawing rectangle');
        // }

    };
    
}

let rectangleObj1=createRectangle(4,5);
let rectangleObj2=createRectangle(7,8);
let rectangleObj3=createRectangle(10,11);


//constructor function
