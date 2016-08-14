import React, { Component } from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleLogOut = this.handleLogOut.bind(this);
    }
    handleLogOut() {
        console.log('logging out...');
        this.props.logout();
    }
    render() {
        const currentUser = this.props.currentUser;
        return (
            <div>
                <header>
                    <h3>App</h3>
                    {currentUser &&
                    <div>
                        <p>userId: {currentUser._id}</p>
                        <p>username: {currentUser.username}</p>
                        <p>email: {Array.isArray(currentUser.emails) ? currentUser.emails[0].address : 'no email'}</p>
                        <p>first: {currentUser.profile ? currentUser.profile.first : ''}</p>
                        <p>last: {currentUser.profile ? currentUser.profile.last : ''}</p>
                    </div>
                    }
                </header>
                <Link to='/' activeClassName='active'>Home</Link>
                {!currentUser &&
                <Link to='/signup' activeClassName='active'>Sign Up</Link>
                }
                {!currentUser &&
                <Link to='/login' activeClassName='active'>Log In</Link>
                }
                {currentUser &&
                <button onClick={this.handleLogOut}>Log Out</button>
                }
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
}, App);

