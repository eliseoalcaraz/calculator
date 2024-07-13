let calculation = localStorage.getItem('calculation') || '';
      
function updateCalculation(numOrOp) {
  if(numOrOp !== '=' && numOrOp !== 'Clear'){
    calculation += numOrOp;
    console.log(calculation);
  } else if (numOrOp === 'Clear') {
    calculation = '';
    console.log('Cleared.');
  } else if (numOrOp === '=') {
    calculation = 'miss na kita'//eval(calculation);
    console.log(calculation);
  }


  localStorage.setItem('calculation', calculation);

  document.querySelector('.js-display-calculation').innerHTML = calculation;
}

