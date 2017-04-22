Router.route('/', {
    name: 'Index',
    waitOn: () => {
        return [
            Meteor.subscribe('collection'),
            // Add other sub here
        ]
    },
    data: () => {
        console.log('Data sent to the template rendered');
    }
});