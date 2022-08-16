import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { deleteDoc, doc } from '@firebase/firestore';
import { Product } from 'src/models/product.class';
import { DialogDeleteUserComponent } from '../dialog-delete-user/dialog-delete-user.component';

@Component({
  selector: 'app-dialog-delete-product',
  templateUrl: './dialog-delete-product.component.html',
  styleUrls: ['./dialog-delete-product.component.scss']
})
export class DialogDeleteProductComponent implements OnInit {

  product! : Product;
  productId: string | undefined;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogDeleteUserComponent>, private firestore : Firestore) { }

  ngOnInit(): void {

  }

  async deleteProduct(){
    this.loading = true;
    await deleteDoc(doc(this.firestore, 'products', this.productId));
    this.loading = false;
    window.location.href = '/product';
  }

}
