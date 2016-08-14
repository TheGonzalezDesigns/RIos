//import * as types from './actionTypes';
import { Meteor } from 'meteor/meteor';

export const signUp = (userInfo) => {
    return () => {

        // Moving first and last name to 'profile' property
        const updated = Object.assign({}, userInfo, {profile: {first: userInfo.first, last: userInfo.last}});

        Meteor.call('accounts.signup', updated, (err, results) => {
            if (err) throw new Meteor.Error('wtf');

            // If signup is successful, logs in user with the username and password
            // from signup.
            doLogIn(userInfo.username, userInfo.password);
        });
        
    };
};

export const logIn = (username, password) => {
    return () => {
        doLogIn(username, password);
    }
};

export const logout = () => {
    return () => {
        Meteor.logout();
    };
};

const doLogIn = (username, password) => {
    Meteor.loginWithPassword(username, password, (err, results) => {
        if (err) throw new Meteor.Error('login failed');
        console.log('login success');
    });
};
