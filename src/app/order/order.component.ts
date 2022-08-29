import { Component, Input, OnInit } from '@angular/core';
import { DialogAddOrderComponent } from '../dialog-add-order/dialog-add-order.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/models/order.class';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  order = new Order();
  allOrders: any = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore.collection('orders', ref => ref.orderBy('number')).valueChanges({ idField: 'customId' }).subscribe((changes: any) => {
      //console.log(changes);
      this.allOrders = changes;
      console.log(this.allOrders);
    });
    
    
  }
  openDialog() {
    this.dialog.open(DialogAddOrderComponent, {
      autoFocus: false
  });
  }



}
