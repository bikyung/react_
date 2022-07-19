import './scss/style.scss';

function App() {
	const path = process.env.PUBLIC_URL;

	const imgs = [
		'Blizzards',
		'Calm',
		'Dusty_Road',
		'Escape',
		'Payday',
		'Retreat',
		'Seasonal',
		'Vespers',
	];

	return (
		<div className='App'>
			{imgs.map((img, idx) => (
				<img key={idx} src={`${path}/img/${img}.jpg`} alt={img} />
			))}
		</div>
	);
}

export default App;
