"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerishableProduct = void 0;
const Product_1 = require("./Product");
class PerishableProduct extends Product_1.Product {
    constructor(id, description, qttProduct, unitaryValue, validateDate) {
        super(id, description, qttProduct, unitaryValue);
        this.validateDate = validateDate;
    }
    validateProduct() {
        return this.validateDate.getDate() > Date.now();
    }
    spare(qtt) {
        if (this.validateProduct()) {
            super.spare(qtt);
        }
    }
    dismiss(qtt) {
        if (this.validateProduct()) {
            super.dismiss(qtt);
        }
    }
}
exports.PerishableProduct = PerishableProduct;
