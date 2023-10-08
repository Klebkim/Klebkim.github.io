
var p1_square = 1;
var p1_element = document.getElementById("p1");
var p2_square = 1;
var p2_element = document.getElementById("p2");
var itsP1Turn = true;
var gameOver = false;





const square_to_column = {
    1: 5,
    2: 4,
    3: 3,
    4: 2,
    5: 1,
    6: 1,
    7: 2,
    8: 3,
    9: 4,
    10: 5,
    11: 5,
    12: 4,
    13: 3,
    14: 2,
    15: 1,
    16: 1,
    17: 2,
    18: 3,
    19: 4,
    20: 5,
    21: 5,
    22: 4,
    23: 3,
    24: 2,
    25: 1
}
function calculateCoordinates(squareNumber){
    if (!gameOver){
 // let's find the row
 let rowNumber = square = Math.ceil(squareNumber / 5) - 1;
 rowNumber = 5 - rowNumber;
 let topPixels = (rowNumber * 200);
 let colNumber = square_to_column[squareNumber] - 1;
 let leftPixels = (colNumber * 200) + 100;
 if (itsP1Turn) {
    leftPixels -= 20;
    p1_element.style.top = topPixels + "px";
    p1_element.style.left = leftPixels + "px";
 }
 else{
    p2_element.style.top = topPixels + "px";
    p2_element.style.left = leftPixels + "px";
    }
    }   
}
function snakesOrLadders(){
//For p1_square
    if(p1_square == 5){
    p1_square += 10;
}
else if(p1_square == 11){
    p1_square += 9;
}
else if(p1_square == 12){
    p1_square -= 10;
}   
else if(p1_square == 22){
    p1_square -= 3;
}
else if(p1_square == 13){
    p1_square += 10;
}
else if(p1_square == 24){
    p1_square -= 10;
}
//For p2_square
if(p2_square == 5){
    p2_square += 10;
}
else if(p2_square == 11){
    p2_square += 9;
}
else if(p2_square == 12){
    p2_square -= 10;
}   
else if(p2_square == 22){
    p2_square -= 3;
}
else if(p2_square == 13){
    p2_square += 10;
}
else if(p2_square == 24){
    p2_square -= 10;
}
}
function move(diceNumber) {
    if (gameOver) {
        return;
    }
    if (itsP1Turn){
        p1_square += diceNumber;
        if (p1_square > 25){
            p1_square == 25;
            victory();
        }
        snakesOrLadders();
    calculateCoordinates(p1_square);
    }
    else{
        p2_square += diceNumber;
        if (p2_square > 25){
            p2_square == 25;
            victory();
        }
        snakesOrLadders();
        calculateCoordinates(p2_square)
        
    }
    itsP1Turn = !itsP1Turn;
}
function victory(){
    gameOver = true;
    
    let titleDiv = document.getElementById("title")
    if (itsP1Turn) {
        p1_square == 25;
        titleDiv.innerText = "Player 1 won!"
    }
    else{
    p2_square == 25;
        titleDiv.innerText = "Player 2 won!"
 
        move(diceNumber);
    }
}

document.getElementById("diceBtn").addEventListener(
    "click", 
    
function () {
     let num = Math.floor(Math.random() * (6 - 1 + 1) + 1);
   move(num);
   let turnText = document.getElementById("num");
   if (itsP1Turn) {
    turnText.innerText = "Red's Turn: "
   }
   else{
    turnText.innerText = "Blue's Turn: "
   }
}
)