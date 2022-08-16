import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/models/product.class';

@Component({
  selector: 'app-dialog-add-product',
  templateUrl: './dialog-add-product.component.html',
  styleUrls: ['./dialog-add-product.component.scss']
})
export class DialogAddProductComponent implements OnInit {

  product = new Product();
  date: any = Date;
  loading = false;
  names: string[] = ['grapes', 'apples', 'oranges', 'bananas'];
  images = [];
  
  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddProductComponent>) { }

  ngOnInit(): void {
  }

  saveProduct(){
    this.getProductName();
    console.log(this.product);
    this.loading = true;
    this.firestore.collection("products").add(this.product.toJson()).then((result : any) => {
      this.loading = false;
          console.log(result);
      this.dialogRef.close();
    });
  }

  getProductName() {
    if (this.product.img == 'grapes') {
      this.product.name == 'grapes';
    }
    if (this.product.img == 'apples') {
      this.product.name == 'grapes';
    }
    if (this.product.img == 'oranges') {
      this.product.name == 'oranges';
    }
    if (this.product.img == 'bananas') {
      this.product.name == 'bananas';
    }
  }


}
