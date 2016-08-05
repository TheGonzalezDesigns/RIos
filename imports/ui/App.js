import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import AccountsUIWrapper from './AccountsUIWrapper.js';

// App component - represents the whole app
class App extends Component {
	render() {
		return (
			<div className="container">
				<header>
					<AccountsUIWrapper />
				</header>
			</div>
		);
	}
}

App.propTypes = {
	currentUser: PropTypes.object,
};

export default createContainer(() => {
	return {
		currentUser: Meteor.user(),
	};
}, App);
