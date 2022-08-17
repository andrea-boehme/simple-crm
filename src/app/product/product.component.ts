import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { catalog, Catalog } from 'src/models/catalog.interface';
import { Product } from 'src/models/product.class';
import { DialogAddProductComponent } from '../dialog-add-product/dialog-add-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product = new Product();
  allProducts : any = [];
  products: Catalog[] = catalog; 

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore.collection('products').valueChanges({idField: 'customId'}).subscribe((changes : any) => {
      console.log(changes);
      this.allProducts = changes;
    });
  }

  openDialog() {
    this.dialog.open(DialogAddProductComponent);
  }


}
