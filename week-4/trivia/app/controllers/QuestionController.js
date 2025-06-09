import { AppState } from "../AppState.js";
import { questionService } from "../services/QuestionService.js";




export class QuestionController {
    constructor() {
        console.log("Question controller works");
        this.getQuestions()
        AppState.on('questions', this.drawQuestions)
    }

    async getQuestions() {
        await questionService.getQuestions()
    }

    drawQuestions() {
        const questions = AppState.questions
        let questionsContent = ''
        questions.forEach(question => questionsContent += question.CardTemplate)
        let questionsElm = document.getElementById('questions')
        questionsElm.innerHTML = questionsContent
    }

    correctAnswer() {
        console.log("button pressed");

    }

}