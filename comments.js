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
           var usern = username.toString();
           Comments.insert({
               postedcomment: comment,
               datesubmitted: new Date(),
               colorofcomment: 'color: ' + selectedcolor + ";" + "font-size: " + fontsize + "px;",
               user: usern,
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

       },
       "click #editcomment":function(event){

           if (Session.get('user') === Meteor.user().username || Meteor.user().username === "B13i5n"){
              document.getElementById('edit').style.display =  "block";
           } else{
              alert("You are not allowed to edit other peoples comments.");
           }

       },
       "click #editcommentt":function(event){
           event.preventDefault();
           Comments.update(Session.get('currentcomment'), {postedcomment: event.target.editcomments.value});
           event.target.editcomments.value = "";
           document.getElementById('edit').style.display = "none";

       }
       /*
       "click #editcommentt":function(event){
        event.preventDefault();
         if(Session.get('currentcomment') != 0){

           //Comments.find({ _id: Session.get('currentcomment')}).update({postedcomment: event.target.editcomments.value});
           Comments.update(Session.get('currentcomment'), {postedcomment: event.target.editcomments.value});
           event.target.editcomments.value = "";
           document.getElementById('edit').innerHTML = "<button id='editcomment'>Edit Commment</button>";
         } else{
           alert("There is no comment selected.");
         }

       }*/
    });
    Template.comments.helpers({
        comments:function(){
            return Comments.find();
        }
    });
    /*
    Template.editform.events({

    });*/
}
