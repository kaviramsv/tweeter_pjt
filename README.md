# Tweeter Project

Tweeter is a single-page Twitter clone using HTML, CSS, JS, jQuery and AJAX.

## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
3. Go to <http://localhost:8080/> in your browser.
4. Once you get the app started and loaded in your browser, you can start tweeting 

## Dependencies

- Express
- Node 5.10.x or above
- Body-parser
- Chance
- Express

## Contents in the Layout
- Navigation Bar
- Header with Image and Name
- Tweet box with a text area ,tweet button(left) and character counter(right) 
- Individual Tweets have a: 
        header = > avatar,name and handle
        body =>the main tweet content
        footer =>time stamp and "Flag", "Re-tweet" and "Like" icons on the right


## Functionalities of the App

- Character Counter:
  When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140)

- The Character Counter turns red (or similar) when more than 140 characters have been  typed into the Compose Tweet textarea, and it shows how many characters over the 140 limit have been typed (using a negative number)

- Compose Tweet
When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate error message is displayed

- When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet textarea is cleared, and the Character Counter is reset (to 140)

- Individual Tweets
  When the user hovers over a tweet, that tweet should display a box shadow.

- Action Icons
  When the user hovers over an icon ("Flag", "Re-tweet" and "Like") the icon changes colour.

## Screen Shots
!["Screenshot of Tweeter page in Desktop"](https://github.com/kaviramsv/tweeter_pjt/blob/master/docs/main_tweet.png)

!["Screenshot of length validation error message "](https://github.com/kaviramsv/tweeter_pjt/blob/master/docs/err.png)

!["Screenshot of icons changing color"](https://github.com/kaviramsv/tweeter_pjt/blob/master/docs/tweet_content.png)

!["Screenshot in mobile view"](https://github.com/kaviramsv/tweeter_pjt/blob/master/docs/mobile%20view.png)


