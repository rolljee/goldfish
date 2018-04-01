import { Meteor } from 'meteor/meteor';
import Collection from '../lib/collections';

Meteor.publish('Collection', function() {
	if (!this.userId) {
		return this.ready();
	}
	return Collection.find();
});
