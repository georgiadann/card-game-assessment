//Card game program - Version 1
//Georgia Dann
//10/08/2021

console.log('Welcome to my card guessing game!');

//allowing user to set amount of lives they would like
let playerLives = prompt('How many lives would you like to have?');
//repeats while number is negative, nothing or not a number
while(playerLives <= 0 || isNaN(playerLives) || playerLives == null || playerLives % 1 != 0){
  console.log('Not a valid number');
  playerLives = prompt('How many lives would you like to have?');
}
//adding space for usability
console.log(' ');
// having list of player names ready to be picked
randomName1 = ['PickleBear64','progamer8290','Sheeplover22','gurglingGorilla',];
let newRandomName1 = randomName1[Math.floor(Math.random()* 4 + 0 )];

randomName2 = ['tumblingT-rex','prancingPteridactol','sneakyHitman','chompingChimpanzee'];
let newRandomName2 = randomName2[Math.floor(Math.random()* 4 + 0 )];

//letting the player 1 choose their name - if they don't choose random name from list will be picked
let player1 = prompt('Player 1 please enter a name:');
if(player1 == ''){
  console.log('welcome ' + newRandomName1 + ', good luck!');
}
else{
  console.log('Welcome ' + player1 + ', good luck!');
}
console.log(' ');
//letting player 2 choose their name
let player2 = prompt('Player 2 please enter a name:');
if(player2 == ''){
  console.log('welcome ' + newRandomName2 + ', good luck!');
}
else{
 console.log('Welcome ' + player2 + ', good luck!');
}
console.log(' ');

let name1 = (player1 || newRandomName1);
let name2 = (player2 || newRandomName2);
let pointPlayer1 = 0;
let pointPlayer2 = 0;
let player1Life = playerLives;
let player2Life = playerLives;
let swap1 = playerLives - 1;
let swap2 = playerLives - 1;

function cardToName(cardNumber){
  if(cardNumber == 1){
   return 'Ace'; 
  } 
  else if(cardNumber <11){
    return cardNumber;
  }
  else if(cardNumber == 11){
    return 'Jack';
  }
  else if(cardNumber == 12){
    return 'Queen';
  }
  else if(cardNumber == 13){
    return 'King';
  }
}

while(player1Life>0 && player2Life>0){
  playCard();
}

