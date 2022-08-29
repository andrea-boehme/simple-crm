import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-sales-growth',
  templateUrl: './chart-sales-growth.component.html',
  styleUrls: ['./chart-sales-growth.component.scss']
})
export class SalesGrowthComponent implements OnInit {

  locationData = [];
  locationDataGrouped: any[];
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection('orders', ref => ref.orderBy('month'))
      .valueChanges({ idField: 'customId' })
      .subscribe((changes: any) => {
        changes.forEach(element => {
          if (element.monthName && element.year == 2022) {
            const index = this.locationData.findIndex((item) => {
              return item.name === element.monthName;
            });
            this.checkDoublet(index, element.monthName, element.total);
          }
        });
        this.locationDataGrouped = this.locationData;
        //console.log(this.locationDataGrouped);
      });
  }

  monthsToJson(monthName, value) {
    return {
      "name": monthName,
      "value": value
    }
  }

  checkDoublet(i, monthName, value) {
    if (i !== -1) {
      this.locationData[i].value += value;
    } else {
      this.locationData.push(this.monthsToJson(monthName, value));
    }
  }

}
