let startButton=document.querySelector(".startButton");
let matrixDiv=document.querySelectorAll("#matrixDiv");
let selectPlayer=document.querySelectorAll(".selectPlayer"); 
let marking=document.querySelector(".marking");
let tictactoe=document.querySelector(".tictactoe");

let start=false;
let turnPlayer=false;
let turnComputer=true;
let player1=false;
let player2=true;
let isWinner=false;
let winingPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

startButton.addEventListener("click",function(){
    if(start==false){
        start=true;
        let audio = document.getElementById("gameAudio");
        audio.play();
        matrixDiv.forEach((div) => {
            setTimeout(() => {
                div.style.backgroundColor = "rgb(66, 199, 66)";
            }, 100);
            setTimeout(() => {
                div.style.backgroundColor = "white";
            }, 400);
        });
    marking.innerHTML="<h3>GAME IS STARTED <3 </h3>";
    setTimeout(()=>{
        marking.append(`Select any one option from the above:`)
    },1000)

        selectPlayer.forEach((btn, index) =>{
            btn.addEventListener("click",function(){
                if(index==0){
                    playComputer();
                }
                else if(index == 1){
                    playPlayer();
                }
            })
        });
}
});

function playComputer(){
    tictactoe.innerHTML=`<h2>Let's play with ME </h2>`
    marking.innerHTML="<h3>GAME IS STARTED <3 </h3>";
    marking.append(document.createElement("br"),`Make your Move`);
    matrixDiv.forEach((div)=>{
        div.addEventListener("click",function(){
            let clickAudio=document.getElementById("click");
            clickAudio.play();
           if(turnPlayer==false && div.innerText==""){
                div.innerHTML=`X`;
                turnPlayer=true;
                turnComputer=false;
                winner2();
                noWinner();
                setTimeout(()=>{
                   if(turnComputer==false){
                        let randomNum=getRandomNum();
                       while(matrixDiv[randomNum].innerText!=""){
                       randomNum=getRandomNum();
                       }
                    matrixDiv[randomNum].innerHTML=`O`
                    winner2();
                    noWinner();
                    turnComputer=true;
                    turnPlayer=false;
        }
                },500)

           }
        });
    });
}


function playPlayer() {
    tictactoe.innerHTML=`<h2>Let's play both the PLAYERS</h2>`
    marking.innerHTML="<h3>GAME IS STARTED <3 </h3>";
    matrixDiv.forEach((div)=>{
        div.addEventListener("click",function(){
            setTimeout(()=>{
                let clickAudio=document.getElementById("click");
            clickAudio.play();
            },400)
            if(player1==false && div.innerText==""){
                div.innerHTML=`X`;
                player2=false;
                player1=true;
            }
            else if(player2==false && div.innerText==""){
                div.innerHTML=`O`;
                player2=true;
                player1=false;
            }
            winner1();
            noWinner();
        })
    })
}

function winner1(){
    for(pattern of winingPatterns){
       let c0=matrixDiv[pattern[0]].innerText;
       let c1=matrixDiv[pattern[1]].innerText;
       let c2=matrixDiv[pattern[2]].innerText;
       if(c0!=""&&c1!=""&&c2!=""){
        if(c0===c1&&c1===c2&&c1=='X'){
           tictactoe.innerHTML=`<h2>PLAYER 1 is the winner...</h2>`
           matrixDiv[pattern[0]].style.color="red";
           matrixDiv[pattern[1]].style.color="red";
           matrixDiv[pattern[2]].style.color="red";
           let gameBonusAudio=document.getElementById("gameBonus");
           gameBonusAudio.play();
           blink();
           isWinner=true;
           marking.append(document.createElement("br"),"TO RESTART THE GAME PRESS ANY KEY");
        }
        if(c0===c1&&c1===c2&&c1=='O'){
            tictactoe.innerHTML=`<h2>PLAYER 2 is the winner...</h2>`
            matrixDiv[pattern[0]].style.color="red";
            matrixDiv[pattern[1]].style.color="red";
            matrixDiv[pattern[2]].style.color="red";
            let gameBonusAudio=document.getElementById("gameBonus");
            gameBonusAudio.play();
            blink();
            isWinner=true;
            marking.append(document.createElement("br"),"TO RESTART THE GAME PRESS ANY KEY");
         }
       }
    }
}
function winner2(){
    for(pattern of winingPatterns){
       let c0=matrixDiv[pattern[0]].innerText;
       let c1=matrixDiv[pattern[1]].innerText;
       let c2=matrixDiv[pattern[2]].innerText;
       if(c0!=""&&c1!=""&&c2!=""){
        if(c0===c1&&c1===c2&&c1==='X'){
            turnComputer=true;
           tictactoe.innerHTML=`<h2>OOH GOSH!! YOU ARE THE WINNER</h2>`
           matrixDiv[pattern[0]].style.color="red";
           matrixDiv[pattern[1]].style.color="red";
           matrixDiv[pattern[2]].style.color="red";
           let gameBonusAudio=document.getElementById("gameBonus");
           gameBonusAudio.play();
          blink();
          isWinner=true;
          marking.append(document.createElement("br"),"TO RESTART THE GAME PRESS ANY KEY");
        }
    
        else if(c0===c1&&c1===c2&&c1==='O'){
             tictactoe.innerHTML=`<h2>OOPS!! I'm THE WINNER</h2>`
             matrixDiv[pattern[0]].style.color="red";
             matrixDiv[pattern[1]].style.color="red";
             matrixDiv[pattern[2]].style.color="red";
             let gameBonusAudio=document.getElementById("gameBonus");
             gameBonusAudio.play();
           blink();
           isWinner=true;
           marking.append(document.createElement("br"),"TO RESTART THE GAME PRESS ANY KEY");
         }
        }
    }
}
function noWinner(){
   let count=0;
   matrixDiv.forEach((div)=>{
    if(div.innerText!=""){
       count++;
    }
   })
   if(count==9 && isWinner==false){
    tictactoe.innerHTML=`<h2>YEAH,THERE IS A CLASH...</H2>`;
    let failureAudio=document.getElementById("failure");
    failureAudio.play();
    matrixDiv.forEach((div) => {
        setTimeout(() => {
            div.style.backgroundColor = "red";
        }, 100);
        setTimeout(() => {
            div.style.backgroundColor = "white";
        }, 400);
    });
    marking.append(document.createElement("br"),"TO RESTART THE GAME PRESS ANY KEY");
   }
}

function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
 }
 function getRandomNum(){
    let randomNum=Math.floor(Math.random()*9);

    return randomNum;
 }

 function blink(){
    matrixDiv.forEach((div, index) => {
        index=index+1;
        setTimeout(() => {
            div.style.backgroundColor = getRandomColor();
        }, 300 * index);

        setTimeout(() => {
            div.style.backgroundColor = getRandomColor();
        }, 350 * index);

        setTimeout(() => {
            div.style.backgroundColor = getRandomColor();
        }, 400 * index );

        setTimeout(() => {
            div.style.backgroundColor = getRandomColor();
        }, 450 * index );

        setTimeout(() => {
            div.style.backgroundColor = "white";
        }, 500 * index );
     });
 }

 document.addEventListener("keypress",()=>{
     location.reload();
 })