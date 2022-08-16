export class Order {
    number: number;
    date: number;
    customer: string;
    product: string;
    amount: number;
    status: string;

    constructor(obj?: any) {
        this.number = obj ? obj.number: '';
        this.date = obj ? obj.date: '';
        this.customer = obj ? obj.customer: '';
        this.product = obj ? obj.product: '';
        this.amount = obj ? obj.amount: '';
        this.status = obj ? obj.status: '';
        
    }

    public toJson() {
        return {
            number: this.number,
            date: this.date,
            customer: this.customer,
            product: this.product,
            amount: this.amount,
            status: this.status
        }
    }
}
