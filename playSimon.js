

let startBtn=document.querySelector(".startButton");
let started=false;
userInput=[];
gameInput=[];
let score=0;
let divColor=["red","yellow","green","blue"];
let level=0;


startBtn.addEventListener("click",function(){
    if(started==false){
        started=true;
    let audio = document.getElementById("gameAudio");
    audio.play();
    setTimeout(()=>{
            let h1=document.querySelector(".gameUpdate h1");
            h1.innerText="Game Started";
            levelUp();
    },1000)
}
});

function levelUp(){
    let para=document.querySelector(".gameUpdate pre");
    if(userInput.length==0){
        para.innerText="";
    }
    if(userInput.length!=0){
    level++;
    if(level>score){
        score=level;
    }
    para.append(document.createElement("br"),`Level: ${level}`,`    `,`Memory Power:${level+(5**level/5)}`);
    userInput=[];
    }

    let divColor=randomDiv()
    gameInput.push(divColor);
    gameFlash(divColor);
}

function checkAns(idx){
    if(userInput[idx]==gameInput[idx]){
        if(idx==gameInput.length-1){
       setTimeout( levelUp(),100000);
    }
    else if(idx < gameInput.length-1){
        setTimeout(()=>{let div=document.querySelectorAll("#btn");
        for (btn of div){
            btn.addEventListener("click",userFlash);
             }
           },500);
        }
     }
    else{
        let h1=document.querySelector(".gameUpdate h1");
        let para=document.querySelector(".gameUpdate pre");
    
        h1.innerHTML=`<h4>Opps!! You Pressed wrong Color.Your Memory Power is ${level+(5**level/5)} </h4>`
        let failureAudio=document.getElementById("failure");
        failureAudio.play();
        para.append(document.createElement("br"),`To Restart Press Any key`);
       document.addEventListener("keypress",function(){
            userInput=[];
            gameInput=[];
            score=0;
            level=0;
            started=false;
           h1.innerHTML=` <h2>To Start The Game Press Start Button</h2>`
           para.innerHTML=`<pre>Level:0    Memory Power:0</pre>`
        })
    }   
    }


function randomDiv(){
    let randIndx=Math.floor(Math.random()*4);
    let randDiv=divColor[randIndx];
    let pianoNote=document.getElementById(`${randDiv}`);
    pianoNote.play();
    let div=document.querySelector(`.${randDiv}`);
    return div ;
}
function gameFlash(div){
  div.classList.add("flash");
  setTimeout(()=>{
    div.classList.remove("flash")},300);
}

let div=document.querySelectorAll("#btn");
    for (btn of div){
        btn.addEventListener("click",userFlash);
    }

function userFlash(){
    let div=this;
    div.classList.add("userflash");
    let span=document.createElement("span");
    setTimeout(()=>{
      div.classList.remove("userflash")},150);
    userInput.push(div);
    checkAns(userInput.length-1);
  }
  
