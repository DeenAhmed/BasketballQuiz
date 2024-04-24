## BasketballQuiz

Quiz Website that has 20 questions in total that are shuffled so that each time you start the quiz you get different questions, as well as the answers being in different places.

[Live webpage](https://deenahmed.github.io/BasketballQuiz/)

![Mockup image](/assets/images/mockup.png)

## Aim of the site

The client has stated they wanted a new quiz website and have asked for this to be designed to the following specifications;

A basketball quiz with randomised questions and to show the user's score when completing the quiz.

The company working group have provided me with the following goals for the site.

1. A simple but professional design.
2. Easy to read and navigate through.
3. No way for the user to remember a winning sequence.
4. Show the final score.

## UX

The main aim is for people interested in basketball and wanting to test their knowledge or take part in a fun quiz.

### Target audience

- People with interest in basketball.
- People looking to test or gain knowledge on NBA basketball facts.

### User requirements and expectations

- A clear navigation that makes it easy to flow through the quiz site.
- Buttons and functions that work as expected.
- Fully responsive for viewing on any device.

## Design

I came up with the following keywords for the site:

- Soft
- Modern
- Simplistic
- User friendly

### Fonts

The font "Ubuntu" is used throughout the whole site. I chose to use this as it is bold, easy to read and gives the quiz a different feel from a standard font.

### Background

I chose to use a light blue background and white for the quiz app placed in the centre. The bright background is not overpowering and compliments well with white.

## Features

### Quiz Page

The Quiz page holds the first question ready to be answered.

![Home](/assets/images/front-page.png)

### Scoreboard

The scoreboard adds up and shows how many answers you've got correct.

![Scoreboard](/assets/images/scoreboard.png)

### Answer Buttons

Each button changes colour when the mouse is positioned over them to indicate you what you are going to select.

![Answer Buttons](/assets/images/answer-btns.png)

### Correct Answer

When selecting the correct answer the button shows as green.

![Correct Answer](/assets/images/correct-answer.png/)

### Correct Answer Alert

When a correct answer is selected a pop up is shown with a green tick and the message "Correct!".

![Correct Answer Alert](/assets/images/correct-alert.png)

### Incorrect Answer

When selecting the correct answer the button shows as red.

![Incorrect Answer](/assets/images/incorrect-answer.png)

### Incorrect Answer Alert

When a correct answer is selected a pop up is shown with a red cross and the message "Unlucky!".

![Incorrect Answer Alert](/assets/images/incorrect-alert.png)

### Cursor disabled after selecting answer

After selecting an answer the cursor becomes disabled and only allows you to select the 'Next' or 'Play Again' button.

### Next button

When hovering the cursor over the Next button, the button increases in size so that it is easier to indicate what is being selected.

### Total Score

At the end of the quiz it will count your correct answers and show this against the total question number.

![Total Score](/assets/images/score-screen.png)

## Technologies used

- HTML, CSS & JavaScript programming languages
- [Font Awesome](https://fontawesome.com/) - Basketball Icons
- [VSCode](https://code.visualstudio.com/) - IDE for local developement
- [GIT](https://git-scm.com/) - Version Control
- [GitHub](https://github.com/) - To host the repositories for this project and the live website preview
- [W3C Markup Validation](https://validator.w3.org/) - Validate HTML
- [W3C CSS validation](https://jigsaw.w3.org/css-validator/) - Validate CSS
- [JS Hint](https://jshint.com/) - Validate JavaScript
- [Lighthouse Chrome](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en) - To audit best security practice and reduce loading times

## Validation

### HTML validation

The [W3C Markup Validation Service](https://validator.w3.org/) was used to validate the HTML. The HTML passes with 0 errors and 0 warnings.

<details><summary>Quiz Page</summary>
<img src="/assets/images/html-val.png">
</details>

### CSS validation

The [W3C Jigsaw CSS Validation Service](https://jigsaw.w3.org/css-validator/) was used to validate the CSS. The CSS passes with 0 errors.

<details><summary>style.css</summary>
<img src="/assets/images/css-val.png">
</details>

### JavaScript Validation

The [JS Hint](https://jshint.com/) was used to validate the JavaScript for both files. The JavaScript passes with 0 errors.

<details><summary>JavaScript</summary>
<img src="/assets/images/js-val.png">
</details>

### Performance

[Google Lighthouse](https://developers.google.com/web/tools/lighthouse) was used to test the performance of the website. The test shows 100 apart from Accessibility, this is due to lighthouse stating the colour of the app (White) does not contrast with the question colour (lightslategray) enough.

<details><summary>Front page</summary>
<img src="/assets/images/lighthouse-performance.png">
</details>

### Performing tests on various devices

The quiz-site was tested on the following devices:

- Lenovo ideaPad,
- HP elitebook
- iPhone 12 Pro, iPhone SE

### Browser compatability

The website was tested on the following browsers:

- Microsoft Edge
- Google Chrome

## Issues and resolutions

During the build the following issues were flagged

### Issue

- Unable to import questions from 1 js file to another

### Fix

- This was resolved by pulling the questions straight into the html using a script tag.

### Issue

- Had a duplicate function which caused issue with scoreboard

### Fix

- Removed duplicate function and this resolved issue

### Issue

- Next button not showing

### Fix

- Added nextButton display to show block

## Deployment

The website was deployed using GitHub Pages by following these steps:

1. In the GitHub repository navigate to the Settings tab
2. On the left side menu select Pages
3. For the source select Branch: master
4. Once the webpage refreshes you will see a bar on the top with the following message: "Your site is published at"

You can clone the repository by following these steps:

1. Go to the GitHub repository
2. Find the Code button located above the list of files and click it
3. Select if you prefer to clone using HTTPS, SSH, or Github CLI and click copy this will copy the URL to your clipboard
4. Open Git Bash
5. Change the current working directory to where you want the cloned directory
6. Type git clone and paste the URL from the clipboard ($ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY)
7. Press Enter to create your local clone.

## Credits

### Media

SweetAlert used for the alert pop-ups

- [SweetAlert](https://sweetalert2.github.io/)

For the icons:

- [Font Awesome](https://fontawesome.com)

### Other

Randomised Shuffle Array

- [Stack Overflow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)

## Acknowledgements

I would like to take the opportunity to thank:

- My friends and work colleagues for their advice, support and help with testing.
- My mentor [Richard Wells](https://github.com/D0nni387) for his first class support.
