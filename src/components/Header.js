import React from 'react';
import Logo from './Logo.js';
import SocialIcons from './SocialIcons.js';


const Header = (props) => {
	return(
		<div>
			<header className="menuHeader">
				<nav>
					<a href="">Home</a>
					<a href="">
						Cart
						<i className="fa fa-shopping-cart" aria-hidden="true"></i>
					</a>
				</nav>
				<Logo />
				<SocialIcons />
				<h2 className="tagline">
					<i className="fa fa-leaf fa-flip-horizontal" aria-hidden="true"></i>
					{props.tagline}
					<i className="fa fa-leaf" aria-hidden="true"></i>
				</h2>
			</header>
		</div>
	)
}


export default Header;