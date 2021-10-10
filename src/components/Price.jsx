import React from 'react';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import { handleEnter } from '../utilityFunctions';

export default function Price({ row, setRow }) {
	const [value, setValue] = React.useState(0.0);

	return (
		<CurrencyTextField
			// variant="outlined"
			value={value}
			currencySymbol=""
			minimumValue="0"
			outputFormat="string"
			decimalCharacter="."
			digitGroupSeparator=","
			textAlign="left"
			onChange={(event, value) => setValue(value)}
			onKeyDown={(e) => handleEnter(e, row, setRow)}
		/>
	);
}
