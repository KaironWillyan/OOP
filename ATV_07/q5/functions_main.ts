import { Product } from "./Product";
import { PerishableProduct } from "./PerishableProduct";
import { Inventory } from "./Inventory";
import prompt from 'prompt-sync'
export let input = prompt();

let inventory: Inventory = new Inventory();

export function registerProduct(){
    let option:number = Number(input(`Registering new product:
        Product type: 
        1 - Commom
        2 - Perishable
        ----------------
        
    `));

    console.log('Separate the items with ;');
    const description = input('Description: ');
    const [id, qttProduct, unitaryValue] = input('Product ID; Quantity Product; Unitary Value').split(';').map(Number);

    if(option == 1){
        let product: Product = new Product(id, description, qttProduct, unitaryValue);
        inventory.insert(product)
    }else{
        const date = input('Data de validade: yyyy-mm-dd');;
        const validateDate: Date = new Date(date);
        let product: Product = new PerishableProduct(id, description, qttProduct, unitaryValue, validateDate);
        inventory.insert(product)
    }
    console.log(`Products Registered with Sucess!`);
    
}

export function consultProduct(){
    console.log(`
        Search Product: 
    `);
    
    const id = Number(input("Product ID: "))
    const product: Product = inventory.searchProduct(id);
    const i = inventory.consultById(id)
    if(i != -1){
        console.log(`Products found Sucessfull!`);
        console.log(product);
    }
}

export function deleteProduct(){
    console.log(`
        Delete Product...
    `);

    const id = Number(input('Product ID: '));
    const product: Product = inventory.searchProduct(id);
    inventory.delete(product.id)
    console.log(`Products delete with sucess!`);

}

export function replenishProduct(){
    console.log(`
        Replenish Product...
    `);
    
    const id = Number(input('Product ID: '));
    const qttProduct = Number(input('Quantity Products: '));
    inventory.spareInventory(id, qttProduct);
    console.log(`Products Replanish Sucessfull!`);
    
}

export function dismissProduct(){
    console.log(`
        Dismiss Product...
    `);
    
    const id = Number(input('Product ID: '));
    const qttProduct = Number(input('Quantity Products: '));
    inventory.dismissInventory(id, qttProduct);
    console.log(`Products Dismiss Sucessfull!`);
}

export function listExpiredProducts(){
    inventory.listExpiredProducts();
}
