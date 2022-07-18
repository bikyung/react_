import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
	return (
		<header>
			<h1>logo</h1>
			<a href='#'>
				<FontAwesomeIcon icon={faBars} />
			</a>
		</header>
	);
}

export default Header;