function playCard(){
  card1 = Math.floor(Math.random() * 13 + 1);
  card2 = Math.floor(Math.random() * 13 + 1);
  newCard1 = Math.floor(Math.random() * 13 + 1);
  newCard2 = Math.floor(Math.random() * 13 + 1);

  //player1 guessing their next card
  let player1Guess= prompt(name1 + ' your card was: ' + cardToName(card1) + '\nDo you think your next card will be higher or lower?');

  player1Guess = player1Guess.toLowerCase();

  while(player1Guess != 'higher'&& player1Guess!= 'lower'){
    player1Guess = prompt('Do you think your next card will be higher or lower?');
  } 
  console.log('You got: ' + cardToName(newCard1));
  
  swapCard1 = 'no';
  if(swap1 > 0){    
    swapCard1 = prompt('Do you want to swap cards?');
    swapCard1 = swapCard1.toLowerCase();
    while(swapCard1 != 'yes' && swapCard1 != 'no'){
      swapCard1 = prompt('Do you want to swap cards?');
    } 
  }

  if(swapCard1 == 'yes'){
    swappedCard = Math.floor(Math.random() * 13 + 1);
    console.log('You swapped to: ' + cardToName(swappedCard));
    swap1--;
    if(player1Guess == 'higher'){
      if(swappedCard>card1){
        console.log('Congratulations ' + name1 + ' you were right!');
        pointPlayer1++
      } 
      else if(swappedCard < card1){
        console.log('Hard luck ' + name1 + ' you lose a life!');
        player1Life--;
      } 
      else if(swappedCard == card1){
        console.log("It's a tie! " + name1 + ' loses a life!');
        player1Life--;
      }
    }
    else if(player1Guess == 'lower'){
      if(swappedCard < card1){
        console.log('Congratulations ' + name1 + ' you were right!');
        pointPlayer1++
      } 
      else if(swappedCard > card1){
        console.log('Hard luck ' + name1 + ' you lose a life!');
        player1Life--;
      } 
      else if(swappedCard == card1){
        console.log("It's a tie! " + name1 + ' loses a life!');
        player1Life--;
      }
    }
  } else{
    //setting player1s point outcome
    if(player1Guess == 'higher'){
      if(newCard1 > card1){
        console.log('Congratulations ' + name1 + ' you were right!');
        pointPlayer1++
      }
      else if(newCard1 < card1){
        console.log('Hard luck ' + name1 + ' you lose a life!');
        player1Life--;
      }
      else if(newCard1 == card1){
        console.log("It's a tie! " + name1 + ' loses a life!');
        player1Life--;
      }
    } 
    else if(player1Guess == 'lower'){
      if(newCard1 < card1){
        console.log('Congratulations ' + name1 + ' you were right!');
        pointPlayer1++
      }
      else if(newCard1 > card1){
        console.log('Hard luck ' + name1 + ' you lose a life!');
        player1Life--;
      }
      else if(newCard1 == card1){
        console.log("It's a tie! " + name1 + ' loses a life!');
        player1Life--;
      }
    }
  }

  console.log(' ')
  console.log(name2 + ' Your turn!');

  player2Guess= prompt(name2 + ' your card was: ' + cardToName(card2) + '\nDo you think your next card will be higher or lower?');

  player2Guess = player2Guess.toLowerCase();

  while(player2Guess != 'higher' && player2Guess !='lower'){
    player2Guess = prompt('Do you think your next card will be higher or lower?');
  }
  console.log('You got: ' + cardToName(newCard2));
  
  swapCard2 = 'no';
  if(swap2 > 0){
    swapCard2 = prompt('Do you want to swap cards?');
    swapCard2 = swapCard2.toLowerCase();
    while(swapCard2 != 'yes' && swapCard2 != 'no'){
      swapCard2 = prompt('Do you want to swap cards?');
    } 
  }

 if(swapCard2 == 'yes'){
    swappedCard2 = Math.floor(Math.random() * 13 + 1);
    console.log('You swapped to: ' + cardToName(swappedCard2));
    swap2--;
    if (player2Guess == 'higher'){
      if(swappedCard2 > card2){
        console.log('Congratulations ' + name2 + ' you were right!');
        pointPlayer2++
      } 
      else if(swappedCard2 < card2){
        console.log('Hard luck ' + name2 + ' you lose a life!');
        player2Life--;
      } 
      else if(swappedCard2 == card2){
        console.log("It's a tie! " + name2 + ' loses a life!');
        player2Life--;
      }
    } 
    else if(player2Guess == 'lower'){
      if(swappedCard2 < card2){
        console.log('Congratulations ' + name2 + ' you were right!');
        pointPlayer2++
      } 
      else if(swappedCard2 > card2){
        console.log('Hard luck ' + name2 + ' you lose a life!');
        player2Life--;
      } 
      else if(swappedCard2 == card2){
        console.log("It's a tie! " + name2 + ' loses a life!');
        player2Life--;
      }
    }
  } 
  else{
    //setting player2s point outcome
    if(player2Guess == 'higher'){
      if(newCard2 > card2){
        console.log('Congratulations ' + name2 + ' you  were right!');
        pointPlayer2++
      } 
      else if(newCard2 < card2){
        console.log('Hard luck ' + name2 + ' you lose a life!');
        player2Life--;
      } 
      else if(newCard2 == card2){
        console.log("It's a tie! " + name2 + ' loses a life!');
        player2Life--;
      }
    } 
    else if(player2Guess == 'lower'){
      if(newCard2 < card2){
        console.log('Congratulations ' + name2 + ' you were right!');
        pointPlayer2++
      } 
      else if(newCard2 > card2){
        console.log('Hard luck ' + name2 + ' you lose a life!');
        player2Life--;
      } 
      else if(newCard2 == card2){
        console.log("It's a tie! " + name2 + ' loses a life!');
        player2Life--;
      }
    } 
  }
  //state what points people have
  console.log(' ');
  console.log(`${name1} points: ${pointPlayer1}\n${name2} points: ${pointPlayer2}`);
  console.log(' ')
  console.log(`${name1} lives: ${player1Life}\n${name2} lives: ${player2Life}`);
  console.log(' ');
}

//States the winner of the game
let plural = pointPlayer1!=1?'s':'';
if (pointPlayer1 > pointPlayer2){
  console.log(`Congratulations ${name1} you won with ${pointPlayer1} point${plural}`);
}
else if(pointPlayer1 < pointPlayer2){
  console.log(`Congratulations ${name2} you won with ${pointPlayer2} point${plural}`);
}
else{
  console.log("It's a tie!");
}