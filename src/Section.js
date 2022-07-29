import Card from './Card';
import Btn from './Btn';
import { useRef } from 'react';

function Section() {
	const arr = [
		'cat01',
		'cat02',
		'cat03',
		'cat04',
		'cat05',
		'cat06',
		'cat07',
		'cat08',
	];

	const sec = useRef(null);

	return (
		<>
			<section ref={sec} style={{ top: '140%' }}>
				{arr.map((item, idx) => {
					return (
						<Card key={idx} item={item} index={idx} num={arr.length} />
					);
				})}
			</section>
			<Btn sec={sec} num={arr.length} />
		</>
	);
}

export default Section;
