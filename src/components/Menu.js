import React from 'react';
import plant from './plant';

class Menu extends React.Component {
	render() {
		return (
			<div>
				<p>Logo Here</p>
				{plant.map( (plant, index) => {
					return (
						<li className="menu-plant" key={`plant-${index}`}>
							<div>
								<img src={plant.image} alt="Succulant"/>
							</div>
							<div>
								<h3>{plant.name}</h3>
								<h5>${plant.price}</h5>
								<p>{plant.desc}</p>
							</div>
							<button onClick={() => this.props.addToOrder}><i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
						</li>
					)
				})}
			</div>
		)
	}
}

export default Menu;