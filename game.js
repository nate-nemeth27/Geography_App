class Game {
    #questionList;
    #answerList;
    #currIndex;
    #totalQuestions
    #lastIndex

    constructor(questions, answers) {
        this.#questionList = questions;
        this.#answerList = answers;
        this.#totalQuestions = this.#questionList.length;
        this.#lastIndex = -1;
    }

    isOver() {
        return this.#questionList.length == 0;
    }

    // Only changes the index to move to the next question - use getter function for getting that question
    // isOver should be called before calling this function
    // Will not have the same question twice in a row unless there's one question left
    nextQuestion() {
        if (this.#questionList.length > 1) {
            let temp = this.#currIndex;
            while (this.#currIndex != lastIndex) {
                this.#currIndex = Math.floor(Math.random() * (this.#questionList.length - 1));
            }
            this.#lastIndex = temp;
        }
        
    }

    // Returns a boolean saying if the guess was correct or not
    // Later on I may want to make this an array if I ever want to make you need to guess more than one thing
    submitGuess(guess) {
        for (let i = 0; i < this.#answerList[this.#currIndex].length; i++) {
            // Add || this.#matchWithNonLetters(guess) if you want to add foregiveness for not including non-letter or space characters in the guess
            if (guess === this.#answerList[this.#currIndex][i]) {
                console.log("Before: ", this.#questionList.length)
                this.#questionList.splice(this.#currIndex, 1);
                this.#answerList.splice(this.#currIndex, 1);
                console.log("After: ", this.#questionList.length)
                return true;
            }
        }

        return false;
    }

    // #matchWithNonLetters(guess) {
    //     let changedGuesses = []
    //     while (!/[^a-zA-Z\s]/.test(guess)) {

    //     }
    // }

    // #replaceAt(string, index, replacement) {
    //     return string.substring(0, index) + replacement + string.substring(index + replacement.length);
    // }

    get getTotalQuestions() {
        return this.#totalQuestions;
    }

    get getNumAnsweredQuestions() {
        return this.getTotalQuestions - this.#questionList.length;
    }

    get getCurrQuestion() {
        return this.#questionList[this.#currIndex];
    }

    get getCurrAnswer() {
        return this.#answerList[this.#currIndex];
    }
}

export default Game;