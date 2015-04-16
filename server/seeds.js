Meteor.startup(function () {
    Posts.remove({});
  if (Posts.find({}).count() === 0) {

      for(i = 0; i<5; i++){
          Posts.insert({
              title: Fake.word(),
              body: Fake.sentence(),
              published: Fake.fromArray([true, false]),
              authorId: this.userId
          });
      }
      
      //Posts.insert({
      //    title: Fake.word(),
      //    body: Fake.sentence(),
      //    published: Fake.fromArray([true, false])
      //});
      //Posts.insert({
      //    title: Fake.word(),
      //    body: Fake.sentence(),
      //    published: Fake.fromArray([true, false])
      //});
      //Posts.insert({
      //    title: Fake.word(),
      //    body: Fake.sentence(),
      //    published: Fake.fromArray([true, false])
      //});
  }

});
