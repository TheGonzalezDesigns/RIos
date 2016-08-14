import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

Meteor.methods({
    'accounts.signup'(userInfo) {
        if (!Meteor.isServer) {
            throw new Meteor.Error('server side call only');
        }
        const user = Accounts.createUser(userInfo);
        return user;
    }
});
