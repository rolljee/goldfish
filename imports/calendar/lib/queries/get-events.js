import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import CalendarEvents  from '../calendar';

// Create a query that will be used client and server
const query = CalendarEvents.createQuery('getEvents', {
	title: 1,
	start: 1,
	end: 1,
});

if (Meteor.isServer) {
	// expose the query to the client
	console.log('Exposing query getEvents');
	query.expose({
		firewall(userId, params) {
			console.log('firewall', userId, params);
		},
		publication: true, // true or false (true for reactive) / (false for static query)
	});
}

export default query;
