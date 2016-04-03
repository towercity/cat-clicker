var $cat1 = $('#cat-1'),
    $cat2 = $('#cat-2'),
    $scoreElementOne = $('#score-count-1'),
    $scoreElementTwo = $('#score-count-2'),
    catOneName = 'Ponchatoula',
    catTwoName = 'Ellers',
    $catOneCaption = $('#cat-1-caption'),
    $catTwoCaption = $('#cat-2-caption'),
    scoreOne = 0,
    scoreTwo = 0;

//adds captions when the page has loaded
$(document).ready(function() {
    $catOneCaption.text("The beautiful " + catOneName + ", awaiting your click");
    $catTwoCaption.text("The beautiful " + catTwoName + ", awaiting your click");
});

//increases scores upon click and updates score DOM element
$cat1.click(function() {
    scoreOne++;

    $scoreElementOne.text(scoreOne);
});

$cat2.click(function() {
    scoreTwo++;

    $scoreElementTwo.text(scoreTwo);
});
