import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './styles/styles.css';
import App from './components/App';
import Home from './components/Home';
import NotFound from './components/NotFound';


const Root = () => {
	return(
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Home} />
				<Match pattern="/store" component={App} />
				<Miss component={ NotFound } />
			</div>
		</BrowserRouter>
	)
}


render(<Root/>, document.querySelector('#main'));
