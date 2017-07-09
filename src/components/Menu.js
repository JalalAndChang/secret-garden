import React from 'react';
import plant from './plant';

class Menu extends React.Component {
	render() {
		return (
			<ul className="menu-plant__container">
				{plant.map( (plant, index) => {
					return (
						<li className="menu-plant" key={`plant-${index}`}>
							<div className="menu-plant__img">
								<img src={plant.image} alt="Succulant"/>
							</div>
							<div>
								<h3>{plant.name}</h3>
								<p>{plant.desc}</p>
							</div>
							<div>
								<h5>${plant.price}</h5>
								<button onClick={() => this.props.addToOrder(index)}><i className="fa fa-shopping-cart" aria-hidden="true"></i>Add To Cart</button>
							</div>
						</li>
					)
				})}
			</ul>
		)
	}
}

export default Menu;