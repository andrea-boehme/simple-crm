import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { orderBy } from 'cypress/types/lodash';
import { Order } from 'src/models/order.class';
import { DialogDeleteOrderComponent } from '../dialog-delete-order/dialog-delete-order.component';
import { DialogEditOrderComponent } from '../dialog-edit-order/dialog-edit-order.component';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  orderId : any = '';
  order : Order = new Order();
  formattedDate: Date;

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.orderId = paramMap.get('id');
      console.log(this.orderId);
      this.getOrder();
    });
  }

  getOrder() {
    if (this.orderId) {
      this.firestore.collection('orders').doc(this.orderId).valueChanges().subscribe((order: any) =>{
        this.order = new Order(order);
      });
    }
    
    this.convertDate(this.order.date);
  }

  editOrderMenu() {
    const dialog = this.dialog.open(DialogEditOrderComponent);
    dialog.componentInstance.order = new Order(this.order.toJson());
    dialog.componentInstance.orderId = this.orderId;
  }

  convertDate(date) {
    this.formattedDate = new Date(parseInt(date)) ;
    return ('0' + this.formattedDate.getDate()).slice(-2) + '-'
         + ('0' + (this.formattedDate.getMonth()+1)).slice(-2) + '-'
         + this.formattedDate.getFullYear();
  }

  deleteOrder(){
    const dialog = this.dialog.open(DialogDeleteOrderComponent);
    dialog.componentInstance.order = new Order(this.order.toJson());
    dialog.componentInstance.orderId = this.orderId;
  }

}
