var isXTurn = true;

function handleClick(element) {
    if (!element.children[0].innerText) {

    
    if (isXTurn) {
        element.children[0].innerText = "X";
        document.getElementById("turn").innerText = "Turn: O"
    }
    else{
        element.children[0].innerText = "O";
        document.getElementById("turn").innerText = "Turn: X"
    }
    let victory = checkRow1();
    if  (victory) {
        let topText = document.getElementById("top-text");
        topText.innerText = "Victory!"
    }
    isXTurn = !isXTurn;
}

}

function checkRow1(){
    let bt1 = document.getElementById("box-1").children[0];
    let bt2 = document.getElementById("box-2").children[0];
    let bt3 = document.getElementById("box-3").children[0];

 return bt1.innerText === bt2.innerText === bt3.innerText;
}
