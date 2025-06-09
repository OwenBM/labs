import { ExampleController } from './controllers/ExampleController.js';
import { ClickController } from './controllers/ClickController.js';

class App {

  ExampleController = new ExampleController() // ☑️ you can remove this - example only

}

window['app'] = new App()


// let count = 0

function clickCount() {
  count++
  console.log(count);

}