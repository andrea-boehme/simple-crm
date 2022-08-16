import { Component, OnInit } from '@angular/core';
import { DialogAddOrderComponent } from '../dialog-add-order/dialog-add-order.component';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/models/order.class';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  order = new Order();
  allOrders : any = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore.collection('orders').valueChanges({idField: 'customId'}).subscribe((changes : any) => {
      console.log(changes);
      this.allOrders = changes;
    });
  }

  openDialog() {
    this.dialog.open(DialogAddOrderComponent);
  }


}
