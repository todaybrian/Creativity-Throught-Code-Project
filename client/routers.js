Router.route('/', {
    template: 'about',
    title: 'B13i5n website - about'
});

Router.route('/contact', {
    template: 'contact',
    title: 'B13i5n website - contact us'
});

Router.route('/gallery', {
    template: 'gallery',
    title: 'B13i5n website - gallery'
});
Router.route('/cc', {
    onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.render('cc');
        } else{
            this.render('login');
        }
    }
});
Router.route('/math',{
    template: 'math',
    title: 'B13i5n website - math'
});
Router.route('/login',{
    template: 'login',
    title:'B13i5n website - login'
});
Router.route('/javascript',{
    template: 'javascript',
    title:'B13i5n website - javascript'
});