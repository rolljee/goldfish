import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import getEvents from '../lib/queries/get-events';
import './calendar.html';

Template.Calendar.onCreated(function () {

});

Template.Calendar.onRendered(function () {
	const query = getEvents.clone();
	const handler = query.subscribe();

	this.autorun(function () {
		if (handler.ready()) {
			const events = query.fetch();
			this.$('.calendar-view').fullCalendar({
				defaultView: 'month',
				themeSystem: 'bootstrap3',
				themeName: 'Paper',
				eventClick(calEvent, jsEvent, view) {
					console.log('Event: ' + calEvent.title);
				},
				dayClick(date, jsEvent, view) {
					console.log('Clicked on: ' + date.format());
				},
				events
			});
		}
	}.bind(this));
});

Template.Calendar.helpers({

});

Template.Calendar.events({

});

Template.Calendar.onDestroyed(function () {

});
