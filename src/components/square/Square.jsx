import { useState } from 'react';
import Button from '../button/Button';
import { StyledSquare } from './styles';

const Square = () => {
	const [color, setColor] = useState('red');
	console.log(color);
	return (
		<StyledSquare $color={color}>
			<Button action={() => changeColor(color, setColor)}>Change Color</Button>
		</StyledSquare>
	);
};

const changeColor = (color, setColor) => {
	setColor(color === 'red' ? 'green' : 'red');
};

export default Square;
