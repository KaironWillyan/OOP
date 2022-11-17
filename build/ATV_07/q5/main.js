"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_main_1 = require("./functions_main");
function main() {
    let option = '';
    do {
        console.clear();
        console.log(` 
            --------WELCOME TO THE KW COMMERCE--------
                 TYPE AN OPTION:

                    1 - Register Product
                    2 - Consult 
                    3 - Delete Product 
                    4 - Replenish Product
                    5 - Dismiss Produto
                    6 - List Expired Products 

                    0 - Sair 
                    `);
        option = functions_main_1.input("Opção: ");
        console.clear();
        switch (option) {
            case "1":
                functions_main_1.registerProduct();
                break;
            case "2":
                functions_main_1.consultProduct();
                break;
            case "3":
                functions_main_1.deleteProduct();
                break;
            case "4":
                functions_main_1.replenishProduct();
                break;
            case "5":
                functions_main_1.dismissProduct();
                break;
            case "6":
                functions_main_1.listExpiredProducts();
                break;
        }
        functions_main_1.input("Process carried out. Type <enter>");
    } while (option != "0");
    console.log(`
                Process finished.
                  GOODBYE!! ;)
                    `);
}
main();
