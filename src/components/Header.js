import React from 'react';


const Header = (props) => {
	return(
		<div>
			<header className="top">
				<h1>The 
					<span className="secretGarden">
						<span className="secret">Secret</span>
						<span className="garden">Garden</span>
					</span>
					Shoppe
				</h1>
				<h3 className="tagline">{props.tagline}</h3>
			</header>
		</div>
	)
}


export default Header;