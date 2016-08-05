/*jshint esnext: true, browser: true*/
import { Accounts } from 'meteor/accounts-base';

/*
 * Without this file the sign up form will default to ask for an email instead.
 */
Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY',
});
