import { Catalog, catalog } from "./catalog.interface";
import { User } from "./user.class";


export class Order {
    number: number;
    quantity: any = [];
    amount: any = [];
    status!: string;
    date!: number;
    formattedDate!: string;
    year!: number;
    month!: number;
    monthName!: string;
    customer!: User;
    total: any = [];

    constructor(obj?: any) {
        this.number = obj ? obj.number : '';
        this.quantity = obj ? obj.quantity : [];
        this.amount = obj ? obj.amount : [];
        this.status = obj ? obj.status : '';
        this.date = obj ? obj.date : new Date();
        this.formattedDate = obj ? obj.formattedDate : '';
        this.year = obj ? obj.year : '';
        this.month = obj ? obj.month : '';
        this.monthName = obj ? obj.monthName : '';
        this.customer = obj ? obj.customer : new User();
        this.total = obj ? obj.total : 0;
    }

    toJson() {
        return {
            number: this.number,
            quantity: this.quantity,
            amount: this.amount,
            status: this.status,
            date: this.date,
            formattedDate: this.formattedDate,
            year: this.year,
            month: this.month,
            monthName: this.monthName,
            customer: this.customer,
            total: this.total
        }
    }


}