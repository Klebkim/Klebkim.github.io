let tog = 1
p1sum = 0
p2sum = 0
function play(player, p1sum, correction, num){
    let sum
    if(psum == 'p1sum') {

        p1sum = p1sum + num;
        if (p1sum > 25){
            p1sum = p1sum - num
        }
        if (p1sum ==  3){
            p1sum = 13
        }
        if (p1sum ==  11){
            p1sum = 21
        }
        if (p1sum ==  6){
            p1sum = 15
        }
        if (p1sum ==  8){
            p1sum = 4
        }
        if (p1sum ==  12){
            p1sum = 22
        }
        if (p1sum ==  14){
            p1sum = 24
        }
    }
}
    function play(player, p2sum, correction, num){
    if(psum == 'p2sum') {

        p2sum = p2sum + num;
        if (p2sum > 25){
            p2sum = p2sum - num
        }
        if (p2sum ==  3){
            p2sum = 13
        }
        if (p2sum ==  11){
            p2sum = 21
        }
        if (p2sum ==  6){
            p2sum = 15
        }
        if (p2sum ==  8){
            p2sum = 4
        }
        if (p2sum ==  12){
            p2sum = 22
        }
        if (p2sum ==  14){
            p2sum = 24
        }
    }

    
}
function play(player, p3sum, correction, num){
    if(psum == 'p3sum') {

        p3sum = p3sum + num;
        if (p3sum > 25){
            p3sum = p3sum - num
        }
        if (p3sum ==  3){
            p3sum = 13
        }
        if (p3sum ==  11){
            p3sum = 21
        }
        if (p3sum ==  6){
            p3sum = 15
        }
        if (p3sum ==  8){
            p3sum = 4
        }
        if (p3sum ==  12){
            p3sum = 22
        }
        if (p3sum ==  14){
            p3sum = 24
        }
    }

}    
document.getElementById("diceBtn").addEventListener("click", function () {
      num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    document.getElementById("dice").innerText = num
    function TurnFunction(){
    if (tog % 3 == 2) {
        document.getElementById('tog').innerText = "Player 1's Turn : "
        play('p1', 'p1sum', 0, num)

    }

    if (tog % 3 == 1) {
        document.getElementById('tog').innerText = "Player 2's Turn : "

        play('p2', 'p2sum', 55, num)

    }
    if (tog % 3 == 0) {
        document.getElementById('tog').innerText = "Player 3's Turn : "

        play('p3', 'p3sum', 55, num)

    }

    tog = tog + 1
}
})