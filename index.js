var inquirer = require("inquirer");
var word = require("./word.js");

var Library = ["trumpet", "violin", "guitar", "piano", "bassoon", "harp", "trombone"];
var randomPick = Math.floor(Math.random() * Library.length);
var gameOn = true;
var guessedLetters = [];
var game = new word(Library[randomPick])
game.loadWordArr();
game.showWord();


function play() {

    if (gameOn) {

        inquirer.prompt([
            {
                type: "recursive",
                message: "Guess a letter:",
                name: "thisGuess"
            }

            //then responds with a function
        ]).then(function (response) {

            //set var guess to be the lowercase version of the user's letter guess
            var guess = response.thisGuess.toLowerCase()

            //var to hold the correct letters and blanks
            var temp = ""

            //if letter has not been guessed, push guessed letters into this array
            if (!guessedLetters.includes(guess)) {
                guessedLetters.push(guess)
            };

            //set gameOn to false, so that game stops unless turned back to true
            gameOn = false;

            //cycle through each letter of the secret word
            for (i = 0; i < game.myWord.length; i++) {

                //if the letter has not yet been guessed, then...
                if (game.wordArr.includes(guess) === false) {

                    //check the guess
                    game.wordArr[i].checkGuess(guess)


                    //if the letter has been guessed, set the gameOn to true (continue game)
                    if (!game.wordArr[i].letterGuessed) {
                        gameOn = true;
                    }

                    //add the correct letter or blank to the temp variable
                    temp += game.wordArr[i].isCorrect();
                }
            }


            //display the temp variable (correct letters and blanks)
            console.log("\n" + temp + "\n");

            //display the letters that the user has already guessed
            console.log("Letters guessed: " + guessedLetters);

            if (gameOn) {
                play();
            }
            else {
                console.log("YOU WIN!!")
            }

        }

        )

    }

}




play();