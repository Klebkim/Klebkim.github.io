var isXTurn = true;
var gameOver = false;

function handleClick(element) {
    if (!gameOver) {
    if (!element.children[0].innerText) {

    
    if (isXTurn) {
        element.children[0].innerText = "X";
        document.getElementById("turn").innerText = "Turn: O"
    }
    else{
        element.children[0].innerText = "O";
        document.getElementById("turn").innerText = "Turn: X"
    }
   checkVictory();
    isXTurn = !isXTurn;
}

}
    function checkVictory(){
        let winner = checkRow1() || checkRow2() || checkRow3() || checkColumn1() || checkColumn2() || checkColumn3() || checkDiagonal1() || checkDiagonal2();
        if (winner) {
            let topText = document.getElementById("top-text");
            topText.innerText = "Victory! The winner is " + winner;
            gameOver = true;
        }
    
       
    }
    }
function checkRow1(){
    let bt1 = document.getElementById("box-1").children[0].innerText;
    let bt2 = document.getElementById("box-2").children[0].innerText;
    let bt3 = document.getElementById("box-3").children[0].innerText;
    
    if ( bt1 && bt1 === bt2 && bt2 === bt3 ){
        return bt1;
    }
    
    return '';
    

 return bt1.innerText === bt2.innerText === bt3.innerText;
}
function checkRow2(){
    let bt4 = document.getElementById("box-4").children[0].innerText;
    let bt5 = document.getElementById("box-5").children[0].innerText;
    let bt6 = document.getElementById("box-6").children[0].innerText;
    
    if ( bt4 && bt4 === bt5 && bt5 === bt6 ){
        return bt4;
    }
   
        return '';
    
    

 return bt4.innerText === bt5.innerText === bt6.innerText;
}
function checkRow3(){
    let bt7 = document.getElementById("box-7").children[0].innerText;
    let bt8 = document.getElementById("box-8").children[0].innerText;
    let bt9 = document.getElementById("box-9").children[0].innerText;
    
    if ( bt7 && bt7 === bt8 && bt8 === bt9 ){
        return bt7;
    }
    
        return '';
    
    

 return bt7.innerText === bt8.innerText === bt9.innerText;
}
function checkColumn1(){
    let bt1 = document.getElementById("box-1").children[0].innerText;
    let bt4 = document.getElementById("box-4").children[0].innerText;
    let bt7 = document.getElementById("box-7").children[0].innerText;
    
    if ( bt1 && bt1 === bt4 && bt4 === bt7 ){
        return bt1;
    }
    
        return '';
    
    

 return bt1.innerText === bt4.innerText === bt7.innerText;
}
function checkColumn2(){
    let bt2 = document.getElementById("box-2").children[0].innerText;
    let bt5 = document.getElementById("box-5").children[0].innerText;
    let bt8 = document.getElementById("box-8").children[0].innerText;
    
    if ( bt2 && bt2 === bt5 && bt5 === bt8 ){
        return bt2;
    }
    
        return '';
    
    

 return bt2.innerText === bt5.innerText === bt8.innerText;
}
function checkColumn3(){
    let bt3 = document.getElementById("box-3").children[0].innerText;
    let bt6 = document.getElementById("box-6").children[0].innerText;
    let bt9 = document.getElementById("box-9").children[0].innerText;
    
    if ( bt3 && bt3 === bt6 && bt6 === bt9 ){
        return bt3;
    }
    
        return '';
    
    

 return bt3.innerText === bt6.innerText === bt9.innerText;
}
function checkDiagonal1(){
    let bt1 = document.getElementById("box-1").children[0].innerText;
    let bt5 = document.getElementById("box-5").children[0].innerText;
    let bt9 = document.getElementById("box-9").children[0].innerText;
    
    if ( bt1 && bt1 === bt5 && bt5 === bt9 ){
        return bt1;
    }
    
        return '';
    
    

 return bt1.innerText === bt5.innerText === bt9.innerText;
}
function checkDiagonal2(){
    let bt3 = document.getElementById("box-3").children[0].innerText;
    let bt5 = document.getElementById("box-5").children[0].innerText;
    let bt7 = document.getElementById("box-7").children[0].innerText;
    
    if ( bt3 && bt3 === bt5 && bt5 === bt7 ){
        return bt3;
    }
    
        return '';
    
    

 return bt3.innerText === bt5.innerText === bt7.innerText;
}
function reset() {
    gameOver = false;

    isXTurn = true;
    for (i = 1; i< 10; i++){
        let id_name = "box-" + i;
        document.getElementById(id_name).children[0].innerText = ''
    }
    let topText = document.getElementById("top-text");
    topText.innerText = "Turn:" ;
    let mySpan = document.createElement("span");
    mySpan.id = "turn";
    mySpan.innerText = "X";
    topText.appendChild(mySpan)
}