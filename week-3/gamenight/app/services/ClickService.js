import { AppState } from "../AppState.js";

class ClickService {

    addClickCount() {
        console.log('service click');
        AppState.clickCount++
        console.log(AppState.clickCount);

    }



}
export const clickService = new ClickService()