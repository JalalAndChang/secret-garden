import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Cart from './Cart';
import SocialIcons from './SocialIcons.js';

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
			<div className="wrapper">
				<Cart plants={this.state.plants} order={this.state.order}/> 
				<div className="menu">
					<Header tagline="Succulents"/>
					<div className="list-of-plants">
						<Menu addToOrder={this.addToOrder}/>
					</div>
				</div>
				<footer>
					Copyright 2017 © Tina Chang & Nahrin Jalal
					<SocialIcons />
				</footer>
			</div>
		)
	}
}

export default App;