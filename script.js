// add - добавить класс
// remove - удалить класс
// toggle - заменить класс (если есть добавить, если нет удалить - работает как выключатель)
// contains - проверить наличие класса.


document.querySelector('.buttons').onclick = function() {
	let area = ['+','-','/','*'];

	let button = event.target;
	let input = document.querySelector('#field');

	if (button.classList.contains("number")) {
		if (input.value == '0') {
			input.value = button.innerHTML;
		}	else {
		input.value = input.value + button.innerHTML; 
		};	
	} else if (button.classList.contains('operation')) {
		let expression = input.value;
		input.value = input.value + button.innerHTML;
		let lastChar = expression[expression.length - 1];
		console.log(lastChar) 
	} else if (button.classList.contains('calculation')) {
		let expression = input.value;
		let result = eval(expression);
		input.value = result;
	} else if (button.classList.contains('clear_one')) {
		let expression = input.value;
		expression = expression.substring(0,expression.length - 1);
		input.value = expression;
	} else if (button.classList.contains('clear')) {
		input.value = "0"; 
	}; 

	
}
