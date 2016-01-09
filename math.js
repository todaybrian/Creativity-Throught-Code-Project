if(Meteor.isClient){
    Session.setDefault("num1", 0);
    Session.setDefault("num2", 0);
    Session.setDefault("score", 0);
    Session.setDefault("wronga", 0);
    Session.setDefault('range1', 0);
    Session.setDefault('range2', 0);
    Template.math_game.events({
        "submit .setnum":function(event){
            event.preventDefault();
            var num1s = Number(event.target.namas.value);
            var num2s = Number(event.target.nambs.value);

            if(num1s % 1 === 0 || num2s % 1 === 0){
                Session.set('range1', num1s);
                Session.set('range2', num2s);
                var a = Math.floor(Math.random()*(num2s-num1s+1)+num1s);
                var b = Math.floor(Math.random()*(num2s-num1s+1)+num1s);
            } else{
                Session.set('range1', 1);
                Session.set('range2', 10);
                var a = Math.floor(Math.random()*(10-1+1)+1);
                var b = Math.floor(Math.random()*(10-1+1)+1);
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
            var num3 = num1 + num2
            var num4 = num3.toString();
            if(answermath % 1 === 0){
                if((num1 + num2) === answermath){
                    var score = Number(Session.get("score"));
                    var score = score + 1;
                    Session.set("score", score);
                    document.getElementById("rightwrong").style.color = "#009933";
                    document.getElementById("rightwrong").style.display = "block";
                    document.getElementById("rightwrong").innerHTML = "You are correct.";
                } else{
                  var wrong = Number(Session.get('wronga'));
                  var wrong = wrong + 1;
                  Session.set("wronga", wrong);
                  document.getElementById("rightwrong").style.color = "#ff3300";
                  document.getElementById("rightwrong").style.display = "block";
                  document.getElementById("rightwrong").innerHTML = "You are wrong. The right answer was " + num4 + ". ";
                }
            } else{
                //wrong
                document.getElementById("rightwrong").style.color = "#ff3300";
                document.getElementById("rightwrong").style.display = "block";
                document.getElementById("rightwrong").innerHTML = "You are wrong. The asnwer is not even a number!";
            }
            var a = Math.floor(Math.random()*(Session.get('range2')-Session.get('range1')+1)+Session.get('range1'));
            var b = Math.floor(Math.random()*(Session.get('range2')-Session.get('range1')+1)+Session.get('range1'));
            Session.set("num1", a);
            Session.set("num2", b);
            document.getElementById("Q").innerHTML = "What is " + (Session.get("num1")).toString() + " + " + (Session.get("num2")).toString() + "?";
            event.target.answer.value = "";
          },
          "click #Finish":function(event){
                alert("Are you sure you want to finish? This won't be saved.");
                document.getElementById("nosees").style.display = "none";
                document.getElementById("scoreteller").innerHTML = "<h3>Good job!</h3><br><p>You got " + Session.get('score').toString() + " right and " + Session.get('wronga').toString() + " wrong!</p><p>Refresh the page to start again!</p>";
                document.getElementById("scoreteller").style.display = "block";
          }


    });

}
