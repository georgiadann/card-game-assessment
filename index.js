//Card game program - Version 1
//Georgia Dann
//10/08/2021

console.log('Welcome to my card guessing game!');

let playerLives = prompt('How many lives would you like to have?');
while(playerLives <= 0 || isNaN(playerLives) || playerLives == null || playerLives % 1 != 0){
  console.log('Not a valid number');
  playerLives = prompt('How many lives would you like to have?');
}

// having list of player names ready to be picked
  randomName1 = ['PickleBear64','progamer8290','Sheeplover22','gurglingGorilla',];
  let newRandomName1 = randomName1[Math.floor(Math.random()* 4 + 0 )];

  randomName2 = ['tumblingT-rex','prancingPteridactol','sneakyHitman','chompingChimpanzee'];
  let newRandomName2 = randomName2[Math.floor(Math.random()* 4 + 0 )];

  //letting the player 1 choose their name
  let player1 = prompt('Player 1 please enter a name:');
  if(player1 == ''){
    console.log('welcome ' + newRandomName1 + ', good luck!');
  } else{
    console.log('Welcome ' + player1 + ', good luck!');
  }
  //letting player 2 choose their name
  let player2 = prompt('Player 2 please enter a name:');
  if(player2 == ''){
    console.log('welcome ' + newRandomName2 + ', good luck!');
  } else{
    console.log('Welcome ' + player2 + ', good luck!');
  }

let name1 = (player1 || newRandomName1);
let name2 = (player2 || newRandomName2);
let pointPlayer1 = 0;
let pointPlayer2 = 0;
let player1Life = playerLives;
let player2Life = playerLives;


while(player1Life>0 && player2Life>0){
  playCard();
}


function playCard(){
  //randomizing the card numbers
  card1 = Math.floor(Math.random() * 13 + 1);
  newCard1 = Math.floor(Math.random() * 13 + 1);
  card2 = Math.floor(Math.random() * 13 + 1);
  newCard2 = Math.floor(Math.random() * 13 + 1);

  //player1 guessing their next card
  let player1Guess= prompt(name1 + ' your card was: ' + card1 + '\nDo you think your next card will be higher or lower?');

  while(player1Guess != 'higher'&& player1Guess!= 'lower'){
    player1Guess = prompt('Do you think your next card will be higher or lower?');
  } 
  console.log('You got: ' + newCard1);

  //setting player1s point outcome
  if(player1Guess == 'higher'){
    if(newCard1 > card1){
      console.log('Congratulations ' + name1 + ' you were right!');
      pointPlayer1++
    } else if(newCard1 < card1){
      console.log('Better luck next time ' + name1 + ' you lose a life!');
      player1Life--;
    } else if(newCard1 == card1){
      console.log("It's a tie! " + name1 + ' loses a life!');
      player1Life--;
    }
  } else if(player1Guess == 'lower'){
    if(newCard1 < card1){
    console.log('Congratulations ' + name1 + ' you were right!');
    pointPlayer1++
    } else if(newCard1 > card1){
    console.log('Better luck next time ' + name1 + ' you lose a life!');
    player1Life--;
    } else if(newCard1 == card1){
    console.log("It's a tie! " + name1 + ' loses a life!');
    player1Life--;
    }
  }
  console.log(name2 + ' Your turn!');

  player2Guess= prompt(name2 + ' your card was: ' + card2 + '\nDo you think your next card will be higher or lower?');
  while(player2Guess != 'higher' && player2Guess !='lower'){
    player2Guess = prompt('Do you think your next card will be higher or lower?');
  }
  console.log('You got: ' + newCard2);
  //setting player2s point outcome
  if(player2Guess == 'higher'){
    if(newCard2 > card2){
     console.log('Congratulations ' + name2 + ' you were right!');
      pointPlayer2++
    } else if(newCard2 < card2){
      console.log('Better luck next time ' + name2 + ' you lose a life!');
      player2Life--;
    } else if(newCard2 == card2){
      console.log("It's a tie! " + name2 + ' loses a life!');
      player2Life--;
    }
  } else if(player2Guess == 'lower'){
    if(newCard2 < card2){
      console.log('Congratulations ' + name2 + ' you were right!');
      pointPlayer2++
    } else if(newCard2 > card2){
      console.log('Better luck next time ' + name2 + ' you lose a life!');
      player2Life--;
    } else if(newCard2 == card2){
      console.log("It's a tie! " + name2 + ' loses a life!');
      player2Life--;
  }
  } 

  //state what points people have
  let plural = pointPlayer1!=1?'s':'';
  console.log(`${name1} has ${pointPlayer1} point${plural}\n${name1} has ${player1Life} lives left!`);
  console.log(`${name2} has ${pointPlayer2} point${plural}\n${name2} has ${player2Life} lives left`);

}
//States the winner of the game
let plural = pointPlayer1!=1?'s':'';
if (pointPlayer1 > pointPlayer2){
  console.log(`Congratulations ${name1} you won with ${pointPlayer1} point${plural}`);
} else if(pointPlayer1 < pointPlayer2){
  console.log(`Congratulations ${name2} you won with ${pointPlayer2} point${plural}`);
}else{
  console.log("It's a tie!");
}