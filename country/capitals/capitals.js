import Country from "../country.js"

class Capital extends Country {
    #isRandom;
    #qOrA;

    // Need to change this if ever want to guess something other than the country name when working on capitals
    constructor(region, order, num) {
        let questionType = "country";
        let answerType = "capital";
        if (order == "country") {
            questionType = "capital";
            answerType = "country";
        } else if (order == "random") {
            this.#isRandom = true;
        }

        super(questionType, answerType, region, num);
    }

    nextQuestion() {
        super.nextQuestion();

        if (this.#isRandom) {
            qOrA = Math.floor(Math.random() * 1);
        }
    }

    get getCurrQuestion() {
        if (this.#isRandom && this.#qOrA == 1) {
            return super.getCurrAnswer();
        }

        return super.getCurrQuestion();
    }

    get getCurrAnswer() {
        if (this.#isRandom && this.#qOrA == 0) {
            return super.getCurrQuestion();
        }

        return super.getCurrAnswer();
    }
}

export default Capital;