if (Meteor.isClient) {
  Template.about.rendered = new WOW().init();
}
