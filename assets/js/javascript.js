//Body
document.body.style.fontSize = '50px';
document.body.style.fontWeight = 'bold';
document.body.style.backgroundColor = '#EFF0F0';

//Counter
let counterBoxDiv = document.createElement('div');
let counterBoxId = document.createAttribute('id');
counterBoxId.value = 'counter-box';
counterBoxDiv.setAttributeNode(counterBoxId);
document.body.appendChild(counterBoxDiv);

//Plus
let plusDiv = document.createElement('div');
let plusId = document.createAttribute('id');
plusId.value = 'plus';
plusDiv.setAttributeNode(plusId);
counterBoxDiv.appendChild(plusDiv);
plusDiv.innerHTML = '+';
plusDiv.style.fontSize = '80px';
plusDiv.style.color = '#d9534f';

//Value
let counterValueDiv = document.createElement('div');
let counterValueId = document.createAttribute('id');
counterValueId.value = 'counter-value';
counterValueDiv.setAttributeNode(counterValueId);
counterBoxDiv.appendChild(counterValueDiv);
counterValueDiv.innerHTML = 0;
counterValueDiv.style.fontWeight = 'normal';
counterValueDiv.style.color = '#d9534f';

//Minus
let minusDiv = document.createElement('div');
let minusId = document.createAttribute('id');
minusId.value = 'minus';
minusDiv.setAttributeNode(minusId);
counterBoxDiv.appendChild(minusDiv);
minusDiv.innerHTML = '-';
minusDiv.style.fontSize = '80px';
minusDiv.style.color = '#d9534f';

//Increase
function increase(){
    counterValueDiv.innerHTML++;
}
plusDiv.addEventListener('click', increase);

//Decrease
function decrease(){
    counterValueDiv.innerHTML--;
}
minusDiv.addEventListener('click', decrease);