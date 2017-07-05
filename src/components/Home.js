import React from 'react';
import { render } from 'react-dom';

class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="home">
					<h1>The Secret Garden Shoppe</h1>
					<button type="submit">Shop</button>
				</div>
			</div>
		)
	}
}

render(<Home/>, document.querySelector('#main'));

export default Home;