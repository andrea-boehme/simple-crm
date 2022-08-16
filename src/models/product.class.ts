export class Product {
    name: string;
    img: string;
    price: number;
    amount: number;

    constructor(obj?: any) {
        this.name = obj ? obj.name: '';
        this.img = obj ? obj.img: '';
        this.price = obj ? obj.price: '';
        this.amount = obj ? obj.amount: '';
    }

    public toJson() {
        return {
            name: this.name,
            img: this.img,
            price: this.price,
            amount: this.amount
        }
    }   
}

