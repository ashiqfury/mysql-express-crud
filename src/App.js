import { useState, useRef } from 'react';
import './App.css';
import fruits from './fruits';

function App() {
	const [value, setValue] = useState('');
	const inputref = useRef();

	const keyHandler = (e) => {
		if (e.keyCode === 13) {
			const filtered = fruits.filter((fruit) => fruit.includes(value));
			setValue(filtered[0]);
			inputref.current.focus();
		}
	};

	const changeHandler = (e) => {
		const str = e.target.value;
		const bool = fruits.some((fruit) => fruit.includes(str));
		console.log(bool, value, str);
		if (bool) setValue(str);
	};

	return (
		<div className="App">
			<input list="fruits" value={value} onChange={changeHandler} onKeyDown={keyHandler} />

			{/* Combox box */}
			<datalist id="fruits">
				{fruits.map((fruit, index) => (
					<option key={index} value={fruit}>
						{fruit}
					</option>
				))}
			</datalist>

			<input ref={inputref} placeholder="Input box" />
		</div>
	);
}

export default App;
