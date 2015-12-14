Comments = new Meteor.Collection('comments');
if(Meteor.isClient) {
    Session.setDefault('currentcomment', 0);
    Template.comments.events({
       "submit .new-comment":function(event){
           event.preventDefault();
           var comment = event.target.comment.value;
           var selectedcolor = event.target.colorselected.value;
           var fontsize = event.target.size.value;
           Comments.insert({
               postedcomment: comment,
               datesubmitted: new Date(),
               colorofcomment: 'color: ' + selectedcolor + ";" + "font-size: " + fontsize + "px;",
               
           });
           event.target.comment.value = "";
           event.target.colorselected.value = "";
           event.target.size.value = "";
       },
       "click #comment":function(event){
           console.log(this._id);
           Session.set("currentcomment", this._id);
       },
       "click #deletecomment":function(event){
           event.preventDefault();
           Comments.remove(Session.get('currentcomment'));
       }
    });
    Template.comments.helpers({
        comments:function(){
            return Comments.find();
        }
    });
}
