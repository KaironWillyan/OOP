"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, description, qttProduct, unitaryValue) {
        this._id = id;
        this._description = description;
        this._qttProduct = qttProduct;
        this._unitaryValue = unitaryValue;
    }
    get id() {
        return this._id;
    }
    get description() {
        return this._description;
    }
    get qttProduct() {
        return this._qttProduct;
    }
    get unitaryValue() {
        return this._unitaryValue;
    }
    spare(qtt) {
        this._qttProduct += qtt;
    }
    dismiss(qtt) {
        this._qttProduct -= qtt;
    }
}
exports.Product = Product;
