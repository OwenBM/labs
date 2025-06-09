export class Snack {

    constructor(data) {
        this.name = data.name;
        this.price = data.price;
        this.imgUrl = data.imgUrl
        console.log('Snack made', this.name);

    }


    get SnackCard() {
        return `
      <div class="col-3">
          <div class="card">
            <div class="d-flex justify-content-between">
              <div class="">${this.name}</div>
              <div>${this.price}</div>
            </div>
            <img src="${this.imgUrl}" alt="${this.name}">
            <div>1 trillion calores</div>
            <button class="btn btn-success">BUY</button>
          </div>
        </div>
    `
    }


}

// get VendingFoodStuff() {

//     return `
//     <div class="container">
//         <div class="row">
//         <div class="col-3">
//             <div class="card">
//             <div class="d-flex justify-content-between">
//                 <div class="">Taco</div>
//                 <div>2 dolar</div>
//             </div>
//             <img src="taco.jfif" alt="3 tacos">
//             <div>1 trillion calores</div>
//             <button class="btn btn-success">BUY</button>
//             </div>
//         </div>
//         </div>
//     </div>
//     `
// }