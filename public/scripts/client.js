/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  //create an article element for each row in the data array
  const createTweetElement = (tweetData) => {
    const rendertweets = (created_at) => { return timeago.format(created_at); }

    //tweetData.forEach(tweet => {
    tweetData.reverse().forEach(tweet => {
      const $tweet =
      $(`<article>
        <header class="tweet-header">
          <div class="second-header">
            <img  alt="" src=${tweet.user.avatars}>
            <p>${tweet.user.name}</p>                          
          </div> 
          <p>${tweet.user.handle}</p>           
        </header>
        <p class="text">${escape(tweet.content.text)}</p>
        <footer>
          <p>${rendertweets(tweet.created_at)}</p>
          <div>
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      </article>`);

      //append each record to tweets container
      $('#tweets-container').append($tweet);
    });

  }//create elmnt

  const loadTweets = () => {
    const url = "http://localhost:8080/tweets"
    $.ajax({
      type: "GET",
      url: url,
    })
    .then((result) => {
      console.log("result :", result);
      createTweetElement(result);
    })
    .catch((err) => {
      console.log("error:", err)
      })
  }//loadtweets

  //details already on the page
  loadTweets();

  $("form").on("submit", function (event) {
    event.preventDefault();
    const tweeted_ip = $(this).serialize();
        
    const url = "http://localhost:8080/tweets";   
    //length of permissible count of 140 
    let tweeted_ip_len =140-$(".tweetbox .counter").val();

    console.log("ip len:", tweeted_ip_len);

    if (tweeted_ip_len > 140) {
      //error pop msg indicating length more than 140
      const err = $(`<p>!! Please reduce the length to 140 !!</p>`)
      $('.container .new-tweet .error').html(err);
      $('.container .new-tweet .error').css("display", "block");
      setTimeout(function () {
        const err = $(`<p></p>`);
        $('.container .new-tweet .error').html(err);
        $('.container .new-tweet .error').hide();
      }, 3000);
     //error pop msg indicating length less than 0
    } else if (tweeted_ip_len === 0) {
      const err = $(`<p>!! oopss.. You have no content to tweet  !!</p>`);
      $('.container .new-tweet .error').html(err);
      $('.container .new-tweet .error').show();
      setTimeout(function () {
        const err = $(`<p></p>`);
        $('.container .new-tweet .error').html(err);
        $('.container .new-tweet .error').hide();
      }, 3000);

    } else {     

      // loadTweets if input pass the validation test ;
      $.ajax({
        type: "POST",
        url: url,
        data: tweeted_ip,
      })
      .done(function () {
        loadTweets();
      })

      $("form")[0].reset();
      $('#tweets-container').empty();
      $("form .tweetbox .counter").text(140);
    }//else
  });


});