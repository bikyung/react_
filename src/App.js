import './scss/style.scss';
import Card from './Card';

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
			<section>
				{imgs.map((img, idx) => {
					return <Card key={idx} img={img} path={path} />;
				})}
			</section>
		</div>
	);
}

export default App;
