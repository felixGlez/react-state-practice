import { useState } from 'react';
import Button from '../button/Button';
import { StyledSquare } from './styles';

const Square = () => {
	/*
    IMPORTANTE: Los estados que sean siempre que se pueda o Booleanos o Números.
    Con booleano (que sería la forma más correcta):

    const [isGreen, setIsGreen] = useState(false)

    return (
		<StyledSquare $color={isGreen ? 'green' : 'red'}>
			<Button action={() => changeColor(isGreen, setIsGreen)}>Change Color</Button>
		</StyledSquare>
	);

    -------La función----------
    
    const changeColor = (isGreen, setIsGreen) => {
        setIsGreen(!isGreen)
    };

    */
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
