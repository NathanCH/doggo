import React, { Component } from 'react';

import './Layout.scss';

import Header from '../header/Header.jsx';

class Layout extends Component{
	render() {
		return (
			<div className="Layout">
				<Header hasButtons={true} />
				<div className="Layout__content">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Layout;