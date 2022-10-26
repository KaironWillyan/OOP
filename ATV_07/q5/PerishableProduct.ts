import { Product } from "./Product";
export class PerishableProduct extends Product{
    validateDate: Date;
    constructor(id: number, description: string, qttProduct: number, unitaryValue: number, validateDate: Date){
        super(id, description, qttProduct, unitaryValue);
        this.validateDate = validateDate;
    }

    validateProduct(): boolean{
        return this.validateDate.getDate() > Date.now();
    }

    spare(qtt: number): void {
        if(this.validateProduct()){
            super.spare(qtt);
        }
    }

    dismiss(qtt: number): void {
        if(this.validateProduct()){
            super.dismiss(qtt);
        }
    }
}