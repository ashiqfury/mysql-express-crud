import { useState, useRef } from 'react';

const PriceInput = () => {
	const [value, setValue] = useState('0.00');
	const inputref = useRef();

	const changeHandler = (e) => {
		const regex = /[\d]/gi;
		if (regex.test(e.target.value)) {
			let val = e.target.value.toString().split('.')[1];
			if (val) {
				if (val.length === 3) {
					console.log(val.length);
					return;
				}
			}
			setValue(e.target.value);
		}
	};

	const keyHandler = (e) => {
		if (e.keyCode === 13) {
			if (!value.includes('.')) {
				const val = parseInt(value).toFixed(2);
				setValue(val);
			}
		}
		if (e.keyCode === 190) {
			window.moveCursor = (el = inputref, pos = 2) => {
				if (el.setSelectionRange) {
					el.setSelectionRange(pos, pos);
				} else if (el.createTextRange) {
					const range = el.createTextRange();
					range.collapse(true);
					range.moveEnd('character', pos);
					range.moveStart('character', pos);
					range.select();
				}
			};
		}
	};

	return (
		<>
			<input
				type="number"
				placeholder="0.00"
				value={value}
				onChange={changeHandler}
				onKeyDown={keyHandler}
				ref={inputref}
			/>
		</>
	);
};

export default PriceInput;
