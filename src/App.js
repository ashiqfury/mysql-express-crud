import { useRef } from 'react';
import './App.css';
import fruits from './fruits';
import ComboBox from './components/ComboBox';
import PriceInput from './components/PriceInput';

function App() {
	const inputref = useRef();
	return (
		<div className="App">
			<table>
				<thead>
					<tr>
						<th>Combo Box</th>
						<th>Date</th>
						<th>Numbers</th>
						<th>Price</th>
						<th>Heading five</th>
						<th>Heading six</th>
						<th>Heading seven</th>
						<th>Heading eight</th>
						<th>Heading nine</th>
					</tr>
				</thead>
				<tbody>
					<tr>
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
							<PriceInput />
						</td>
						<td>nice to</td>
						<td>meet you</td>
						<td>have a</td>
						<td>nice</td>
						<td>day</td>
					</tr>
					{fruits.map((fruit) => (
						<tr key={fruit}>
							<td>dummy</td>
							<td>dummy</td>
							<td>dummy</td>
							<td>dummy</td>
							<td>dummy</td>
							<td>dummy</td>
							<td>dummy</td>
							<td>dummy</td>
							<td>dummy</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
