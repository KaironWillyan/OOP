"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listExpiredProducts = exports.dismissProduct = exports.replenishProduct = exports.deleteProduct = exports.consultProduct = exports.registerProduct = exports.input = void 0;
const Product_1 = require("./Product");
const PerishableProduct_1 = require("./PerishableProduct");
const Inventory_1 = require("./Inventory");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
exports.input = prompt_sync_1.default();
let inventory = new Inventory_1.Inventory();
function registerProduct() {
    let option = Number(exports.input(`Registering new product:
        Product type: 
        1 - Commom
        2 - Perishable
        ----------------
        
    `));
    console.log('Separate the items with ;');
    const description = exports.input('Description: ');
    const [id, qttProduct, unitaryValue] = exports.input('Product ID; Quantity Product; Unitary Value').split(';').map(Number);
    if (option == 1) {
        let product = new Product_1.Product(id, description, qttProduct, unitaryValue);
        inventory.insert(product);
    }
    else {
        const date = exports.input('Data de validade: yyyy-mm-dd');
        ;
        const validateDate = new Date(date);
        let product = new PerishableProduct_1.PerishableProduct(id, description, qttProduct, unitaryValue, validateDate);
        inventory.insert(product);
    }
    console.log(`Products Registered with Sucess!`);
}
exports.registerProduct = registerProduct;
function consultProduct() {
    console.log(`
        Search Product: 
    `);
    const id = Number(exports.input("Product ID: "));
    const product = inventory.searchProduct(id);
    const i = inventory.consultById(id);
    if (i != -1) {
        console.log(`Products found Sucessfull!`);
        console.log(product);
    }
}
exports.consultProduct = consultProduct;
function deleteProduct() {
    console.log(`
        Delete Product...
    `);
    const id = Number(exports.input('Product ID: '));
    const product = inventory.searchProduct(id);
    inventory.delete(product.id);
    console.log(`Products delete with sucess!`);
}
exports.deleteProduct = deleteProduct;
function replenishProduct() {
    console.log(`
        Replenish Product...
    `);
    const id = Number(exports.input('Product ID: '));
    const qttProduct = Number(exports.input('Quantity Products: '));
    inventory.spareInventory(id, qttProduct);
    console.log(`Products Replanish Sucessfull!`);
}
exports.replenishProduct = replenishProduct;
function dismissProduct() {
    console.log(`
        Dismiss Product...
    `);
    const id = Number(exports.input('Product ID: '));
    const qttProduct = Number(exports.input('Quantity Products: '));
    inventory.dismissInventory(id, qttProduct);
    console.log(`Products Dismiss Sucessfull!`);
}
exports.dismissProduct = dismissProduct;
function listExpiredProducts() {
    inventory.listExpiredProducts();
}
exports.listExpiredProducts = listExpiredProducts;
