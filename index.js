//Card game program - Version 1
//Georgia Dann
//10/08/2021

console.log('Welcome to my card guessing game!');

// having list of player names ready to be picked
  randomName1 = ['pogchamp42069','swaggyolympian','spicyfeet','Mark',];
  let newRandomName1 = randomName1[Math.floor(Math.random()* 4 + 0 )];

  randomName2 = ['dancercat26','speedybunny','Zac','cheekyfingernail'];
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

let name1 = (newRandomName1 || player1);
let name2 = (newRandomName2 || player2);
let pointPlayer1 = 0;
let pointPlayer2 = 0;
let player1Life = 3;
let player2Life = 3;

//randomizing the card numbers
card1 = Math.floor(Math.random() * 13 + 1);
newCard1 = Math.floor(Math.random() * 13 + 1);
card2 = Math.floor(Math.random() * 13 + 1);
newCard2 = Math.floor(Math.random() * 13 + 1);

// let guess = 'higher'||'lower';

//player1 guessing their next card
player1Guess= prompt(name1 + ' your card was a ' + card1 + '\nDo you think your next card will be higher or lower?');
while(player1Guess != 'higher'||'lower'){
  player1Guess = prompt('Do you think your next card will be higher or lower?');
} console.log('You got a ' + newCard1);
//setting player1s point outcome
if(player1Guess == 'higher'){
  if(newCard1 > card1){
    console.log('Congratulations ' + name1 + ' you were right!');
    pointPlayer1++
  } else if(newCard1 < card1){
    console.log('Better luck next time ' + name1 + ' you lose a life!');
    player1Life--;
  } else if(newCard1 == card1){
    console.log('It\s a tie! ' + name1 + ' loses a life!');
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
    console.log('It\s a tie! ' + name1 + ' loses a life!');
    player1Life--;
  }
}
console.log(name2 + ' Your turn!');

player2Guess= prompt(name1 + ' your card was a ' + card2 + '\nDo you think your next card will be higher or lower?');
while(player2Guess != 'higher'||'lower'){
  player2Guess = prompt('Do you think your next card will be higher or lower?');
} console.log('You got a ' + newCard2);
//setting player1s point outcome
if(player2Guess == 'higher'){
  if(newCard2 > card2){
    console.log('Congratulations ' + name2 + ' you were right!');
    pointPlayer2++
  } else if(newCard2 < card2){
    console.log('Better luck next time ' + name2 + ' you lose a life!');
    player2Life--;
  } else if(newCard2 == card2){
    console.log('It\s a tie! ' + name2 + ' loses a life!');
    player2Life--;
  }
} else if(player2Guess == 'lower'){
  if(newCard2 < card2){
    console.log('Congratulations ' + name2 + ' you were right!');
    pointPlayer1++
  } else if(newCard2 > card2){
    console.log('Better luck next time ' + name2 + ' you lose a life!');
    player2Life--;
  } else if(newCard2 == card2){
    console.log('It\s a tie! ' + name2 + ' loses a life!');
    player2Life--;
  }
}