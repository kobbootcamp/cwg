# cwg

https://drive.google.com/file/d/1IC4OjL3NiKMWfGsuj-OwEDzA0ZVGDwXd/view

This is a node.js Word Guess command-line game using constructor functions.
The game uses the inquirer npm package.  A constructor for letters dispalys an underlying character, or a blank, depending on 
whether the letter was guessed or not.  It also contains a function to update a 'guessed' variable, when a correct guess is made.  A constructor for the word depends on the letter constructor, and contains an array of new letter objects representing the underlying word.  The main game logic is contained in index.js, which randomly selects a word for each game. 