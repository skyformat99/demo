//Template.viewPost.events({
//
//    }
//});

Template.viewPost.helpers({
    isMyPost: function() {
        if (Meteor.user() != null) {
            return Meteor.user()._id === this.authorId;
        }
    },
    userName: function(authorId) {
        var currentUser;
        currentUser = Meteor.users.findOne(authorId);
        return currentUser != null ? currentUser.username : void 0;
    }
});