import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Route path='/' component={Header} />
				<Route exact path='/home' component={Home} />
				<Route exact path='/about' component={About} />
			</div>
		</BrowserRouter>
	)
}

ReactDOM.render(<Root />, document.getElementById('root'));