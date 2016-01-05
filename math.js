if(Meteor.isClient){
    Session.setDefault("num1", 0);
    Session.setDefault("num2", 0);
    Session.setDefault("score", 0);
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
            var answermath = Number(event.target.answer.value);
            var num1 = Number(Session.get("num1"));
            var num2 = Number(Session.get("num2"));
            if(answermath % 1 === 0){
                if((num1 + num2) === answermath){
                    var score = Number(Session.get("score"));
                    var score = score + 1;
                    Session.set("score", score);
                    document.getElementById("rightwrong").style.color = "#009933";
                    document.getElementById("rightwrong").style.display = "block";
                    document.getElementById("rightwrong").innerHTML = "You are correct.";
                } else{
                  document.getElementById("rightwrong").style.color = "#ff3300";
                  document.getElementById("rightwrong").style.display = "block";
                  document.getElementById("rightwrong").innerHTML = "You are wrong.";
                }
            } else{
                //wrong
                document.getElementById("rightwrong").style.color = "#ff3300";
                document.getElementById("rightwrong").style.display = "block";
                document.getElementById("rightwrong").innerHTML = "You are wrong.";
            }
            var a = Math.floor(Math.random()*(10-1+1)+1);
            var b = Math.floor(Math.random()*(10-1+1)+1);
            Session.set("num1", a);
            Session.set("num2", b);
            document.getElementById("Q").innerHTML = "What is " + (Session.get("num1")).toString() + " + " + (Session.get("num2")).toString() + "?";
            event.target.answer.value = "";
          }

    });

}
