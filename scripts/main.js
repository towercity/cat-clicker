//DOM elements
var $cat = $('.cat-pic'),
    $scoreElement = $('#score-count'),
    $catCaption = $('#cat-caption'),
    $buttonsArray = [$('#cat-1'), $('#cat-2'), $('#cat-3'), $('#cat-4'), $('#cat-5')],
    $buttons = $('.cat-switch'),
//Arrays
    catNames = ['Ponchatoula', 'Ellers', 'Thackery Binx', 'Garfield, the Patriot', 'Mr. Bigglesworth'],
    catImgs = [
        'img/the-ponch-1500.jpg',
        'img/ellers.jpg',
        'img/thackery-binx.jpg',
        'img/garfield-the-patriot.jpg',
        'img/mr-bigglesworth.jpg'],
    scores = [0, 0, 0, 0, 0],
//variable to define which cat is in focus
    currentCat = 0;

//adds captions and cat links when the page has loaded
$(document).ready(function() {
    displayCat(currentCat);

    for (var i = 0; i < catNames.length; i++) {
        $buttonsArray[i].text(catNames[i]);
    };
});

//increases scores upon click and updates score DOM element
$cat.click(function() {
    scores[currentCat]++;
    $scoreElement.text(scores[currentCat]);
});

//switches cats bsed on button
$buttons.click(function(e) {
    switch (e.target.id) {
        case 'cat-1':
            currentCat = 0;
            break;
        case 'cat-2':
            currentCat = 1;
            break;
        case 'cat-3':
            currentCat = 2;
            break;
        case 'cat-4':
            currentCat = 3;
            break;
        case 'cat-5':
            currentCat = 4;
            break;
        default:
            console.log("Error with cat switcher");
            break;
    }
    displayCat(currentCat);
});

//rerenders cat-display
displayCat = function(catNumber) {
    $catCaption.text("The beautiful " + catNames[catNumber] + ", awaiting your click");
    $cat.attr("src", catImgs[catNumber]);
    $scoreElement.text(scores[catNumber]);
}
