const iceCream = [
    { name: "Cookie Dough", price: 1.25, quantity: 0, type: "scoop" },
    { name: "Vanilla", price: 1, quantity: 0, type: "scoop" },
    { name: "Strawberry", price: 1.25, quantity: 0, type: "scoop" },
    { name: "Sprinkles", price: 0.25, quantity: 0, type: "topping" },
    { name: "Chocolate Chips", price: 0.25, quantity: 0, type: "topping" },
    { name: "Cookie Chunks", price: 0.5, quantity: 0, type: "topping" },
]

function orderVanilla() {
    iceCream[1].quantity += 1
    console.log("Ordering vanilla", iceCream[1].quantity);
}
function orderItem(itemName) {
    iceCream[1]
}