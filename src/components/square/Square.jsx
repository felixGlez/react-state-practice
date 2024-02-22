import { useState } from 'react';
import Button from '../button/Button';
import { StyledSquare } from './styles';

const Square = () => {
	/*
    IMPORTANTE: Los estados que sean siempre que se pueda o Booleanos o Números.
    Ejemplo con booleano (que sería la forma más correcta):

    const [isGreen, setIsGreen] = useState(false)

    return (
		<StyledSquare $color={isGreen ? 'green' : 'red'}>

        ----------
        El ternario se suele poner directamente en styled components, osea en StyledSquare, por lo tanto lo enviaríamos así:
		<StyledSquare $color={isGreen}>
        ----------

			<Button action={() => changeColor(isGreen, setIsGreen)}>Change Color</Button>
		</StyledSquare>
	);

    -------La función----------
    
    const changeColor = (isGreen, setIsGreen) => {
        setIsGreen(!isGreen)
    };
    */

	/* ESTA FORMA SIGUIENTE DE HACERLA FUE LA PRIMERA QUE YO HICE, QUE ES LA MENOS CORRECTA: */
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
