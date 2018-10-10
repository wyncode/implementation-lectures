import React from 'react';
import { Menu } from 'semantic-ui-react';

class Header extends React.Component {
	render() {
		return (
			<Menu>
				<Menu.Item
					name='home'   
					onClick={() => this.props.history.push('/home')}       
        />
        <Menu.Item
					name='about'
					onClick={() => this.props.history.push('/about')}
        />
			</Menu>
		)
	}
}

export default Header;