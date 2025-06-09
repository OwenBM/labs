import { QuestionController } from "./controllers/QuestionController.js"


class App {

  QuestionController = new QuestionController()

}

window['app'] = new App()


