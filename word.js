var letter = require("./letter.js")

// var wordArr = [];
function Word(myWord) {
    this.myWord = myWord;
    this.wordArr = [];
    this.showWord = function () {
    }
    this.loadWordArr = function () {
        var i;
        for (i = 0; i < this.myWord.length; i++) {
            var newLetter = new letter(myWord.charAt(i));
            this.wordArr.push(newLetter)
        }
        var temp = ""
        for (i = 0; i < this.wordArr.length; i++) {
            temp += this.wordArr[i].isCorrect();
        }
        console.log(temp)
    }
}


module.exports = Word;