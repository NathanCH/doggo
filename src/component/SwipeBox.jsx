import React, { Component } from 'react';
import Swing from 'react-swing';

import './SwipeBox.scss';

import Card from './Card.jsx';

class SwipeBox extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			stack: null
		};
	}
	render() {
		var cards = [];
		for (var i = 0; i < 10; i++) {
			cards.push(<Card ref={i} content={i} />);
		}
		return(
			<div className="SwipeBox">
				<Swing
					className="SwipeBox__stack"
					tagName="div"
					setStack={(stack)=> this.setState({stack:stack})}
					ref="stack"
					throwout={(e)=>console.log('throwout',e)}
				>
					{cards}
				</Swing>
			</div>
		)
	}
}

export default SwipeBox;