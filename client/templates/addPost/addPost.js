Template.addPost.events({
    'click a.ion-android-send': function(e, t) {
    //'click': function(e, t) {
        //var cleanedSections, newPost, postId, sections, title, _ref;
        console.log('Submitting...');
        //sections = Session.get('sections');
        //console.log(sections);
        var _ref = t.find('input[name=title]');
        var _ref2 = t.find('input[name=body]');

        var title = (_ref) != null ? _ref.value : void 0;

        var body = (_ref2) != null ? _ref2.value : void 0;

        //var text = $("textarea.in-edit-mode").value;

        console.log('title: ' + title);
        console.log('text: ' + body);
        //cleanedSections =  sections.map(function(s) {
        //    delete s.isNotEditMode;
        //    return s;
        //});
        newPost = {
            title: title,
            body: body,
            published: true
        };
        console.log(newPost);
        postId = Posts.insert(newPost);
        return Router.go("/viewPost/" + postId);
    }
});