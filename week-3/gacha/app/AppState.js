import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Snack } from './models/SnackModel.js'

class ObservableAppState extends EventEmitter {

  Snacks = [
    new Snack({ name: 'taco', imgUrl: "taco.jfif", price: 2 }),
    new Snack({ name: 'burger', imgUrl: "burger.jfif", price: 3 }),
    new Snack({ name: 'hotdog', imgUrl: "glizzy.jfif", price: 5 }),
    new Snack({ name: 'slurm', imgUrl: "slurm.png", price: 4 }),

  ]

  money = 0

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}



export const AppState = createObservableProxy(new ObservableAppState())