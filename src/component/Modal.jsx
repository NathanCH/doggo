import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import './Modal.scss';

class Modal extends Component{
	render() {
		const modalClass = classNames('Modal', {
			'Modal--hidden': !this.props.isVisible
		});

		return (
			<div className={modalClass}>
				<div className="Modal__header">
					Im interested in
				</div>
				<div className="Modal__body">
					<Link to="#" className="Modal__option Modal--clickable">
						<i className="Modal__icon ion ion-male"></i>
					</Link>
					<Link to="#" className="Modal__option Modal--clickable">
						<i className="Modal__icon ion ion-female"></i>
					</Link>
				</div>
			</div>
		);
	}
}

Modal.propTypes = {
	isVisible: React.PropTypes.bool
};

Modal.defaultProps = {
	isVisible: false
}

export default Modal;