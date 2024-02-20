import { useState } from 'react';
import Button from '../button/Button';

const Counter = ({ children }) => {
	const [number, setNumber] = useState(0);

	return (
		<>
			<h2>{number}</h2>
			{/* <button
				onClick={() => {
					subtract(number, setNumber);
				}}
			>
				-1
			</button>
			<button onClick={() => restart(setNumber)}>Restart</button>
			<button onClick={() => increment(number, setNumber)}>+1</button> */}

			<Button action={() => subtract(number, setNumber)}>-1</Button>
			<Button action={() => restart(setNumber)}>Restart</Button>
			<Button action={() => increment(number, setNumber)}>+1</Button>

			{/* Repaso de Children: */}
			{children}
		</>
	);
};

const subtract = (number, setNumber) => {
	setNumber(number - 1);
};

const increment = (number, setNumber) => {
	setNumber(number + 1);
};

const restart = setNumber => {
	setNumber(0);
};

export default Counter;
