var computerMove;
computerMove = ' kamień ' ;
playerMove = ' papier' ;
printMessage('Zagrałem' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ', to wygrywasz!');

var randomNumber;
randomNumber = Math.floor(Math.random() *3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber =='2') {
  computerMove = 'papier';
 } else if (randomNumber =='3') {
  computerMove = 'nożyce';
}
printMessage('Mój ruch: ' + computerMove);

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} 
else if (playerInput < '1') {
  playerMove = 'Bład! Spróbuj jeszcze raz!';
}
else if (playerInput > '3') {
  playerMove = 'Bład! Spróbuj jeszcze raz!';
} 
else if (playerInput == '2') {
  playerMove = 'papier';
} 
else if (playerInput == '3') {
  playerMove = 'nożyce';
} 
printMessage('Twój ruch: ' + playerMove);
