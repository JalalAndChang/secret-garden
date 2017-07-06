import React from 'react';
import { render } from 'react-dom';

class Home extends React.Component {
	goToStore(e) {
		console.log('You changed the url');
		//transition from url to url/store
		this.context.router.transitionTo(`/store`);
	}


	render() {
		return (
			<div>
				<div className="home">
					<h1>The Secret Garden Shoppe</h1>
					<button onClick={this.goToStore.bind(this)} type="submit">Shop</button>
				</div>
			</div>
		)
	}
}

Home.contextTypes = {
	router: React.PropTypes.object
}

render(<Home/>, document.querySelector('#main'));

export default Home;