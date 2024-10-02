// function getValue(){

// let text = document.querySelector("#text");
// let textArea = document.querySelector("#textArea");
// t = Number(text.value);

//    if(t === 50)
//       textArea.innerText = "You Win...";
//    else if(t > 50){
//       text.innerText = "";
//       textArea.innerText = "You Guess Higher value.\nPlz, Try Again";}
//    else
//       textArea.innerText = "You Guess Lower value.\nPlz, Try Again";
//       getValue(); 
// }
  

let textArea = document.querySelector("#textArea");
let btn = document.querySelector(".paste");
const t = parseInt(Math.random()*50 + 1);
console.log(t);

btn.addEventListener("click",()=>{
   const input = Number(document.querySelector("#text").value);
    if(input === t)
         textArea.innerText = "You Win...";
      else if(input > t){
         textArea.innerText = "You Guess Higher value.\nPlz, Try Again";
            }
      else{
         textArea.innerText = "You Guess Lower value.\nPlz, Try Again";
      }
   document.querySelector("#text").innerText = 0;
});

