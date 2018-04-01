Router.route('/', {
	name: 'Index',
	waitOn() {
		return [
			Meteor.subscribe('Collection'),
			// Add other sub here
		];
	},
	data() {
		return true;
	}
});

Router.route('/settings', {
	name: 'Settings',
	waitOn() {
		return [
			Meteor.subscribe('Collection'),
			// Add other sub here
		];
	},
	data() {
		return true;
	}
});

Router.route('/profile', {
	name: 'Profile',
	waitOn() {
		return [
			Meteor.subscribe('Collection'),
			// Add other sub here
		];
	},
	data() {
		return true;
	}
});
