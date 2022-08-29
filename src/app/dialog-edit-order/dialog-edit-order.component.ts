import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Catalog, catalog } from 'src/models/catalog.interface';
import { Order } from 'src/models/order.class';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-order',
  templateUrl: './dialog-edit-order.component.html',
  styleUrls: ['./dialog-edit-order.component.scss']
})
export class DialogEditOrderComponent implements OnInit {

  //order = new Order();
  //user = new User();
  //date!: Date;

  //month: number;
  //allUsers: User[] = [];
  //selectedUser: User = this.allUsers[0];

  
  //activOrder!: Order;
  order!: Order;
  //user!: User;
  orderId!: string;
  //selectedUser!: User;
  products: Catalog[] = catalog;
  quantity: number[] = [];
  amount: number[] = [];
  total: number = 0;
  loading = false;


  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogEditOrderComponent>) { }

  ngOnInit(): void {
    for (let i = 0; i < catalog.length; i++) {
      this.quantity.push(this.order.quantity[i]);
      this.amount.push(this.order.amount[i]);
    }

    this.total = this.calculateTotalPrice();
  }

  changeNumber(change: [number, number]) {
    this.quantity[change[0]] += change[1];
    this.total = this.calculateTotalPrice();
  }

  changeAmount(change: [number, number]) {
    this.amount[change[0]] += change[1]; //update with price
  }

  calculateTotalPrice() {
    let total = 0;
    for (let i = 0; i < this.quantity.length; i++) {
      total += this.quantity[i] * this.products[i].price;
    }
    return total;
  }

  saveOrderChange() {
    this.loading = true;
    let newOrder = {
      quantity: this.quantity,
      amount: this.amount,
      total: this.total
    };
    console.log(newOrder);
  
    this.loading = true;
    this.firestore
    .collection('orders')
    .doc(this.orderId)
    .update(newOrder) 
    .then(() => {
      this.dialogRef.close();
      this.loading = false;      
    });
    
  }

}



/*

  ngOnInit(): void {
    for (let i = 0; i < catalog.length; i++) {
      this.quantity.push(this.activOrder.quantity[i]);
      this.amount.push(this.activOrder.amount[i]);
    }

    this.total = this.calculateTotalPrice();
  }

  changeNumber(change: [number, number]) {
    this.quantity[change[0]] += change[1];
    this.total = this.calculateTotalPrice();
  }

  changeAmount(change: [number, number]) {
    //let value = 
    this.amount[change[0]] += change[1]; //update with price
  }

  calculateTotalPrice() {
    let total = 0;
    for (let i = 0; i < this.quantity.length; i++) {
      total += this.quantity[i] * this.products[i].price;
    }
    return total;
  }

  saveOrderChange() {

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    this.activOrder.date = this.date.getTime();
    let format = new Date(this.activOrder.date);
    this.activOrder.month = format.getUTCMonth() + 1;
    this.activOrder.monthName = monthNames[format.getMonth()];
    this.activOrder.year = format.getFullYear();
    //console.log(this.order.monthName);
    this.activOrder.formattedDate = format.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });


    this.loading = true;
    
    let newOrder = {
      number: this.activOrder.number,
      quantity: this.quantity,
      amount: this.amount,
      status: '',
      date: this.activOrder.date,
      formattedDate: this.activOrder.formattedDate,
      year: this.activOrder.year,
      month: this.activOrder.month,
      monthName: this.activOrder.monthName,
      customer: this.activOrder.customer,
      total: this.total
    };

    console.log(newOrder);


    this.loading = true;
    this.firestore
      .collection('orders')
      .doc(this.orderId)
      .update(newOrder)
      .then(() => {
        this.dialogRef.close();
        this.loading = false;
      });

  }

}

*/
