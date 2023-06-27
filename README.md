                                                ||||||||||             ||||||||||
                                                |||||||||| HANGMAN APP ||||||||||
                                                ||||||||||             ||||||||||

My task for Project 4 was to create React App Game called Hangman. It had to be a fully playable game that will receive an API that is a random word every time. I needed to have display lines for each letter of for the chosen word and have an entire alphabet letter to click on for it. Those buttons then needed to be disabled after being clicked and maybe greyed out or crossed out to demonstrate that they have been clicked. I was required to have six attempts to guess, or the user will lose. This app also required a colour scheme and be user friendly. A visual display such as a message of a win and lose condition on the screen will be are also necessary for functionality. Lastly, A restart button to restart the game afterwards will be necessary as well. A score counter should be displayed to the user as well.

                                                            Bugs:
There are no major bugs that I can currently see, however, there were some bugs that I had during the development of this app that have been fortunately resolved. Some of these bugs are listed below:

Win message displayed temporarily on page load/refresh and then disappeared after less than a second.
*Not Currently Resolved, but currently it is not affecting the app functionality.

When there was only one letter left to guess, a wrong or right answer would add to the win counter. 
**This has been fixed.


                                                      Features to Add:

Difficulty Modes (Easy, Medium, and Hard):
The words that are randomly generated are not specified in length. Sometimes the words are 3 letters long, sometimes they are 7, sometimes they are 15. The guess count is fixed for all of them. This means I will have as many guesses for a small word a lot of people know as I would with a medium or long word nobody has heard of. This creates an imbalance in the consistency of the game’s challenge.

Scaling Guess Count: 
Along with the difficulty inconsistency for length and complexity of each word, some words use a lot of vowels, and some do not. This means that even the smaller words could be very tricky and some of the longer words could be more realistic for the average person to solve. On top of difficulty modes, I would also need to consider having more guesses available for words that are longer and/or words that use less vowels and are harder to guess. I would need to choose whether to include that in the difficulty modes or not as well.

Hints for Words:
With guess counts and word length adjustment options, it would be worth considering adding hints. Balancing it based on difficulty of words and lengths of words would be worth considering as well. On an easier mode, less hints would be required than a larger word, but I would be filtering those with difficulty options as well. 
The hint mechanic that I would be adding would be to select and add a random letter that is correct so that a risk-free guess can me made. This would need to be taken into consideration with the other features as well. One or two hints would be the most that I would want to give for any of the difficulties.


                                            Steps I took to get the functionality working:

1.	The first thing I did was create the React App and set up a basic UI, nothing fancy, purely simplistic. I will want to do small tests in my files such as JS and CSS and made sure they were properly named and linked so I would not run into these issues after adding larger pieces of code.

2.	Next, I found an API with an API key to fetch a random word onto the page so I can acquire the data itself and then figure out what to do with it. I didn't need to hide the word, I just needed to make sure I can type out the word being displayed and make sure win and lose conditions work, then worry about masking the answer later.

3. After successfully getting the API to work, I noted out the code and focused on making the letter "A" appear on screen with the click of a button labelled "A". I then proceeded to do this with the letter "B" and then had all 26 letters of the alphabetic included and test clicked all letters to make sure the alphabet was fully utilised.

4. After that, I made it so that the letters clicked either matched the word that was fetched via the API or nothing would happen, once they matched the API, they then appeared on screen in place of the letter in the underlines that were blank. The underlines were spaced out and represented a letter, so if there were 6 underlines, it was a six letter word. This changed with each load of a new word as there was a large variety of words.

5. Once I got the matching system working, I added a guess counter with a value of 6 and scripted to once it reached 0, create a lose scenario message that disallowed any further button clicks for a correct guess. In this lose message, the correct word answer would be displayed.

6. After this, I added a non-required feature that was necessary for debugging that would let me toggle the answer before, during and even after I've won or lost that displayed the word that was needed to guess so I could regularly check for bugs with each change made from this point onwards as the code was starting to pile up. Once I had this this added, I could test both win and lose conditions without changing any of the mechanics to make it easier to debug. Each button was disabled after a click, whether correct or not so no incorrect letters could mistakenly be repeatedly clicked. The same rule applied for the correct guesses too as this would likely create some unusual bugs. 

7. With the win and lose conditions and buttons working and an easy cheat button so I could test code without restrictions, I decided to then add a "Reset" button which was later changed to "New Game" which would reset the word the buttons, similar to re-loading the page. Once I added a win counter and a random background colour scheme, this button would not affect those, so I could refresh and keep the counter of my wins. It is important to note as well that the win counter is unaffected by losses so if if someone won 2 games, lost 10, no matter what order it happened in, it would display the 2 wins and only the 2 wins.

8. Some last minute touches I have added include a full reset button, that will refresh the entire page and change everything including the win count, I have decided to avoid having the background affected on the click of this button as it would not be necessary. So it's identical to the New Game button except this one will also reset the win count. The game in this state is fully functional, but could definitely use some gameplay balances as it is currently very hard to win and each word length is inconsistent. 

Trivia:

> This fetched API is believed to have 178,000 words to choose from
In this API, there are certain words with shrimp in it:

"shrimp","shrimped","shrimper","shrimpers","shrimpier","shrimpiest","shrimping","shrimplike","shrimps","shrimpy"

Shrimpier has showed up once when testing by pure coincidence.

> As this is an extremely large database of words, there is a very small chance certain dirty words or swear words will appear, but if it happens, don't say I didn't warn you!


