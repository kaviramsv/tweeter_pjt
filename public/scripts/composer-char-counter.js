//function to display the length of tweet count 
$(document).ready(function () {

  const $textArea = $("#tweet-text");

  $textArea.on('input', function () {

    let $ip_tweet = $(this).val();   
    let input_remain = 140 - $ip_tweet.length;

    //navigate to closest parent
    let $counter = $(this).closest("form").find('.counter');
    $counter.text(input_remain);

    if (input_remain < 0) {
      $counter.css("color", "red");

    } else {
      $counter.css("color", "#545149");
      
    }

  })

});