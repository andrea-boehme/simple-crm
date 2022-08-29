import { Component, OnInit, ViewChild } from '@angular/core';
import  DatalabelsPlugin  from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, baseColors } from 'ng2-charts';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Order } from 'src/models/order.class';
import { catalog, Catalog } from 'src/models/catalog.interface';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  allOrders: any = [];
  allUsers: any = [];
  products: Catalog[] = catalog; 
  dataChartPie = [0,0,0,0];
  dataChartDoughnut = [0,0,0,0];
  dataChartBar = [0,0,0,0];
  customerCities = [];

  user = new User();
  locationData = [];
  locationDataGrouped = [];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;



  // Line
    lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false
  };
  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        fill: true,
        tension: 0.5,
        borderColor: 'grey',
        backgroundColor: 'rgb(255,0,0,0.3)'
      }
    ]
  };
  lineChartLegend = false;
  lineChartType: ChartType = 'line';
  lineChartPlugins = [];



  // Bar
  barChartLegend = false;
  barChartPlugins = [];
  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Anna', 'Klaus', 'Ben', 'Igor' ],
    datasets: [
      { data: [ 65, 59, 80, 81 ]}
    ]
  };
  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false
    
  };
  barChartType: ChartType = 'bar';
  

// Pie
pieChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  maintainAspectRatio: false, // Diese Option muss hinzugefügt werden, damit sich das Diagramm an die Größe des 
  // Canvas anpasst und nicht umgekehrt! 
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
    }
  }
};
pieChartData: ChartData<'pie', number[], string | string[]> = {
  labels: ['apples', 'bananas', 'grapes', 'oranges'],
  datasets: [ {
    data: this.dataChartPie,
    
  } ]
};
pieChartType: ChartType = 'pie';
pieChartPlugins = [];



// doughnut
doughnutChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  maintainAspectRatio: false, // Diese Option muss hinzugefügt werden, damit sich das Diagramm an die Größe des 
  // Canvas anpasst und nicht umgekehrt! 
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
    }
  }
};
doughnutChartData: ChartData<'doughnut', number[], string | string[]> = {
  labels: this.locationData,
  datasets: [ {
    data: this.locationDataGrouped ,
    
  } ]
};
doughnutChartType: ChartType = 'doughnut';
doughnutChartPlugins = [];




  constructor(
    private firestore: AngularFirestore
    ) { }

  ngOnInit(): void {
    // get orders information
    this.firestore
    .collection('orders')
    .valueChanges({idField: 'orderIdName'}) 
    .subscribe((changes: any) => {
      this.allOrders = changes.filter((order: Order) => {
        return (this.allOrders);
      });
      
      this.calcOrders();
    });
    
  }

  resetStatistics() {
    this.dataChartPie = [0, 0, 0, 0];
  }

  calcOrders() {
    this.resetStatistics();
    this.allOrders
    .forEach((order: Order) => {
      this.addChartOrderNumbers(order);
    });
  }

  


  addChartOrderNumbers(order: Order) {
    for (let i = 0; i < order.quantity.length; i++) {
      this.dataChartPie[i] += order.quantity[i];
    }
    this.pieChartData = {
      labels: ['apples', 'bananas', 'grapes', 'oranges'],
      datasets: [ {
        data: this.dataChartPie
      } ]
    };

    for (let i = 0; i < order.quantity.length; i++) {
      this.dataChartBar[i] += order.quantity[i];
    }
    this.barChartData = {
      labels: ['Anna', 'Klaus', 'Ben', 'Igor' ],
      datasets: [ {
        data: this.dataChartBar
      } ]
    };

       //total instead of quantity
  }

  
       
}
  

