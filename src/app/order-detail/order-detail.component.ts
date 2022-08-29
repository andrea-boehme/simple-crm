import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { catalog, Catalog } from 'src/models/catalog.interface';
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
  
  products: Catalog[] = catalog; 
  //activOrder: Order = new Order();
  numBasket = [0,0,0,0,0,0,0,0,0];
  amountBasket =[0,0,0,0,0,0,0,0,0];
  date: string;
  formattedDate: any;
 

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.orderId = paramMap.get('id');
      //console.log(this.orderId);
      this.getOrder();
    });
  }

  getOrder() {
    //if (this.orderId) {
      this.firestore.collection('orders').doc(this.orderId).valueChanges().subscribe((order: any) =>{
        this.order = new Order(order);
        //this.order = new Order(order);
        this.numBasket = this.order.quantity;
        this.amountBasket = this.order.amount;
      });
    //}
  }


  editOrderMenu() {
    const dialog = this.dialog.open(DialogEditOrderComponent, {
      autoFocus: false
  });
    dialog.componentInstance.order = new Order(this.order);
    dialog.componentInstance.orderId = this.orderId;
  }


  deleteOrder(){
    const dialog = this.dialog.open(DialogDeleteOrderComponent, {
      autoFocus: false
  });
    dialog.componentInstance.order = new Order(this.order);
    dialog.componentInstance.orderId = this.orderId;
  }

}


/*
  saveOrder() {
    this.firestore
    .collection('orders')
    .doc(this.orderId)
    .update(this.activOrder.toJson())
  }

  editOrderMenu() {
    const dialog = this.dialog.open(DialogEditOrderComponent, {
      autoFocus: false
  });
    dialog.componentInstance.order = new Order(this.activOrder);
    dialog.componentInstance.orderId = this.orderId;
  }


  deleteOrder(){
    const dialog = this.dialog.open(DialogDeleteOrderComponent, {
      autoFocus: false
  });
    dialog.componentInstance.order = new Order(this.activOrder);
    dialog.componentInstance.orderId = this.orderId;
  }
  */