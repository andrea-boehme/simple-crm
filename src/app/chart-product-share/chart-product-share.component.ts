import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Catalog, catalog } from 'src/models/catalog.interface';
import { Order } from 'src/models/order.class';

@Component({
  selector: 'app-chart-product-share',
  templateUrl: './chart-product-share.component.html',
  styleUrls: ['./chart-product-share.component.scss']
})
export class ChartProductShareComponent implements OnInit {

  order = new Order();
  products: Catalog[] = catalog;
  productName = [];
  productData = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  productDataFinal = [];
  productDataFinalGroup = [];

  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    for (let i = 0; i < this.products.length; i++) {
      this.productName.push(this.products[i].name);
      //console.log(this.productName);
    }
    this.firestore
      .collection('orders')
      .valueChanges({ idField: 'customId' })
      .subscribe((changes: any) => {
        changes.forEach(element => {
          if (element.amount) {
            for (let i = 0; i < element.amount.length; i++) {
              this.productData[i] += element.amount[i];
            }
            //console.log(this.productData);

          }
        });
      });

      this.firestore
      .collection('orders')
      .valueChanges({ idField: 'customId' })
      .subscribe((changes: any) => {
        changes.forEach(element => {
          if (element.amount) {
            for (let i = 0; i < this.productName.length; i++) {
              if (this.productName[i]) {
                const index = this.productDataFinal.findIndex((item) => {
                  return item.name === this.productName[i];
                });
                this.checkDoublet(index, this.productName[i], this.productData[i]);
              }
            }
          }
        });
        this.productDataFinalGroup = this.productDataFinal;
        console.log(this.productDataFinalGroup);
      });


  }

  productsToJson(product: any, value: any) {
    return {
      "name": product,
      "value": value
    }
  }

  checkDoublet(i: number, product: any, value: number) {
    if (i !== -1) {
      this.productDataFinal[i].value+= value;
    } else {
      this.productDataFinal.push(this.productsToJson(product, value));
    }
  }

}




/*


allOrders: any = [];
 products: Catalog[] = catalog;
 dataChartPie = [];
 labelChartPie = [];

 @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

 pieChartOptions: ChartConfiguration['options'] = {
   responsive: true,
   maintainAspectRatio: false,
   plugins: {
     legend: {
       display: true,
       position: 'bottom',
     }
   }
 };
 pieChartData: ChartData<'pie', number[], string | string[]> = {
   labels: this.labelChartPie,
   datasets: [{
     data: this.dataChartPie,
   }]
 };
 pieChartType: ChartType = 'pie';
 pieChartPlugins = [];



 ngOnInit(): void {
   this.firestore
     .collection('orders')
     .valueChanges({ idField: 'orderIdName' })
     .subscribe((changes: any) => {
       this.allOrders = changes.filter((order: Order) => {
         return (this.allOrders);
       });
       this.calcOrders();
     });
 }

 reset() {
   this.dataChartPie = [0,0,0,0];
 }

 calcOrders() {
   this.reset();
   this.allOrders
     .forEach((order: Order) => {
       this.addChartOrderValues(order);
     });
 }

 addChartOrderValues(order: Order) {
   for (let i = 0; i < order.amount.length; i++) {
     this.dataChartPie[i] += order.amount[i];
   }
   for (let i = 0; i < catalog.length; i++) {
     this.labelChartPie[i] = this.products[i].name;
   } 

   
   this.pieChartData = {
     labels: this.labelChartPie,
     datasets: [{
       data: this.dataChartPie
     }]
   };
 }

}

*/
