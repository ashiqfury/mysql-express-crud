import { useRef } from 'react';
import './App.css';
import ComboBox from './components/ComboBox';
import Price from './components/Price';
// import PriceInput from './components/PriceInput';

function App() {
	const inputref = useRef();
	return (
		<div>
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
					<tr>
						<td>1</td>
						<td>
							<ComboBox inputref={inputref} />
						</td>
						<td>
							<input type="date" ref={inputref} placeholder="  -  -  " />
						</td>
						<td>
							<input type="number" />
						</td>
						<td>
							<Price />
						</td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default App;
