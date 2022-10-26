import {consultProduct, deleteProduct, dismissProduct, input, listExpiredProducts, registerProduct, replenishProduct} from "./functions_main"

function main(){
    let option: string = '';

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
                    `
        );
        option = input("Opção: ");
        console.clear()

        switch (option) {
            case "1":
                registerProduct()
                break
            case "2":
                consultProduct()
                break
            case "3":
                deleteProduct()
                break
            case "4":
                replenishProduct()
                break;
            case "5":
                dismissProduct()
                break;
            case "6":
                listExpiredProducts();
                break;
        }

        input("Process carried out. Type <enter>");

    } while (option != "0");
        console.log(`
                Process finished.
                  GOODBYE!! ;)
                    `);

} main()