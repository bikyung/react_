import './scss/style.scss';

function App() {
	const colors = ['aqua', 'orange', 'blue', 'red', 'green'];

	return (
		<div className='App'>
			<ul>
				{colors.map((color, idx) => {
					const style = { color: color };
					return (
						<li key={idx} style={style}>
							{color}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
