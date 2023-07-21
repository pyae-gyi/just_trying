var images = ["dice_one_icon.png", "dice_two_icon.png", "dice_three_icon.png", "dice_four_icon.png", "dice_five_icon.png", "dice_six_icon.png"];
function rolled() {
    var rand_num = Math.random();
    rand_num *= 6;
    rand_index= Math.floor(rand_num);

    return images[rand_index];

}


var record = [];

function roll_dices() {
    // player one roll his dice
    var player1_dice = document.querySelector(".player_one").querySelector(".dice_img");
    var player1_rolled_dice = rolled();
    record.push(player1_rolled_dice);
    // console.log("The record: " + record);
    player1_dice.setAttribute("src", player1_rolled_dice);

    // player two roll his dice
    var player2_dice = document.querySelector(".player_two").querySelector(".dice_img");
    var player2_rolled_dice = rolled();
    player2_dice.setAttribute("src", player2_rolled_dice);
    record.push(player2_rolled_dice);
    // console.log("The record: " + record);   

  }
  var body = document.querySelector("body");
  body.setAttribute("onload", "roll_dices(); display_winner();");


function did_player1_win() {

    var player1 = images.indexOf(record[0]) + 1;
    console.log()
    console.log("player 1 dice: "+ (player1));

    var player2 = images.indexOf(record[1]) + 1;
    console.log("player 2 dice: "+ (player2));
    // console.log(player1 > player2)
    if (player1 == player2) {
        return "draw";
    }
    return player1 > player2;
}
console.log("The record: " + record);

function display_winner() {
    var player1_won = did_player1_win();
    var title = document.querySelector(".title");
    if (player1_won == "draw") {  
       title.innerHTML = "Draw!";
        } 
    else if (player1_won) {  
        title.innerHTML = "Player One Won!";
        //    displaying emoji for player one
       document.querySelector(".player1_emoji").classList.toggle("hide");
        
     } 
    else {
        title.innerHTML = "Player Two Won!";
        //    displaying emoji for player two
       document.querySelector(".player2_emoji").classList.toggle("hide");
    }
}