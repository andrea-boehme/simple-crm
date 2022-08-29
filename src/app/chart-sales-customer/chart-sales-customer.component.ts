import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Order } from 'src/models/order.class';


@Component({
  selector: 'app-chart-sales-customer',
  templateUrl: './chart-sales-customer.component.html',
  styleUrls: ['./chart-sales-customer.component.scss']
})
export class ChartSalesCustomerComponent implements OnInit {

  order = new Order();
  customerData = [];
  customerDataGroup = [];
  
  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.firestore
      .collection('orders')
      .valueChanges({ idField: 'customId' })
      .subscribe((changes: any) => {
        changes.forEach(element => {
          if (element.customer.lastName) {
            const index = this.customerData.findIndex((item) => {
              return item.name === element.customer.lastName;
            });
            this.checkDoublet(index, element.customer.lastName, element.total);
          }
        });
        this.customerDataGroup = this.customerData;
        //console.log(this.customerDataGroup);
      });
  }

  citysToJSON(customer, value) {
    return {
      "name": customer,
      "value": value
    }
  }

  checkDoublet(i, customer, value) {
    if (i !== -1) {
      this.customerData[i].value += value;
    } else {
      this.customerData.push(this.citysToJSON(customer, value));
    }
  }
}


