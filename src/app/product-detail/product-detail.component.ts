import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/models/product.class';
import { DialogDeleteProductComponent } from '../dialog-delete-product/dialog-delete-product.component';
import { DialogEditProductComponent } from '../dialog-edit-product/dialog-edit-product.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId : any = '';
  product : Product = new Product();

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.productId = paramMap.get('id');
      console.log(this.productId);
      this.getProduct();
    });
  }

  getProduct() {
    if (this.productId) {
      this.firestore.collection('products').doc(this.productId).valueChanges().subscribe((product: any) =>{
        this.product = new Product(product);
      });
    }
  }

  editProductMenu() {
    const dialog = this.dialog.open(DialogEditProductComponent);
    dialog.componentInstance.product = new Product(this.product.toJson());
    dialog.componentInstance.productId = this.productId;
  }

  deleteProduct(){
    const dialog = this.dialog.open(DialogDeleteProductComponent);
    dialog.componentInstance.product = new Product(this.product.toJson());
    dialog.componentInstance.productId = this.productId;
  }

}


