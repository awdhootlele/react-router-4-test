import { h, Component } from 'preact';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import Home from './home';
import Profile from './profile';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div id="app">
					<Header />
					<AppRoutes></AppRoutes>
				</div>
			</BrowserRouter>
		);
	}
}


const AppRoutes = () => {
	return (
		<div>
			<Route component={Home} exact path="/" />
			<Route component={Profile} exact path="/profile/" user="me" />
			<Route component={Profile} exact path="/profile/:user" />
		</div>
	);
};
