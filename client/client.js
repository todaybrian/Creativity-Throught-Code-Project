Awesome = new Meteor.Collection('awesome');

if (Meteor.isClient) {
    Template.about.rendered = new WOW().init();
    
}
Template.gallery.helpers({
    awesome: function(){
        return Awesome.find();
    }
})