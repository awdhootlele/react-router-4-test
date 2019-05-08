import { h, Component } from 'preact';
import {Link} from 'react-router-dom';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Preact App 123</h1>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/profile">Me</Link>
					<Link to="/profile/john">John</Link>
				</nav>
			</header>
		);
	}
}


