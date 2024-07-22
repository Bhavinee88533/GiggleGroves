
let update = document.querySelector(".scores p");
let moves = document.querySelector(".moves");
let span=document.querySelectorAll(".moves span");
let img = document.querySelectorAll(".selectMoves img");
let yourMove = document.querySelector(".yourMove");
let myMove = document.querySelector(".myMove");
let moveButtonSound=document.querySelector("#moveButtonSound");
let gameStart=document.querySelector("#gameStart");
let gameWin=document.querySelector("#gameWin");
let gameTie=document.querySelector("#gameTie");
let buttonClick = false;

let array = ["stone", "paper", "scissor"];
let userSelect;
let compSelect;
let count = 0;
let userScore = 0;
let compScore = 0;

img.forEach((element, indx) => {
    element.addEventListener("click", () => {
        span.forEach((span)=>{
            span.innerText="";
        })
        if (buttonClick == false) {
            moveButtonSound.play();
            setTimeout(()=>{
                gameStart.play();
            },400)
            buttonClick = true;
            count++;
            userSelect = array[indx];

        // Shake animation
            yourMove.style.animationName = "shake1";
            yourMove.style.animationDelay = "0s";
            yourMove.style.animationDuration = "0.5s";
            yourMove.style.animationTimingFunction = "linear";
            yourMove.style.animationDirection = "alternate";
            yourMove.style.animationIterationCount = "4";
            yourMove.style.animationPlayState = "running";
            yourMove.style.animationFillMode="forwards"

        // Pausing the animation 
            setTimeout(() => {
                yourMove.style.animationPlayState = "paused";
            }, 2000);

        // Displaying move
                setTimeout(() => {
                    if (userSelect === "scissor") {
                        yourMove.innerHTML = `<img src="C:/Users/91885/OneDrive/Desktop/javascript2.o/giggleGroves/scissor.png" height="250" width="250">`;
                    } else if (userSelect === "stone") {
                        yourMove.innerHTML = `<img src="C:/Users/91885/OneDrive/Desktop/javascript2.o/giggleGroves/stone.png" height="250" width="250">`;
                    } else if (userSelect === "paper") {
                        yourMove.innerHTML = `<img src="C:/Users/91885/OneDrive/Desktop/javascript2.o/giggleGroves/paper.png" height="250" width="250">`;
                    }
                }, 2000);

            setTimeout(() => {
                yourMove.innerHTML = `<img src="C:/Users/91885/OneDrive/Desktop/javascript2.o/giggleGroves/stone.png" height="250" width="250">`;
            }, 4000);

        // For user clicked selectMoves
            element.style.backgroundColor = "rgb(62, 36, 76)";
            setTimeout(() => {
                element.style.backgroundColor = "";
            }, 2000);

         // Shake animation
            myMove.style.animationName = "shake2";
            myMove.style.animationDelay = "0s";
            myMove.style.animationDuration = "0.5s";
            myMove.style.animationTimingFunction = "linear";
            myMove.style.animationDirection = "alternate";
            myMove.style.animationIterationCount = "4";
            myMove.style.animationPlayState = "running";
            myMove.style.animationFillMode="forwards"

         // Pausing the animation 
            setTimeout(() => {
                myMove.style.animationPlayState = "paused";
            }, 2000);

            let randomImg = randomMoves();
            compSelect = randomImg;

        // Displaying move
        setTimeout(() => {
            if (compSelect === "scissor") {
               myMove.innerHTML = `<img src="C:/Users/91885/OneDrive/Desktop/javascript2.o/giggleGroves/scissor2.png" height="250" width="250">`;
            } else if (compSelect === "stone") {
               myMove.innerHTML = `<img src="C:/Users/91885/OneDrive/Desktop/javascript2.o/giggleGroves/stone2.png" height="250" width="250">`;
            } else if (compSelect === "paper") {
                myMove.innerHTML = `<img src="C:/Users/91885/OneDrive/Desktop/javascript2.o/giggleGroves/paper2.png" height="250" width="250">`;
            }
        }, 2000);

            setTimeout(() => {
                myMove.innerHTML = `<img src="C:/Users/91885/OneDrive/Desktop/javascript2.o/giggleGroves/stone2.png" height="250" width="250">`;
            }, 4000);


            // For random selectMoves
            let move = document.querySelector(`.${randomImg}`);
            move.style.backgroundColor = "rgb(62, 36, 76)";
            setTimeout(() => {
                move.style.backgroundColor = "";
            }, 2000);

            if (userSelect == compSelect) {
                update.innerText = `OOps!! there is a TIE`;
                
                setTimeout(()=>{
                    gameTie.play();
                    let announce = document.querySelector(".winnersps");
                    announce.innerText = "TIE";
                    announce.style.opacity = "1";
                    setTimeout(() => {
                        announce.style.opacity = "0";
                    }, 2000);
                   },2000)

            } else {
                if ((userSelect == "stone" && compSelect == "scissor") || (userSelect == "paper" && compSelect == "stone") || (userSelect == "scissor" && compSelect == "paper")) {
                    update.innerText = `This time you scored`;
                    userScore++;
                    let yourScore = document.querySelector(".yourScore");
                    yourScore.innerText = `YOUR SCORE: ${userScore}`;


                   setTimeout(()=>{
                    gameWin.play();
                    let announce = document.querySelector(".winnersps");
                    announce.innerText = "YOU WON";
                    announce.style.opacity = "1";
                    setTimeout(() => {
                        announce.style.opacity = "0";
                    }, 2000);
                   },2000)


                } else {
                    update.innerText = `I scored`;
                    compScore++;
                    let myScore = document.querySelector(".myScore");
                    myScore.innerText = `MY SCORE: ${compScore}`;

                   setTimeout(()=>{
                    gameWin.play();
                    let announce = document.querySelector(".winnersps");
                    announce.innerText = "I WON";
                    announce.style.opacity = "1";
                    setTimeout(() => {
                        announce.style.opacity = "0";
                    }, 2000);
                   },2000)

                }
            }
         // Reset buttonClick after all actions are done
            setTimeout(() => {
                buttonClick = false;
                myMove.style.animation = 'none';
                yourMove.style.animation = 'none';
            }, 4000);
        }
    });
});

function randomMoves() {
    let randomNum = Math.floor(Math.random() * 3);
    return array[randomNum];
}
