Awesome = new Meteor.Collection('awesome');

if (Meteor.isClient) {

    Session.setDefault('exchangedPrinciple', 0);
    Session.setDefault('finalCurrency', 0);

    Session.setDefault('val1', 0);
    Session.setDefault('val2', 0);
    Session.setDefault('score', 0);
    Session.setDefault();
    Template.about.rendered = new WOW().init();

    Template.cc.events({
        'submit .convert':function(event) {
            event.preventDefault();
            //Exchange rates
            var ctous = 0.710065;
            var utoc = 1.40832;
            var exchangee = [ctous, utoc];

            //Get values from form.
            var principleValue = event.target.principle.value;
            var rateSelected = event.target.type.value;
            Session.set('exchangedPrinciple', exchange(principleValue, rateSelected));
            //console.log(exchange(principleValue, rateSelected))
        }
    });
    Template.cc.helpers({
        exchange:function(principle, rateSelected){
            return principle*exchangee[rateSelected]
        },
        returnExchanged:function(){
            var temp = Session.get('exchangedPrinciple');
            if(temp<0){
                return "That's a negative value.";
            } else {
                return temp;
            }

        }
    });
    
    Template.gallery.helpers({
        awesome: function(){
            return Awesome.find();
        }
    });
    Template.javascript.helpers({
        printname:function(name){
            return String(name);
        }
    });
}
