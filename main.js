const gameButton = document.getElementById('button'),
      gameInput = document.getElementById('player__number'),
      countResult = document.getElementById('result'),
      info = document.getElementById('info');

gameButton.addEventListener('click', () => {
  const generatedNumber = Math.floor(Math.random() * 10000) + '';
  const enteredNumber = gameInput.value;

  const gameResult = bullsAndCows(generatedNumber, enteredNumber);
  showResult(generatedNumber, enteredNumber, gameResult);
});

function bullsAndCows(generatedNumber, enteredNumber) {
  const countBullsAndCows = { 'bulls': 0, 'cows': 0 };
  if ([...new Set(enteredNumber)].length !== 4) {
    return undefined;
  }
  console.log(generatedNumber, enteredNumber)
  for (let i = 0; i < 4; i++) {
    if (enteredNumber[i] === generatedNumber[i]) {
      countBullsAndCows['bulls']++;
    } else if (generatedNumber.indexOf(enteredNumber[i]) + 1) {
      countBullsAndCows['cows']++;
    }
  }
  return countBullsAndCows;
}

function showResult(generatedNumber, enteredNumber, gameResult) {
  countResult.innerHTML = `<div class='game__bulls'> Bulls: ${gameResult['bulls']}</div>\
                           <div class='game__cows'>Cows: ${gameResult['cows']}</div>`;
  
  info.innerHTML = `<span class="game__computer">Computer number: ${generatedNumber}</span>`;
}