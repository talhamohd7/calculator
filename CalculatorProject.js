// const buttons = document.querySelectorAll('button');

// let inputString = '';
// var cons=document.getElementById('console');
// buttons.forEach(button => {
//   button.addEventListener('click',function () {

//     const buttonValue = button.textContent;
//     inputString += buttonValue;
//    cons.innerText = inputString;
//   });
// });
// const result = eval(inputString);
// var ouput=  document.querySelectorAll('button');

// if(output=='='){
// 	 cons.innerText = "New Text";
// }
 


// NEWCODE////////



 var butt=document.getElementsByTagName('button');
 var display=document.getElementById('display');
 var display2=document.getElementById('display2');

 
 var ac=document.getElementById('AC');
 ac.addEventListener('click',function(){
   
  display.innerText="";
  display2.innerText="";
  location.reload();
 });
//   for(var i=0;i<butt.length;i++){
//     butt[i].addEventListener('click',function(){
//       var value=this.getAttribute('data-value');
        
//          display.innerText+=value;
//   // if(value=="AC"){
//   //   display.innerText=" ";
//   // }
//       if(value=='+'){
//         op='+';
//         op1=parseFloat(display.textContent);
//          // display2.innerText=display.innerText+'+'+display2.innerText;
//          display2.innerText+= display.innerText ;
//         display.innerText=" ";


//       }else    if(value=='='){
//       display2.innerText=" ";
  
//   op2=parseFloat(display.textContent);
//  var result=eval(op1+op+op2);
//   // var result=eval(op2);
// display.innerText=result
 

//         } else{  
      
         
        
// }
  
//     })

//   }

 for(var i=0;i<butt.length;i++){
  butt[i].addEventListener('click',function(){
    var value=this.getAttribute('data-value');
    if(value=="+"){

      display.innerText=display.innerText + value;
      display2.innerText=eval(display.innerText);
    }else{
    if(value=='='){

      display.innerText=eval(display.innerText);
      display2.innerText="";
    }else if(value=='-'){
      display.innerText=display.innerText + value;
      display2.innerText=eval(display.innerText); 
    }else if(value=='*'){
 display.innerText=display.innerText + value;
      display2.innerText=eval(display.innerText); 
    }else if(value=='/'){
display.innerText=display.innerText + value;
      display2.innerText=eval(display.innerText); 
    }else{
       display.innerText=display.innerText+value;
      display2.innerText=eval(display.innerText);
    }
  }
  })
 }



// ///NEWCODE/////




 