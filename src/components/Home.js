import React from 'react';
import { render } from 'react-dom';
import Logo from './Logo.js';
import SocialIcons from './SocialIcons.js';

class Home extends React.Component {
	goToStore(e) {
		console.log('You changed the url');
		//transition from url to url/store
		this.context.router.transitionTo(`/store`);
	}


	render() {
		return (
			<header className="home">
				<Logo />
				<div className="cornerTriangleContainer">
					<div className="cornerTriangle">
						<button className="cornerTriangle__shopButton" onClick={this.goToStore.bind(this)} type="submit">Shop
							<i className="fa fa-leaf" aria-hidden="true"></i>
						</button>
					</div>
				</div>
				<SocialIcons />
			</header>
		)
	}
}

Home.contextTypes = {
	router: React.PropTypes.object
}

render(<Home/>, document.querySelector('#main'));

export default Home;