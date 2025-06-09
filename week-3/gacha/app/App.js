import { SnacksController } from './controllers/SnacksController.js';

class App {

  // ExampleController = new ExampleController() // ☑️ you can remove this - example only
  SnackController = new SnacksController()

}

window['app'] = new App()


