import React from 'react';
import { useState, useEffect } from 'react';

function Btn({ sec, num }) {
	const [Count, setCount] = useState(0);
	const rotation = () => {
		sec.current.style.transform = `rotate(${(360 / num) * Count}deg)`;
	};

	useEffect(() => {
		rotation();
	}, [Count]);
	return (
		<nav>
			<a
				className='prev'
				href='#'
				onClick={() => {
					setCount(Count - 1);
				}}></a>
			<a
				className='next'
				href='#'
				onClick={() => {
					setCount(Count + 1);
				}}></a>
		</nav>
	);
}

export default Btn;
