const gameButton = document.getElementById('button'),
      gameInput = document.getElementById('player__number'),
      countResult = document.getElementById('result'),
      info = document.getElementById('info'),
      label = document.getElementById('game__label'),
      game = document.getElementById('game'),
      tryList = document.getElementById('tryList'),
      generatedNumber = randomNumber(),
      buttonNewGame = document.getElementById('newGame');

let count = 0;

gameButton.addEventListener('click', () => {
  const enteredNumber = gameInput.value;

  bullsAndCows(generatedNumber, enteredNumber);

  if (generatedNumber === enteredNumber) {
    game.classList.add('winner');
    buttonNewGame.style.display = 'block';
    showComputerNumber(generatedNumber, enteredNumber);
  }
});

function bullsAndCows(generatedNumber, enteredNumber) {
  const countBullsAndCows = { 'bulls': 0, 'cows': 0 };
  if ([...new Set(enteredNumber)].length !== 4 || enteredNumber.length !== 4) {
    showError();
    return '';
  } else {
    hideError();
    count++;
  }

  for (let i = 0; i < 4; i++) {
    if (enteredNumber[i] === generatedNumber[i]) {
      countBullsAndCows['bulls']++;
    } else if (generatedNumber.indexOf(enteredNumber[i]) + 1) {
      countBullsAndCows['cows']++;
    }
  }

  showResult(countBullsAndCows);
  addNewShot(enteredNumber, count);
  return countBullsAndCows;
}

function showResult(gameResult) {
  countResult.innerHTML = `<div class='game__bulls'> Bulls: ${gameResult['bulls']}</div>\
                           <div class='game__cows'>Cows: ${gameResult['cows']}</div>`;
}

function showComputerNumber(generatedNumber, enteredNumber) {
  let number = generatedNumber.split('').map((item, index) => {
    return item === enteredNumber[index] ? item : '*';
  });

  info.innerHTML = `<span class="game__computer">Computer number: ${number.join('')}</span>`;
  return number.join('');
}

function showError() {
  label.classList.add('error'); 
}

function hideError() {
  label.classList.remove('error'); 
}

function addNewShot(enteredNumber, computerNumber) {
  tryList.innerHTML += `<span class="shot">
                          ${count}. ${enteredNumber}
                        </span>`
}

function randomNumber () {
  let generatedNumber = '';
  while(generatedNumber.length !== 4){
      let n = Math.floor(Math.random()*10) + 1;
      if(!generatedNumber.includes(n)) {
        generatedNumber += n;
      };
  }
  return generatedNumber;
}

buttonNewGame.addEventListener('click' , () => window.location.reload())