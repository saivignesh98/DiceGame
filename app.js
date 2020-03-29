/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,currPlayer,currScore=0;
var player1={
    name:'',
    scoreTotal:0
};
var player2={
    name:'',
    scoreTotal:0,
}
function initGame(){
    player1.name=prompt("Enter Player 1's name");
    player2.name=prompt("Enter Player 2's name");
    if(player1.name!=null&&player2.name!=null)
    {
        document.getElementById("name-1").innerHTML=player1.name;
        document.getElementById("name-2").innerHTML=player2.name;
        document.getElementById("roll-button").style.visibility="visible";
        document.getElementById("hold-button").style.visibility="visible";
        document.getElementById("score-1").innerHTML=0;
        document.getElementById("score-2").innerHTML=0;
        document.getElementById("current-1").innerHTML=0;
        document.getElementById("current-2").innerHTML=0;
        player1.scoreTotal=0;
        player2.scoreTotal=0;
        currScore=0;
        currPlayer=1;
    }
}
function switchTurn(){
    switch(currPlayer){
        case 1:
            player1.scoreTotal+=currScore;
            //console.log(player1.scoreTotal);
            document.getElementById("score-1").innerHTML=player1.scoreTotal;
            var x=document.getElementsByClassName("player-1-panel active");
            x[0].className="player-1-panel";
            var y=document.getElementsByClassName("player-2-panel");
            y[0].className="player-2-panel active";
            currScore=0;
            currPlayer=2;
            document.getElementById("current-1").innerHTML=0;
            document.getElementById("current-2").innerHTML=0;
            break;
        case 2:
            player2.scoreTotal+=currScore;
            //console.log(player1.scoreTotal);
            document.getElementById("score-2").innerHTML=player2.scoreTotal;
            var x=document.getElementsByClassName("player-2-panel active");
            x[0].className="player-2-panel";
            var y=document.getElementsByClassName("player-1-panel");
            y[0].className="player-1-panel active";
            currScore=0;
            currPlayer=1;
            document.getElementById("current-1").innerHTML=0;
            document.getElementById("current-2").innerHTML=0;
            break;
    }
}
function rollDice(){
    var roll=Math.ceil(Math.random()*6);
    diceImageChange(roll);
    if(roll==1)
    {    
        currScore=0;
        diceImage.src="dice-1.png";
        switchTurn();
    }
    else{
        currScore+=roll;
    }
    switch(currPlayer)
    {
        case 1:
            document.getElementById("current-1").innerHTML=currScore;
            break;
        case 2:
            document.getElementById("current-2").innerHTML=currScore;
            break;
    }
    var x=checkGameOver(currScore);
    if(x)
        gameOver();
      
}
function diceImageChange(roll){
    var img=document.getElementById("diceImage");
    switch(roll){
        case 1:
            img.src="dice-1.png";
            break;
        case 2:
            img.src="dice-2.png";
            break;
        case 3:
            img.src="dice-3.png";
            break;
        case 4:
            img.src="dice-4.png";
            break;
        case 5:
            img.src="dice-5.png";
            break;
        case 6:
            img.src="dice-6.png";
            break;  
    }
}
function checkGameOver(score){
    switch(currPlayer){
        case 1:
            if(player1.scoreTotal+score>=100)
                return true;
            break;
        case 2:
            if(player2.scoreTotal+score>=100)
                return true;
            break;
    }
    return false;
}
function gameOver(){
    switch(currPlayer){
        case 1:
            document.getElementById("score-1").innerHTML=player1.scoreTotal+currScore;
            document.getElementById("current-1").innerHTML=currScore;
            alert(player1.name+" is the winner.\n Please hit New Game to start a new game.");
            break;
        case 2:
            document.getElementById("score-2").innerHTML=player2.scoreTotal+currScore;
            document.getElementById("current-2").innerHTML=currScore;
            alert(player2.name+" is the winner.\n Please hit New Game to start a new game.");
            break;
    }
    document.getElementById("roll-button").style.visibility="hidden";
    document.getElementById("hold-button").style.visibility="hidden";
}