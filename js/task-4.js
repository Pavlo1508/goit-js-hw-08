const form = document.querySelector('.login-form');
form.elements.email.type = 'text';

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	if (form.elements.email.value === '' || form.elements.password.value === '') {
		return alert('All form fields must be filled in');
	}
	else {
		const result = {};
		result.email = form.elements.email.value.trim();
		result.password = form.elements.password.value.trim();
		form.reset();
		return console.log(result)
	}
	
}
