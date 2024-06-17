import Game from "../game.js"

class Country extends Game {
    #COUNTRY_INDEX = 0;

    constructor(questionType, answerType, region, num) {
        fetch('../geo.json')
        .then((response) => response.json())
        .then((data) => { 
            const countryList = data[this.#COUNTRY_INDEX].countries.filter((elem) => {
                if (region !== "all") {
                    return elem.continent == region;
                } else {
                    return true;
                }
            });
    
            let questionList = this.#filterCountryArray(countryList, questionType);
            let answerList = this.#filterCountryArray(countryList, answerType);

            // Code for reducing the amount of questions if that option is picked
            if (num > 0 && num < questionList.length) {
                let newQuestion = [];
                let newAnswer = [];
                for (let i = 0; i < num; i++) {
                    let index = Math.floor(Math.random() * (questionList.length - 1));
                    newQuestion.push(questionList[index]);
                    newAnswer.push(answerList[index]);
                    if (index == 0) {
                        questionList = questionList.slice(1);
                        answerList = answerList.slice(1);
                    } else if (index == questionList.length) {
                        questionList = questionList.slice(0, index);
                        answerList = answerList.slice(0, index);
                    } else {
                        questionList = questionList.slice(0, index).concat(questionList.slice(index + 1));
                        answerList = answerList.slice(0, index).concat(answerList.slice(index + 1))
                    }
                }

                questionList = newQuestion;
                answerList = newAnswer;
            }

            super(questionList, answerList);
        });
    }

    #filterCountryArray(countryList, dataType) {
        switch (dataType) {
            case "country":
                return countryList.map((elem) => elem.name);
            case "flag":
                // TODO
            case "capital":
                return countryList.map((elem) => elem.capital);
            case "location":
                // TODO
            case "neighbor":
                // TODO
            case "cities":
                // TODO
            case "government":
                // TODO
            case "religion":
                // TODO
            case "random":
                // TODO
        }

        return [];
    }
}

export default Country;