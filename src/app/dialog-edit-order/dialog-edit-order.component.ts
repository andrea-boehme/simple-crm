import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Order } from 'src/models/order.class';

@Component({
  selector: 'app-dialog-edit-order',
  templateUrl: './dialog-edit-order.component.html',
  styleUrls: ['./dialog-edit-order.component.scss']
})
export class DialogEditOrderComponent implements OnInit {

  order : Order = new Order();
  loading = false;
  //date: any = Date;
  orderId: string | undefined;
  date: any = '';

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogEditOrderComponent>) { }

  ngOnInit(): void {
    if(this.order.date !== null){
      let fdate = new Date(this.order.date);
      this.date = fdate;
    }
  }

  saveOrder() {
    this.loading = true;
    if (this.date !== null) {this.order.date = this.date.getTime();}
    else this.order.date = null;
    if (this.orderId){
      this.firestore.collection('orders').doc(this.orderId).update(this.order.toJson())
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      });
    } else {
      // trow error
    }
  }

}
