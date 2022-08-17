import { Catalog, catalog } from "./catalog.interface";
import { User } from "./user.class";


export class Order {
    number: number;
    quantity: any = [];
    status!: string;
    date!: number;
    customer!: User;
    total = 0;

    constructor(obj?: any) {
        this.number = obj ? obj.number : '';
        this.quantity = obj ? obj.quantity : [];
        this.status = obj ? obj.status : 'active';
        this.date = obj ? obj.date : new Date();
        this.customer = obj ? obj.customer : new User();
        this.total = obj ? obj.total : 0;
    }

    toJson() {
        return {
            number: this.number,
            quantity: this.quantity,
            status: this.status,
            date: this.date,
            customer: this.customer,
            total: this.total
        }
    }


}