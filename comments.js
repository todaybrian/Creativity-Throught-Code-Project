Comments = new Meteor.Collection('comments');
if(Meteor.isClient) {
    Session.setDefault('currentcomment', 0);
    Template.comments.events({
       "submit .new-comment":function(event){
           event.preventDefault();
           var comment = event.target.comment.value;
           var selectedcolor = event.target.colorselected.value;
           var fontsize = event.target.size.value;
           var username = Meteor.user().username;
           Comments.insert({
               postedcomment: comment,
               datesubmitted: new Date(),
               colorofcomment: 'color: ' + selectedcolor + ";" + "font-size: " + fontsize + "px;",
               user: username,
           });
           event.target.comment.value = "";
           event.target.colorselected.value = "";
           event.target.size.value = "";
       },
       "click #comment":function(event){
           Session.set("currentcomment", this._id);
       },
       "click #deletecomment":function(event){
           event.preventDefault();
           if (Session.get('user') === Meteor.user().username || Meteor.user().username === "B13i5n"){
              Comments.remove(Session.get('currentcomment'));
           } else {
              alert("You can not delete other peoples posted comments.");
           }

       }
    });
    Template.comments.helpers({
        comments:function(){
            return Comments.find();
        }
    });
}
