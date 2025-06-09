import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";

class QuestionService {

    async getQuestions() {
        const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean')
        console.log(response);
        const questionData = await response.json()
        console.log(questionData);
        const questions = questionData.results.map(questionData => new Question(questionData))
        console.log('blarg', questions);
        AppState.questions = questions


    }
}



export const questionService = new QuestionService