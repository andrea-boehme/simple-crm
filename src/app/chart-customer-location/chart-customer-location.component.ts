import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-chart-customer-location',
  templateUrl: './chart-customer-location.component.html',
  styleUrls: ['./chart-customer-location.component.scss']
})
export class ChartCustomerLocationComponent implements OnInit {

  user = new User();
  locations = [];
  customerLocations = [];


  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({ idField: 'customId' })
      .subscribe((changes: any) => {
        changes.forEach((element: { city: any; }) => {
          if (element.city) {
            const index = this.locations.findIndex((item) => {
              return item.name === element.city;
            });
            this.checkExistence(index, element.city);
          }
        });
        this.customerLocations = this.locations;
        console.log(this.customerLocations);
        //this.calcPercentage();
      });

  }

  calcPercentage() {
    let percentage = 0;
    let sum = 0;
    for (let i = 0; this.customerLocations.length; i++) {
      sum += this.customerLocations[i].value;
    }
    console.log(sum);
    for (let i = 0; this.customerLocations.length; i++) {
      percentage = (this.customerLocations[i].value % sum) * 100;
      this.customerLocations[i].push(percentage);
    }
    console.log(this.customerLocations);
  }

  locationsToJson(city: any) {
    return {
      "name": city,
      "value": 1
    }
  }

  checkExistence(i: number, city: any) {
    if (i !== -1) {
      this.locations[i].value++;
    } else {
      this.locations.push(this.locationsToJson(city));
    }
  }

}



