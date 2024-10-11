let gameseq=[];
let userseq=[];
let btns=["yellow","red","green","purple"];

let started = false;
let level = 0;
let highest_score=0;
let h2=document.querySelector("h2")

document.addEventListener("keypress",function(){
   if(started==false){
    console.log('game started');
    
    started=true
    levelUp();
   }
    
});
function gameflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
      
      btn.classList.remove("flash");
   }, 250);
}

// function userflash(btn){
//    btn.classList.add("userflash");
//    setTimeout(function(){
      
//       btn.classList.remove("userflash");
//    }, 250);
// }


function levelUp(){
   userseq=[]
   level++;
   h2.innerText=`Level ${level}`
   let ranIndex=Math.floor(Math.random()*4);
   let randCol=btns[ranIndex];
   let randBtn=document.querySelector(`.${randCol}`)
   // console.log(ranIndex);
   // console.log(randCol);
   // console.log(randBtn);
   gameseq.push(randCol)
   console.log(gameseq);
   gameflash(randBtn);
}

function checkAns(idx){
   // console.log('current level: ',level);
 

   if(userseq[idx]===gameseq[idx]){
     if(userseq.length===gameseq.length){
      setTimeout(levelUp,1000);
     }
   }
   else{
      h2.innerHTML=`GAME OVER! Your score was <b>${level}</b> <br> Highest Score: <b>${highest_score}</b> <br> Press any key to start`;
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(()=>{
         document.querySelector("body").style.backgroundColor="white";
      },150);

      if(level>highest_score){
         highest_score=level;
      }

     reset();
   }
   
}

function btnPress(){
   
   let btn=this;
  gameflash(btn)
  userColor=btn.getAttribute("id")
   userseq.push(userColor);
   checkAns(userseq.length-1);

   
}

let allBtns=document.querySelectorAll(".btn");

for (btn of allBtns) {

   btn.addEventListener("click",btnPress)
   
}

function reset(){
   started=false;
   gameseq=[];
   userseq=[];
   level=0;
}