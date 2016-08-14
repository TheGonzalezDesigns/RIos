import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

const admin = Meteor.users.findOne({username: 'admin'});

if (!admin) {
    const newAdmin = Accounts.createUser({username: 'admin', password: 'admin'});
    Roles.addUsersToRoles(newAdmin, 'super-admin', Roles.GLOBAL_GROUP);
    console.log('Admin not found.  Creating admin account. (admin/admin)');
}

