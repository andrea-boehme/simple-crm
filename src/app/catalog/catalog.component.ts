import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Catalog } from 'src/models/catalog.interface';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnChanges {

  numberInBasket = 0;
  @Input() product!: Catalog;
  @Input() edit!: boolean;
  @Input() productPosition!: number;
  @Input() numberProduct!: number;
  @Output() numberChange = new EventEmitter<[number, number]>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.numberInBasket = this.numberProduct ? this.numberProduct : 0;
  }

  removeNumber() {
    if(this.numberInBasket <= 0) return;
    this.numberInBasket--;
    this.numberChange.emit([this.productPosition, -1]);
  }

  addNumber() {
    this.numberInBasket++;
    this.numberChange.emit([this.productPosition, 1]);
  }

}


