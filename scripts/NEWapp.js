var ViewModel = function() {
    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function() {
        this.currentCat().score(this.currentCat().score() + 1);
    }
};

var Cat = function() {
    this.name = ko.observable('Ponchatoula');
    this.score = ko.observable(0);
    this.pronoun = ko.observable('him');
    this.img = ko.observable('img/the-ponch-1500.jpg');
    this.imgAttribution = ko.observable('Sara Wasserman');

    this.level = ko.computed(function() {
        if (this.score() < 25) {
            return "Newborn";
        } else if (this.score() < 50) {
            return "Kitten";
        } else if (this.score() < 75) {
            return "Awkward Teenager, Not Quite Cat But Not Kitten";
        } else if (this.score() < 100) {
            return "Cat";
        } else if (this.score() < 125) {
            return "Senior";
        } else if (this.score() < 1000000) {
            return "Elder Sage";
        } else {
            return "Rest In Peace Poor " + this.name();
        }
    }, this);
}

ko.applyBindings(new ViewModel());
