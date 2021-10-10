import { useRef, useState } from 'react';
import './App.css';
import ComboBox from './components/ComboBox';
import Price from './components/Price';
import { handleEnter } from './utilityFunctions';

function App() {
	const inputref = useRef();
	const [row, setRow] = useState([1]);

	return (
		<form>
			<table>
				<thead>
					<tr>
						<th>SNO</th>
						<th>Combo Box</th>
						<th>Date</th>
						<th>Numbers</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{row.map((r, i) => (
						<tr key={i}>
							<td className="sno">{i + 1}</td>
							<td>
								<ComboBox inputref={inputref} />
							</td>
							<td>
								<input type="date" ref={inputref} onKeyDown={(e) => handleEnter(e)} />
							</td>
							<td>
								<input type="number" onKeyDown={(e) => handleEnter(e)} />
							</td>
							<td>
								<Price row={row} setRow={setRow} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</form>
	);
}

export default App;
