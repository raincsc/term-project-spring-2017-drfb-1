var socket = io();

socket.emit('join_game');

var card_area = document.getElementById('card-area');

document.getElementById("drawFromDeck").addEventListener("click", function(){
  console.log('Draw from Deck');
  renderCard(0);


});

document.getElementById("drawFromDiscard").addEventListener("click", function(){
  console.log('Uno');
})

function renderCard(card_id) {
  var node = document.getElementById("card-area");
  var card = new Image(72, 120);
  card.src = '/images/UnoCard/red1.png';
  node.appendChild(card);
  document.getElementById("card-area").appendChild(node);

}

//Game Logic Start
//const socket = io();

// var cardTurnClockwise = false; //clockwise if true, counter clockwise if false
// var currentPlayerTurn = 0;
// var cardPlayed;
// var topCard;

// var playerInfo {

// // }

// $(function () {
// //   $('#start').hide();
// //   $('#ready').hide();
// //   $('#drawFromDeck').hide();
// //   $('#drawFromDiscardPile').hide();
// //   $('#UNO').hide();

// //   //Game Canvas buttons
// //   $('#start').click(function() {
// //     if($('#start').prop('disabled')) {
// //       return false;
// //     }else{
// //     socket.emit('start', playerInfo);
// //     }
// //   })

// //   $('#drawFromDeck').click(function() {
// //     $('#drawFromDeck').hide();
// //     //socket.emit('draw-cards', playerInfo);
// //   })

//  $('#drawFromDiscard').click(function() {
//    alert ("hi");
//    //$('#drawFromDiscardPile').hide();
//    //socket.emit('draw-cards', playerInfo);
//  })



// //   $('#UNO').click(function() {
// //     if($('UNO').prop('disabled')) {
// //   }else{
// //   socket.emit('UNO', myInfo, gameState);
// //   }
// //   return false;
// //   })

// // })


// document.getElementById("drawFromDeck").addEventListener("click", function(){
//    alert ("hi");
// });



// function getNextPlayerTurn(){
//   if (isCardTurnReversed == true){
//     currentPlayerTurn--;
//     if (currentPlayerTurn < 0){
//       currentPlayerTurn = 4;
//     }
//   }
//   else{
//     currentPlayerTurn++;
//     if (currentPlayerTurn >= 4){
//       currentPlayerTurn = 0;
//     }
//   }
// }

// function isCardTurnReversed(){
//   return cardTurn;
// }

// function isCurrentPlayerTurn(){
//   if (true){
//     //TODO: turn action
//   }
//   else alert ("Its not your turn");
// }

// function isValidPlay(){
//   //cardPlayed == top card
//   if (true){
//     return true;
//   }
//   else return false;
// }


// //TODO: maybe not needed?
// function cardAction(){

// }
// function Update(){
//   getNextPlayerTurn();

//   //TODO: UNO condition
// }