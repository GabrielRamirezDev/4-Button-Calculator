const n1 = document.getElementById('input1');
const n2 = document.getElementById('input2');

const add = document.getElementById('add');
const sub = document.getElementById('sub');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');

const getButtonValue = function(e) {
  let targetValue = e.target.value;
  runCalc(targetValue)
}

function runCalc(operator,e){

  let firstNum = parseInt(n1.value);
  let secondNum = parseInt(n2.value);
  let output = document.getElementById('response');
  if (operator === add.value) {
    let answer= firstNum + secondNum;
    output.innerText=answer;
  }else if (operator === sub.value) {
    let answer= firstNum - secondNum;
    output.innerText=answer;

  }else if (operator === multiply.value) {
    let answer= firstNum * secondNum;
    output.innerText=answer;

  }else if (operator === divide.value) {
    let answer= firstNum / secondNum;
    output.innerText=answer;

  }else if (!firstNum || !secondNum) {
    output.innerText= 'Looks like your fingers might have made a miscalculation...if you get my drift'
  }
}
document.getElementById("add").onclick=runCalc;
add.addEventListener("click",getButtonValue);
sub.addEventListener("click",getButtonValue);
multiply.addEventListener("click",getButtonValue);
divide.addEventListener("click",getButtonValue);
