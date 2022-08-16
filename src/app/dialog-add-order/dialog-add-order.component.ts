import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NativeDateAdapter } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Order } from 'src/models/order.class';

@Component({
  selector: 'app-dialog-add-order',
  templateUrl: './dialog-add-order.component.html',
  styleUrls: ['./dialog-add-order.component.scss']
})
export class DialogAddOrderComponent implements OnInit {

  order = new Order();
  loading = false;
  date!: Date;
  amount!: Number;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddOrderComponent>) { }

  ngOnInit(): void {
  }

  saveOrder(){
    this.order.date = this.date.getTime();
    this.order.amount = Number(this.order.amount);
    this.order.amount.toFixed(2);
    console.log(this.order);
    this.loading = true;
    this.firestore.collection("orders").add(this.order.toJson()).then((result : any) => {
      this.loading = false;
          console.log(result);
      this.dialogRef.close();
    });
  }
}
