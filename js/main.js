console.log("Up and Running!");

var cards = ["queen", "queen", "king",  "king"];
var cardsInPlay = [];

var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!!!");
  } else {
    alert("Sorry, keep trying");
  }
};


var flipCard = function(cardId){
  console.log("user flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  if (cardsInPlay.length === 2){
  checkForMatch();
}
};

flipCard(0);
flipCard(2);
