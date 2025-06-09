import { QuestionController } from "../controllers/QuestionController.js"


export class Question {
    constructor(data) {
        this.category = data.category
        this.difficulty = data.difficulty
        this.inquiry = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswer = data.incorrect_answers
    }

    get CardTemplate() {
        return `
            <div class="col-5">
              <div class="card card-format m-5">
                <div class="d-flex bg-warning text-dark rounded">
                  <div class="justify-content-start me-auto">${this.category}</div>
                  <div class="justify-content-end">Difficulty: ${this.difficulty}</div>
                </div>
                <div class="text-center m-3">${this.inquiry}</div>
                <div class="d-flex justify-content-evenly mb-2 flex-wrap">
                  <button class="btn btn-secondary card-button-format" onclick="QuestionController.correctAnswer()">${this.correctAnswer}</button>
                  <button class="btn btn-secondary card-button-format">${this.incorrectAnswer}</button>
                </div>
              </div>
            </div>
        `
    }
}