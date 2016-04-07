var ViewModel = function() {
    this.score = ko.observable(0);
    this.name = ko.observable('Ponchatoula');
    this.pronoun = ko.observable('him');
    this.img = ko.observable('img/the-ponch-1500.jpg');
    this.imgAttribution = ko.observable('Sara Wasserman');

    this.incrementCounter = function() {
        this.score(this.score() + 1);
    }
};

ko.applyBindings(new ViewModel());
