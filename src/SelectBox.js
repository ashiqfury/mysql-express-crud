import fruits from './fruits';

const SelectBox = () => {
	return (
		<div>
			<select>
				{fruits.map((fruit) => (
					<option>{fruit}</option>
				))}
			</select>
		</div>
	);
};

export default SelectBox;
