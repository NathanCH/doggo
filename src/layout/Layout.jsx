import React, { Component } from 'react';

import './Layout.scss';

import Header from '../header/Header.jsx';
import Modal from '../component/Modal.jsx';

class Layout extends Component{
	render() {
		return (
			<div className="Layout">
				<Modal isVisible={false} />
				<Header hasButtons={true} />
				<div className="Layout__content">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Layout;