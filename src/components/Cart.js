import React from 'react';
import plant from './plant';
import { formatPrice } from './helpers';

class Cart extends React.Component {
	constructor() {
		super();
		this.renderOrder = this.renderOrder.bind(this);
	}
	renderOrder(key) {
		const plants = this.props.plants[key];
		const count = this.props.order[key];
		return(
			<li key={key}>
				<span>{count}pot {plant.name}</span>
				<span className="price">{formatPrice(count * plant.price)}</span>
			</li>
		)
	}

	render() {
		const orderIds = Object.keys(this.props.order);
		const total = orderIds.reduce((prevTotal, key) => {
			const plants = this.props.plants[key];
			const count = this.props.order[key];
			const isAvailable = true;
			
			if(isAvailable) {
				return prevTotal + (count * plant.price || 0);
			}
		});
		return(
			<aside className="sideBar" ref={ref => this.sideBar = ref}>
				<div className="order-wrap">
					<h1>Your Cart</h1>
					<ul className="order">
						{orderIds.map(this.renderOrder)}
						<li className="total">
							<strong>Total:</strong>
							{formatPrice(total)}
						</li>
					</ul>
					<div className="close-btn" onClick={this.showSideBar}>
						<i className="fa fa-times"></i>
					</div>
					<input type="submit" value="Place Order"/>
				</div>
			</aside>
		)
	}
}

export default Cart;