import { useEffect } from 'react';

function Popup() {
	useEffect(() => {
		console.log('팝업생성');

		return () => {
			console.log('팝업소멸');
		};
	}, []);
	return (
		<aside className='pop'>
			<h1>팝업</h1>
		</aside>
	);
}

export default Popup;
