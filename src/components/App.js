import React from 'react';
import Header from './Header';
import Cart from './Cart';
import plant from './plant';
import Menu from './Menu';

class App extends React.Component {
	constructor() {
		super();
		//initial state
		this.state = {
			plants: {},
			order: {}
		};
	this.loadPlants = this.loadPlants.bind(this);
	this.addToOrder = this.addToOrder.bind(this);
	}


	loadPlants() {
		const plants = {...this.state.plants};
		this.setState({
			plants: plants
		})
	}


	addToOrder(key) {
		//take a copy of our state
		const order = {...this.state.order};
		//update or add the new quantity of plant ordered
		order[key] = order[key] + 1 || 1;
		//update our state
		this.setState({
			order: order
		})
	}

	render() {
		return (
			<div className="secret-garden">
				<div className="menu">
					<Header tagline="Online Succulent Shoppe"/>
					<ul className="list-of-plants">
						<Menu addToOrder={this.addToOrder}/>
					</ul>
				</div>
				<Cart />
			</div>
		)
	}
}

export default App;