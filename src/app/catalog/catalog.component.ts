import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Catalog } from 'src/models/catalog.interface';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnChanges {

  numberInBasket = 0;
  amountInBasket = 0;
  @Input() product!: Catalog;
  @Input() edit!: boolean;
  @Input() productPosition!: number;
  @Input() numberProduct!: number;
  @Input() amountProduct!: number;
  @Output() numberChange = new EventEmitter<[number, number]>();
  @Output() amountChange = new EventEmitter<[number, number]>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.numberInBasket = this.numberProduct ? this.numberProduct : 0;
    this.amountInBasket = this.amountProduct ? this.amountProduct : 0;
  }

  removeQuantity() {
    if(this.numberInBasket <= 0) return;
    this.numberInBasket--;
    this.amountInBasket = this.numberInBasket * this.product.price;
    this.numberChange.emit([this.productPosition, -1]);
    this.amountChange.emit([this.productPosition,-this.product.price]);
  }

  addQuantity() {
    this.numberInBasket++;
    this.amountInBasket = this.numberInBasket * this.product.price;
    this.numberChange.emit([this.productPosition, 1]);
    this.amountChange.emit([this.productPosition,this.product.price]);
  }

}


