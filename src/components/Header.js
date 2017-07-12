import React from 'react';
import Logo from './Logo.js';
import SocialIcons from './SocialIcons.js';


class Header extends React.Component {
	constructor() {
		super();
		this.showSideBar = this.showSideBar.bind(this);
	}
	showSideBar(e) {
		e.preventDefault();
		this.sideBar.classList.toggle("show");
	}
	render() {
		return(
			<div>
				<header className="menuHeader">
					<nav>
						<a href="/">Home</a>
						<a href="">Shop</a>
						<a href="" onClick={this.showSideBar}><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
					</nav>
					<Logo />
					<SocialIcons />
					<h2 className="tagline">
						<i className="fa fa-leaf fa-flip-horizontal" aria-hidden="true"></i>
						{this.props.tagline}
						<i className="fa fa-leaf" aria-hidden="true"></i>
					</h2>
				</header>
			</div>
		)
	}
}


export default Header;


