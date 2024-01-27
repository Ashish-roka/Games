

const ComputerChoice=document.getElementById("Computer");
const UserChoice=document.getElementById("User");
const Result=document.getElementById("result");

const possibilitycases = document.querySelectorAll("button");
let Computerchoice;
let Userchoice;

possibilitycases.forEach(Possibilitycases=>Possibilitycases.addEventListener('click',(e)=>{
    Userchoice=e.target.id;
    UserChoice.innerHTML=Userchoice;
    generateComputerChoice();
    Predictresult();
}))

function generateComputerChoice(){
    const randomNumber=Math.floor(Math.random()*possibilitycases.length)+1;
    if(randomNumber===1){
        Computerchoice ="Rock"
    }
    if(randomNumber===2){
        Computerchoice ="Paper"
    }
    if(randomNumber===3){
        Computerchoice ="Scissors"
    }
    ComputerChoice.innerHTML=Computerchoice;
    
}

function Predictresult(){
    if(Computerchoice===Userchoice){
        Result.innerHTML=`The game is draw.`
    }
    if(Computerchoice=="Paper" && Userchoice=="Rock"){
        Result.innerHTML=`You lose.`
    }
    if(Computerchoice=="Paper" && Userchoice=="Scissors"){
        Result.innerHTML=`You Won.`
    }
    if(Computerchoice=="Rock" && Userchoice=="Scissors"){
        Result.innerHTML=`You lose.`
    }
    if(Computerchoice=="Rock" && Userchoice=="Paper"){
        Result.innerHTML=`You Won.`
    }
    if(Computerchoice=="Scissors" && Userchoice=="Rock"){
        Result.innerHTML=`You Won.`
    }
    if(Computerchoice=="Scissors" && Userchoice=="Paper"){
        Result.innerHTML=`You lose.`
    }

}
