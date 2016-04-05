
/* ======== Model ======== */

var model = {
    currentCat: 0,
    cats: [
        {
            name: 'Ponchatoula',
            score: 0,
            img: 'img/the-ponch-1500.jpg'
        },
        {
            name: 'Ellers',
            score: 0,
            img: 'img/ellers.jpg'
        },
        {
            name: 'Thackery Binx',
            score: 0,
            img: 'img/thackery-binx.jpg'
        },
        {
            name: 'Garfield, the Patriot',
            score: 0,
            img: 'img/garfield-the-patriot.jpg'
        },
        {
            name: 'Mr. Bigglesworth',
            score: 0,
            img: 'img/mr-bigglesworth.jpg'
        },
    ]
};

/* ======== octopus ======== */

var octopus = {
    init: function() {
        listDisplay.init();
        catDisplay.init();
    },
    getCurrentCat: function() {
        return model.cats[model.currentCat];
    },
    getCatsArray: function() {
        return model.cats;
    },
    changeCat: function(catNo) {
        model.currentCat = catNo;
    },
    increaseScore: function() {
        model.cats[model.currentCat].score++;
        catDisplay.render();
    }
};

/* ======== Views ======== */

var listDisplay = {
    $buttons: $('.cat-switch'),
    init: function() {
        this.$buttons.click(function(e) {
            switch (e.target.id) {
                case 'cat-0':
                    octopus.changeCat(0);
                    break;
                case 'cat-1':
                    octopus.changeCat(1);
                    break;
                case 'cat-2':
                    octopus.changeCat(2);
                    break;
                case 'cat-3':
                    octopus.changeCat(3);
                    break;
                case 'cat-4':
                    octopus.changeCat(4);
                    break;
                default:
                    console.log("Error with cat switcher");
                    break;
            }
            catDisplay.render();
        });

        this.render();
    },
    render: function() {
        var catsArray = octopus.getCatsArray();
        for (var i = 0; i < catsArray.length; i++) {
            $('#cat-' + i).text(catsArray[i].name);
        }
    }
}

var catDisplay = {
    $cat: $('.cat-pic'),
    $scoreElement: $('#score-count'),
    $catCaption: $('#cat-caption'),
    init: function() {
        catDisplay.$cat.click(function() {
            octopus.increaseScore();
        });

        this.render();
    },
    render: function() {
        var renderCat = octopus.getCurrentCat();
        this.$catCaption.text("The beautiful " + renderCat.name + ", awaiting your click");
        this.$cat.attr("src", renderCat.img);
        this.$scoreElement.text(renderCat.score);
    }
};

octopus.init();
