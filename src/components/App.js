import React from 'react';
import Header from './Header';
import Cart from './Cart';

class App extends React.Component {
	render() {
		return (
			<div className="secret-garden">
				<div className="menu">
					<Header tagline="Online Succulent Shoppe"/>
				</div>
				<Cart />
			</div>
		)
	}
}

export default App;