import { useState } from 'react';

const Counter = () => {
	const [number, setNumber] = useState(0);

	return (
		<>
			<h2>{number}</h2>
			<button
				onClick={() => {
					subtract(number, setNumber);
				}}
			>
				-1
			</button>
			<button onClick={() => restart(number, setNumber)}>Restart</button>
			<button onClick={() => increment(number, setNumber)}>+1</button>
		</>
	);
};

const subtract = (number, setNumber) => {
	setNumber(number - 1);
};

const increment = (number, setNumber) => {
	setNumber(number + 1);
};

const restart = (number, setNumber) => {
	setNumber(0);
};

export default Counter;
