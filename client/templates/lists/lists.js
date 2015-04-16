Template.lists.helpers({
  //times: function () {
  //  var times = [];
  //  _(20).times(function(n){
  //    times.push(n);
  //  });
  //  return times;
  //}
    posts: function(){
        return Posts.find();
    },

    email: function(){
        // console.log('current user name debug');
        return Meteor.user().emails[0].address;
    }
});

Template.lists.events({
    'click .viewPost': function() {
        return Router.go("/viewPost/" + this._id); //"/postView/#{@_id}"
    }
});
