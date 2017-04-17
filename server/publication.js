Meteor.publish('Collection',function () {
    return Collection.find();
});