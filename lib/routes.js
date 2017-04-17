Router.route('/', {
    name: 'Index',
    waitOn: () => {
        return [
            Meteor.subscribe('Collection'),
            // Add other sub here
        ]
    },
    data: () => {
        console.log('Data sent to the template rendered');
        return true;
    }
});