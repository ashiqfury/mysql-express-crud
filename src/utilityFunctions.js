export function handleEnter(event, row, setRow) {
	if (event.keyCode === 13) {
		const form = event.target.form;
		const index = Array.prototype.indexOf.call(form, event.target);
		if (form.elements[index + 1]) form.elements[index + 1].focus();
		else {
			setRow([...row, 1]);
		}
		event.preventDefault();
		console.log('after, row', row);
	}
}
