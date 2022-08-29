import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { deleteDoc, doc } from '@firebase/firestore';
import { DialogDeleteUserComponent } from '../dialog-delete-user/dialog-delete-user.component';
import { Firestore } from '@angular/fire/firestore';
import { Order } from 'src/models/order.class';

@Component({
  selector: 'app-dialog-delete-order',
  templateUrl: './dialog-delete-order.component.html',
  styleUrls: ['./dialog-delete-order.component.scss']
})
export class DialogDeleteOrderComponent implements OnInit {

  order! : Order;
  orderId: string | undefined;
  loading = false;


  constructor(public dialogRef: MatDialogRef<DialogDeleteUserComponent>, private firestore : Firestore) { }

  ngOnInit(): void {

  }

  async deleteOrder(){
    this.loading = true;
    await deleteDoc(doc(this.firestore, 'orders', this.orderId));
    this.loading = false;
    window.location.href = '/order';
  }

}
