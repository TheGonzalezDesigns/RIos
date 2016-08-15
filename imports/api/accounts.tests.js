/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { assert } from 'meteor/practicalmeteor:chai';
import './accounts';

if (Meteor.isServer) {
    describe('accounts', () => {
        describe('methods', () => {
            let userId;
            before(() => {
                // create testuser
                const signUpNewUser = Meteor.server.method_handlers['accounts.signup'];
                const userInfo = {
                    username: 'testuser',
                    password: 'password',
                    email: 'email',
                };
                userId = signUpNewUser.apply(null, [userInfo]);
            });
            it('can signup testuser', () => {
                const testuser = Accounts.findUserByUsername('testuser');
                assert.equal(testuser._id, userId);
            });
            after(() => {
                // remove testuser
                Meteor.users.remove({_id: userId});
            });
        });
    });
}
