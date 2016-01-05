if(Meteor.isClient){
    Session.setDefault("num1", 0);
    Session.setDefault("num2", 0);
    Template.math_game.events({
        "submit .setnum":function(event){
            event.preventDefault();
            var num1s = Number(event.target.namas.value);
            var num2s = Number(event.target.nambs.value);
            if(num1s % 1 === 0 || num2s % 1 === 0){
                var a = Math.floor(Math.random()*(10-1+1)+1);
                var b = Math.floor(Math.random()*(10-1+1)+1);
            } else{
                var a = Math.floor(Math.random()*(num2s-num1s+1)+num1s);
                var b = Math.floor(Math.random()*(num2s-num1s+1)+num1s);
            }
            Session.set("num1", a);
            Session.set("num2", b);
            document.getElementById("noseef").style.display = "none";
            document.getElementById("nosees").style.display = "block";
            document.getElementById("Q").innerHTML = "What is " + (Session.get("num1")).toString() + " + " + (Session.get("num2")).toString() + "?";
        },
        "submit .maths":function(event){
            event.preventDefault();
        }
    });

}
