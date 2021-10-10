import { useState } from 'react';
import fruits from '../fruits';
import { handleEnter } from '../utilityFunctions';

const ComboBox = ({ inputref }) => {
	const [value, setValue] = useState('');
	const [filteredFruits, setFilteredFruits] = useState(fruits);

	const filterFruits = (val) => {
		const filterFruits = fruits.filter((fruit) => fruit.startsWith(val));
		const spaceFruits = fruits.filter((fruit) => fruit.includes(` ${val}`));
		setFilteredFruits([...filterFruits, ...spaceFruits]);
	};

	const keyHandler = (e) => {
		if (e.keyCode === 13) {
			setValue(filteredFruits[0]);
			// inputref.current.focus();
			handleEnter(e);
		}
	};
	const changeHandler = (e) => {
		filterFruits(e.target.value);
		if (filteredFruits.some((fruit) => fruit.includes(e.target.value))) setValue(e.target.value);
	};

	return (
		<>
			<input
				list="fruits"
				value={value}
				onChange={changeHandler}
				onKeyDown={keyHandler}
				autoFocus
			/>
			<datalist id="fruits">
				{filteredFruits.map((fruit, index) => (
					<option key={index} value={fruit} />
				))}
			</datalist>
		</>
	);
};

export default ComboBox;
