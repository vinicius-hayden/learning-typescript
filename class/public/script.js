"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes R${this.amount} for ${this.details}`;
    }
}
const inv1 = new Invoice('Mario', 'Work on the mario website', 250);
const inv2 = new Invoice('Luigi', 'Work on the luigi website', 300);
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
invoices.forEach(element => {
    console.log(element);
});
console.log("Hello, World! With TypeScript!");
