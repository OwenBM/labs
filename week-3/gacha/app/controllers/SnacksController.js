import { AppState } from "../AppState.js";

export class SnacksController {

    constructor() {
        console.log('snacks controller loaded');
        this.drawSnack()
    }


    drawSnack() {
        console.log('✏️🌮');
        let snackListElm = document.getElementById("snacks-list")
        let snackCards = ''
        AppState.Snacks.forEach(snack => snackCards += snack.SnackCard)
        snackListElm.innerHTML = snackCards

    }

    addQuarter() {
        console.log('🪙')
        AppState.money += .25
        console.log(AppState.money)
        let moneyWhatever = document.getElementById("money")
        let moneyCount = AppState.money
        moneyCount.for(moneyWhatever)
    }
}