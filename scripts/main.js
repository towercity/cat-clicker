var $ponch = $('#the-ponch'),
    $scoreElement = $('#score-count'),
    score = 0;

$ponch.click(function() {
    score++;

    $scoreElement.text(score);
});
