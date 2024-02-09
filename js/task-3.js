const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInput);

function onInput() {
	if (input.value !== '') {
		output.textContent = `${input.value.trim()}`;
	}
	else {
		output.textContent = `Anonymous`
	}
}