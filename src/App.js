import './scss/style.scss';
import { useState } from 'react';

function App() {
	console.log('app');
	const [Data, setData] = useState('변경전');
	const arr = ['red', 'green', 'blue'];
	const [Colors, setColors] = useState(arr);

	return (
		<div className='App'>
			<button
				onClick={() => {
					setData('변경후');
				}}>
				{Data}
			</button>

			<button
				onClick={() => {
					const newColors = [...Colors];
					newColors[0] = 'hotpink';
					console.log(newColors);
					setColors(newColors);
				}}>
				배열 state 변경
			</button>
			<ul>
				{Colors.map((color, idx) => {
					return <li key={idx}>{color}</li>;
				})}
			</ul>
		</div>
	);
}

export default App;
