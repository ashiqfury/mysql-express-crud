import { useState, useRef } from 'react';

const PriceInput = () => {
	const [value, setValue] = useState('0.00');
	const inputref = useRef();

	const changeHandler = (e) => {
		const regex = /[\d]/gi;
		if (regex.test(e.target.value)) {
			let val = e.target.value.toString().split('.')[1];
			if (val) if (val.length === 3) return;
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
	};

	return (
		<>
			<input
				type="number"
				value={value}
				onChange={changeHandler}
				onKeyDown={keyHandler}
				ref={inputref}
			/>
		</>
	);
};

export default PriceInput;
