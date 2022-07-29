import { useState, useEffect } from 'react';

function ColorBox() {
	const [Bg, setBg] = useState('gray');
	useEffect(() => {
		console.log('Bg값 변경');
	}, [Bg]);
	return (
		<article className='colorBox'>
			<div className='box' style={{ backgroundColor: Bg }}></div>

			<button
				onClick={(e) => {
					setBg(e.target.innerText);
				}}>
				red
			</button>
			<button
				onClick={(e) => {
					setBg(e.target.innerText);
				}}>
				blue
			</button>
			<button
				onClick={(e) => {
					setBg(e.target.innerText);
				}}>
				green
			</button>
		</article>
	);
}

export default ColorBox;
