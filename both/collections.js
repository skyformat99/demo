Posts = new Mongo.Collection('posts');

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },
  body: {
    type: String,
    autoform: {
      rows: 10,
      'label-type': 'stacked'
    }
  },
  published: {
    type: Boolean,
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },

    authorId: {
        type: String,
        defaultValue: Fake.word()//,
        //autoValue: function() {
        //    if (this.isUpdate) {
        //        return;
        //    }
        //    if (this.isInsert) {
        //        return this.userId;
        //    }
        //}
    }
}));
