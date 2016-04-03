var $cat = $('.cat'),
    $scoreElement = $('#score-count'),
    catOneName = 'Ponchatoula',
    catTwoName = 'Ellers',
    $catOneCaption = $('#cat-1-caption'),
    $catTwoCaption = $('#cat-2-caption'),
    score = 0;

//adds captions when the page has loaded
$(document).ready(function() {
    $catOneCaption.text("The beautiful " + catOneName + ", awaiting your click");
    $catTwoCaption.text("The beautiful " + catTwoName + ", awaiting your click");
});

//increases score upon click and updates score DOM element
$cat.click(function() {
    score++;

    $scoreElement.text(score);
});
