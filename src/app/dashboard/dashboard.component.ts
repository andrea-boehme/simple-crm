import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Order } from 'src/models/order.class';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  lableChart = ['Samsung Galaxy X', 'Apple iPhone IE', 'Samsung Galaxy Note', 'LG Neon XL'];
  dataChart = [0,0,0,0];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false, // Diese Option muss hinzugefügt werden, damit sich das Diagramm an die Größe des 
    // Canvas anpasst und nicht umgekehrt! 
    
  };
  pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: this.lableChart,
    datasets: [ {
      data: this.dataChart
    } ]
  };
  pieChartType: ChartType = 'pie';
  


  allOrders: any = [];

  constructor(
    private firestore: AngularFirestore
    ) { }

  ngOnInit(): void {
    this.firestore
    .collection('orders')
    .valueChanges({idField: 'orderIdName'}) 
    .subscribe((changes: any) => {
      this.allOrders = changes.filter((order: Order) => {
        return !(order.status == 'cancled');
      });
      console.log(this.allOrders);
      //this.calcStatistics();
    });
  }
}
