function Letter(wordLetter) {
    this.wordLetter = wordLetter;
    this.letterGuessed = false;
    this.blank = " _ ";
    this.isCorrect = function () {
        if (this.letterGuessed === true) {
            return this.wordLetter;
        } else {
            return this.blank;
        }
    };
    this.checkGuess = function (thisLetter) {
        if (thisLetter === this.wordLetter) {
            this.letterGuessed = true;
        }
        return this.isCorrect();
    }
}

module.exports = Letter;

