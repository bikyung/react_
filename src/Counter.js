import { useState, useEffect } from 'react';

function Counter() {
	let [Num, setNum] = useState(0);
	useEffect(() => {
		console.log('Num state 값 변경');
	}, [Num]);
	return (
		<article className='counter'>
			<h1>{Num}</h1>
			<button onClick={() => setNum(--Num)}>감소</button>
			<button onClick={() => setNum(++Num)}>증가</button>
		</article>
	);
}

export default Counter;
