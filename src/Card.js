function Card({ img, path }) {
	return (
		<article>
			<h1>{img}</h1>
			<img src={`${path}/img/${img}.jpg`} />
		</article>
	);
}

export default Card;
