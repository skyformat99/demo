Template.addPost.events({
    'click a.ion-android-send': function(e, t) {
        var cleanedSections, newPost, postId, sections, title, _ref;
        console.log('Submitting...');
        sections = Session.get('sections');
        console.log(sections);
        title = (_ref = t.find('input[name=title]')) != null ? _ref.value : void 0;
        cleanedSections = sections.map(function(s) {
            delete s.isNotEditMode;
            return s;
        });
        newPost = {
            title: title,
            sections: cleanedSections,
            published: true
        };
        console.log(newPost);
        postId = Posts.insert(newPost);
        return Router.go("/viewPost/" + postId);
    }
});