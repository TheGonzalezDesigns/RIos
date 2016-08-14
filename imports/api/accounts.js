import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
    'accounts.signup'(userInfo) {
        if (!Meteor.isServer) {
            throw new Meteor.Error('server side call only');
        }
        const user = Accounts.createUser(userInfo);
        return user;
    }
});
