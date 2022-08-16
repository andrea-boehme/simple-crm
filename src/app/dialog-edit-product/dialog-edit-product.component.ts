import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/models/product.class';

@Component({
  selector: 'app-dialog-edit-product',
  templateUrl: './dialog-edit-product.component.html',
  styleUrls: ['./dialog-edit-product.component.scss']
})
export class DialogEditProductComponent implements OnInit {

  product : Product = new Product();
  loading = false;
  productId: string | undefined;
  images: string[] = ['grapes', 'apples', 'oranges', 'bananas'];

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogEditProductComponent>) { }

  ngOnInit(): void {
  }

  saveProduct() {
    this.loading = true;
    if (this.productId){
      this.firestore.collection('products').doc(this.productId).update(this.product.toJson())
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      });
    } else {
      // trow error
    }
  }

}
