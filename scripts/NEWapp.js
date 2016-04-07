var ViewModel = function() {
    this.name = ko.observable('Ponchatoula');
    this.score = ko.observable(0);
    this.pronoun = ko.observable('him');
    this.img = ko.observable('img/the-ponch-1500.jpg');
    this.imgAttribution = ko.observable('Sara Wasserman');

    this.level = ko.computed(function() {
        if (this.score() < 10) {
            return "Newborn";
        } else if (this.score() < 20) {
            return "Kitten";
        } else if (this.score() < 30) {
            return "Awkward Teenager, Not Quite Cat But Not Kitten";
        } else if (this.score() < 40) {
            return "Cat";
        } else if (this.score() < 50) {
            return "Senior";
        } else {
            return "Elder Sage";
        }
    }, this);

    this.incrementCounter = function() {
        this.score(this.score() + 1);
    }
};

ko.applyBindings(new ViewModel());
