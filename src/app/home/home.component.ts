import { Component, OnInit } from '@angular/core';

import { PrdService } from '../prd.service'
import { Product } from '../product'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public prdService:PrdService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  products:Product;
  getProducts(){
    this.prdService.getProducts()
        .subscribe(products=>{
          this.products = products;
        })
  }
  deleteProduct(id){
    this.prdService.deleteProduct(id)
      .subscribe(()=>{
        this.getProducts();
      });
  }
}