import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NativeDateAdapter } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { catalog, Catalog } from 'src/models/catalog.interface';
import { Order } from 'src/models/order.class';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-order',
  templateUrl: './dialog-add-order.component.html',
  styleUrls: ['./dialog-add-order.component.scss']
})
export class DialogAddOrderComponent implements OnInit {

  order = new Order();
  loading = false;
  date!: Date;
  products: Catalog[] = catalog; 
  quantity: number[] = [];
  amount: number[] = [];
  month: number;
  allUsers: User[] = [];
  selectedUser: User = this.allUsers[0];
  total: number = 0;


  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddOrderComponent>) { }

  ngOnInit(): void {
    for(let i = 0; i < catalog.length; i++){
      this.quantity.push(0);
      this.amount.push(0);
    }
    
    this.firestore
    .collection('users')
    .valueChanges({idField: 'customIdName'})
    .subscribe((changes: any) => {
      this.allUsers = changes; 
    });
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
      total += this.quantity[i]*this.products[i].price;
    }
    return total;
  }

  saveOrder(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
    this.order.date = this.date.getTime();
    let format = new Date(this.order.date);
    this.order.month = format.getUTCMonth() + 1;
    this.order.monthName = monthNames[format.getMonth()];
    this.order.year = format.getFullYear();
    //console.log(this.order.monthName);
    this.order.formattedDate = format.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric"
      });


    //console.log(this.order.date);
    this.loading = true;

    let newOrder = {
      number: this.order.number,
      quantity: this.quantity,
      amount: this.amount,
      status: '',
      date: this.order.date,
      formattedDate: this.order.formattedDate,
      year: this.order.year,
      month: this.order.month,
      monthName: this.order.monthName,
      customer: this.selectedUser,
      total: this.total
    };
    

    this.firestore.collection("orders").add(newOrder).then((result : any) => {
      this.loading = false;
         // console.log(result);
      this.dialogRef.close();
    });

    
  }
}
