import { Header, Footer, Popup } from './Layout';
import './scss/style.scss';

function App() {
	const handleClick = () => {
		alert('click2');
	};

	const handleArg = (txt) => {
		alert(txt);
	};
	return (
		<div className='app'>
			<h1
				onMouseEnter={() => {
					console.log('mouseEnter');
				}}
				onMouseLeave={() => console.log('mouseleave')}>
				Title
			</h1>
			<button onClick={() => console.log('click')}>버튼</button>
			<button onClick={handleClick}>버튼2</button>
			<button
				onClick={() => {
					handleArg('hello');
				}}>
				버튼3
			</button>
		</div>
	);
}

export default App;
