function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function numbersInput() {
  const number = parseFloat(input.value);
  return isNaN(number) ? null : number;
}

const boxes = document.querySelector('#boxes');
const controls = document.querySelector('#controls');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = controls.firstElementChild;
let numberToUse = numbersInput();

input.addEventListener('input', onInput)
createBtn.addEventListener('click', onCreteBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);

function onInput() {
	numberToUse = numbersInput();
}

function onCreteBtnClick() {
	if (numberToUse >= 1 && numberToUse <= 100 && input.value !== '') {
		boxes.innerHTML = '';
		let size = 30;
		for (let i = 0; i < numberToUse; i++) {
			const box = document.createElement('div');
    		box.style = `
      	height: ${size}px;
      	width: ${size}px;
      	background-color: ${getRandomHexColor()};
    	`;
			boxes.appendChild(box);
			size += 10;
		}
		input.value = '';
	}
	else {
		input.value = '';
		boxes.innerHTML = '';
	}
}

function onDestroyBtnClick() {
	return boxes.innerHTML = '';
}