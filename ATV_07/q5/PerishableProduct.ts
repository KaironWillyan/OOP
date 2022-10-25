class PerishableProduct extends Product{
    validateDate: Date;

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