import React from 'react';
import plant from './plant';
import Cart from './Cart';
import { formatPrice } from './helpers.js';

class Menu extends React.Component {
	render() {
		return (
			<div>
				<ul className="menu-plant__container">
					{plant.map( (plant, index) => {
						return (
							<li className="menu-plant" key={`plant-${index}`}>
								<div className="menu-plant__img">
									<img src={plant.image} alt="Succulant"/>
								</div>
								<div className="plantInfo">
									<h3 className="plantName">{plant.name}</h3>
									<p>{plant.desc}</p>
								</div>
								<div className="priceAndCart">
									<h5>{formatPrice(plant.price)}</h5>
									<button onClick={() => this.props.addToOrder(index)}><i className="fa fa-shopping-cart" aria-hidden="true"></i>Add To Cart</button>
								</div>
							</li>
						)
					})}
				</ul>
				
			</div>
		)
	}
}

export default Menu;