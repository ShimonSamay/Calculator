let display = document.getElementById("display");
let buttons = document.getElementsByClassName("btns");
let calculateBtn = document.getElementById("calcBtn");
let temporaryDisplay = document.getElementById("temporaryDisplay");


function displayNumbers() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
     if( buttons[i].value != "AC" && buttons[i].value != "=")display.innerText += buttons[i].value ;
    });
  }
};
displayNumbers();

let firstNum = 0;
let secondNum = 0;
let result = 0;

function calculate () {
  for ( let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",  ()=>{
      switch (buttons[i].value){
        case "+" :
          firstNum = parseInt(display.innerText)
          display.innerText = "";
          calculateBtn.onclick = ()=>{
          secondNum = parseInt(display.innerText) ;
          result = firstNum + secondNum ;
          display.innerText = result ;
          temporaryDisplay.innerText = result ;
          }
        break;
       
        case "-" :
          firstNum = parseInt(display.innerText)
          display.innerText = "";
          calculateBtn.onclick = ()=>{
          secondNum = parseInt(display.innerText) ;
          result = firstNum - secondNum ;
          display.innerText = result ;
          temporaryDisplay.innerText = result ;
          };
        break;
        
         case "*" :
          firstNum = parseInt(display.innerText)
          display.innerText = "";
          calculateBtn.onclick = ()=>{
          secondNum = parseInt(display.innerText) ;
          result = firstNum * secondNum ;
          display.innerText = result ;
          temporaryDisplay.innerText = result ;
          };
         break;
          
          case "/" :
          firstNum = parseInt(display.innerText)
          display.innerText = "";
          calculateBtn.onclick = ()=>{
          secondNum = parseInt(display.innerText) ;
          result = firstNum / secondNum ;
          display.innerText = result ;
          temporaryDisplay.innerText = result ;
          }
          break;

          case "AC" : 
          temporaryDisplay.innerText = "";
          display.innerText = "";
          firstNum = 0 ;
          secondNum = 0 ;
          result = 0 ;
          break;
               
      }
    })
  }
};

calculate();

