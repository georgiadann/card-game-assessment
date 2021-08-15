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

  console.log(' ')
  console.log("If you don't like the card you get, write 'swap' to get a new one! Remember, you only get 3 swaps a game!");
  console.log(' ')

let name1 = (player1 || newRandomName1);
let name2 = (player2 || newRandomName2);
let pointPlayer1 = 0;
let pointPlayer2 = 0;
let player1Life = playerLives;
let player2Life = playerLives;
let swap1 = 3;
let swap2 = 3;

while(player1Life>0 && player2Life>0){
  playCard();
}


function playCard(){
  //randomizing the card numbers and giving the numbers names
  // cardNames = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 'King' ,];
  // let card1= cardNames[Math.floor(Math.random() * cardNames.length + 1)];
  // newCard1 = cardNames[Math.floor(Math.random() * cardNames.length + 1)];
  // card2 = cardNames[Math.floor(Math.random() * cardNames.length + 1)];
  // newCard2 = cardNames[Math.floor(Math.random() * cardNames.length + 1)];

  card1 = Math.floor(Math.random() * 13 + 1);
  card2 = Math.floor(Math.random() * 13 + 1);
  newCard1 = Math.floor(Math.random() * 13 + 1);
  newCard2 = Math.floor(Math.random() * 13 + 1);

  //player1 guessing their next card
  let player1Guess= prompt(name1 + ' your card was: ' + card1 + '\nDo you think your next card will be higher or lower?');

  while(player1Guess != 'higher'&& player1Guess!= 'lower'){
    player1Guess = prompt('Do you think your next card will be higher or lower?');
  } 
  console.log('You got: ' + newCard1);
  swapCard1 = prompt('Would you like to swap the card and get another chance? yes or no');

  while(swapCard1 != 'yes' && swapCard1 != 'no'){
    swapCard1 = prompt('Would you like to swap the card and get another chance?');
  } 

  if(swapCard1 == 'yes'){
    swappedCard = Math.floor(Math.random() * 13 + 1);
    console.log('You swapped to: ' + swappedCard);
    swap1--;
    if(player1Guess == 'higher'){
      if(swappedCard>card1){
      console.log('Congratulations ' + name1 + ' you were right!');
      pointPlayer1++
      } else if(swappedCard < card1){
      console.log('Better luck next time ' + name1 + ' you lose a life!');
      player1Life--;
      } else if(swappedCard == card1){
      console.log("It's a tie! " + name1 + ' loses a life!');
      player1Life--;
      }
    }
     else if(player1Guess == 'lower'){
      if(swappedCard < card1){
      console.log('Congratulations ' + name1 + ' you were right!');
      pointPlayer1++
      } else if(swappedCard > card1){
      console.log('Better luck next time ' + name1 + ' you lose a life!');
      player1Life--;
      } else if(swappedCard == card1){
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
  }

  console.log(' ')
  console.log(name2 + ' Your turn!');

  player2Guess= prompt(name2 + ' your card was: ' + card2 + '\nDo you think your next card will be higher or lower?');
  while(player2Guess != 'higher' && player2Guess !='lower'){
    player2Guess = prompt('Do you think your next card will be higher or lower?');
  }
  console.log('You got: ' + newCard2);
  
  swapCard2 = prompt('Would you like to swap the card and get another chance? yes or no');

  while(swapCard2 != 'yes' && swapCard2 != 'no'){
    swapCard2 = prompt('Would you like to swap the card and get another chance?');
  } 
 if(swapCard2 == 'yes'){
    swappedCard2 = Math.floor(Math.random() * 13 + 1);
    console.log('You swapped to: ' + swappedCard2);
    swap2--;
    if (player2Guess == 'higher'){
      if(swappedCard2 > card2){
     console.log('Congratulations ' + name2 + ' you were right!');
      pointPlayer2++
      } else if(swappedCard2 < card2){
      console.log('Better luck next time ' + name2 + ' you lose a life!');
      player2Life--;
      } else if(swappedCard2 == card2){
      console.log("It's a tie! " + name2 + ' loses a life!');
      player2Life--;
      }
    } else if(player2Guess == 'lower'){
        if(swappedCard2 < card2){
        console.log('Congratulations ' + name2 + ' you were right!');
        pointPlayer2++
        } else if(swappedCard2 > card2){
        console.log('Better luck next time ' + name2 + ' you lose a life!');
        player2Life--;
        } else if(swappedCard2 == card2){
        console.log("It's a tie! " + name2 + ' loses a life!');
        player2Life--;
      }
    }
  } else{
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
  }
  //state what points people have
  console.log(' ')
  console.log(`${name1} points: ${pointPlayer1}\n${name2} points: ${pointPlayer2}`);
  console.log(`${name1} lives: ${player1Life}\n${name2} lives: ${player2Life}`);
  console.log(' ')

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