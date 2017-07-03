import { Component, OnInit } from '@angular/core';

import { PrdService } from '../prd.service'
import { Product } from '../product'
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-show',
  templateUrl: './show-prd.component.html',
  styleUrls: ['./show-prd.component.css']
})
export class ShowPrdComponent implements OnInit {

  constructor(
     public prdService:PrdService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  product:Product;
  getProduct(){
    var id = this.route.snapshot.params['id'];
    this.prdService.getProduct(id)
        .subscribe(product=>{
          this.product = product;
        })
  }
  goBack(){
    this.router.navigate(['/home'])
  }
}

  