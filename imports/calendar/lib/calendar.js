import { Mongo } from 'meteor/mongo';
import moment from 'moment';

const CalendarEvents = new Mongo.Collection('calendarevents');

if (Meteor.isServer) {
	CalendarEvents.bulkInsert = function bulkInsert(events) {
		events.forEach(e => CalendarEvents.insert(e));
	};

	if (CalendarEvents.find().count() === 0) {
		CalendarEvents.bulkInsert([{
			title: 'event1',
			start: moment(new Date())._d,
			end: moment(new Date()).add(1, 'days')._d
		},
		{
			title: 'event2',
			start: moment(new Date())._d,
			end: moment(new Date()).add(1, 'hours')._d
		},
		{
			title: 'event3',
			start: moment(new Date())._d,
			end: moment(new Date()).add(2, 'days')._d
		}]);
		console.log('Inserted fixtures');
	}
}

export default CalendarEvents;
