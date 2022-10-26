import { Product } from "./Product";
import { PerishableProduct } from "./PerishableProduct";
export class Inventory{
    private _product: Array <Product> = []

    get product(): Array <Product>{
        return this._product;
    }

    insert(product: Product): void{
        if(this.consultById(product.id) == -1 && this.consultByName(product.description) == -1){
            this._product.push(product);
        }
    }

    searchProduct(id: number): Product{
        let product !: Product
        const i = this.consultById(id);
        if (i != -1){
            return this._product[i];
        };
        return product;
    }

    consultById(id: number) {
        const positionID = this.product.findIndex((product) => product.id == id);
        return positionID;
    }

    consultByName(name: string): number{
        const positionName = this.product.findIndex((product) => product.description == name);
        return positionName;
    }

    delete(id: number): void{
        let position: number = this.consultById(id);
        if(position != -1) this._product.splice(position, 1);
    }

    spareInventory(id:number, qtt: number): void {
        let index = this.consultById(id);
        if(index != -1){
            this._product[index].spare(qtt);
        }
    }

    dismissInventory(id:number, qtt: number): void{
        let index = this.consultById(id);
        if(index != -1){
            this._product[index].dismiss(qtt);
        }
    }

    listExpiredProducts(): void{

        for (let ExpiredProducts of this._product) {
            if(ExpiredProducts instanceof PerishableProduct){
                if(!ExpiredProducts.validateProduct()){
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