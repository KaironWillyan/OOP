"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
const PerishableProduct_1 = require("./PerishableProduct");
class Inventory {
    constructor() {
        this._product = [];
    }
    get product() {
        return this._product;
    }
    insert(product) {
        if (this.consultById(product.id) == -1 && this.consultByName(product.description) == -1) {
            this._product.push(product);
        }
    }
    searchProduct(id) {
        let product;
        const i = this.consultById(id);
        if (i != -1) {
            return this._product[i];
        }
        ;
        return product;
    }
    consultById(id) {
        const positionID = this.product.findIndex((product) => product.id == id);
        return positionID;
    }
    consultByName(name) {
        const positionName = this.product.findIndex((product) => product.description == name);
        return positionName;
    }
    delete(id) {
        let position = this.consultById(id);
        if (position != -1)
            this._product.splice(position, 1);
    }
    spareInventory(id, qtt) {
        let index = this.consultById(id);
        if (index != -1) {
            this._product[index].spare(qtt);
        }
    }
    dismissInventory(id, qtt) {
        let index = this.consultById(id);
        if (index != -1) {
            this._product[index].dismiss(qtt);
        }
    }
    listExpiredProducts() {
        for (let ExpiredProducts of this._product) {
            if (ExpiredProducts instanceof PerishableProduct_1.PerishableProduct) {
                if (!ExpiredProducts.validateProduct()) {
                    console.log(`
                            ###---EXPIRED PRODUCTS---###
                        VALIDATE: ${ExpiredProducts.validateDate}
                        NAME:     ${ExpiredProducts.description}
                        ID:       ${ExpiredProducts.id}
                    `);
                }
            }
        }
    }
}
exports.Inventory = Inventory;
