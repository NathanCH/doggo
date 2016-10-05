import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import './Header.scss';
import '../shared/Logo.scss';

class Header extends Component{
	render() {
		const buttonClass = classNames('Header__button', {
			'Header__button--hidden': !this.props.hasButtons
		});

		return (
			<div className="Header">
				<div className="Header__item">
					<Link to="#" className={buttonClass}>
						<i className="ion ion-android-settings"></i>
					</Link>
				</div>
				<div className="Header__item Header__brand">
					<div className="Logo">Doggo</div>
				</div>
				<div className="Header__item">
					<Link to="#" className={buttonClass}>
						<i className="ion ion-chatboxes"></i>
					</Link>
				</div>
			</div>
		)
	}
}

Header.propTypes = {
	hasButtons: React.PropTypes.bool
};

Header.defaultProps = {
	hasButtons: false
};

export default Header;