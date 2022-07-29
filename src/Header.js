import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
	return (
		<>
			<h1>LOGO</h1>
			<a href='#'>
				<FontAwesomeIcon icon={faBars} />
			</a>
		</>
	);
}

export default Header;
