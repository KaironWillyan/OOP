export class Product {
    private _id: number;
    private _description: string;
    private _qttProduct: number;
    private _unitaryValue: number;

    constructor(id: number, description: string, qttProduct: number, unitaryValue: number){
        this._id = id;
        this._description = description;
        this._qttProduct = qttProduct;
        this._unitaryValue = unitaryValue;
    }

    get id(): number{
        return this._id;
    }

    get description(): string{
        return this._description;
    }

    get qttProduct():number{
        return this._qttProduct;
    } 

    get unitaryValue(): number{
        return this._unitaryValue;
    }

    spare(qtt: number): void{
        this._qttProduct += qtt;
    }

    dismiss(qtt: number): void{
        this._qttProduct -= qtt;
    }
}