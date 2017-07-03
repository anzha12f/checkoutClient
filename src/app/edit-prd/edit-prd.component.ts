import { Component, OnInit } from '@angular/core';

import { PrdService } from '../prd.service'
import { Product } from '../product'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-prd',
  templateUrl: './edit-prd.component.html',
  styleUrls: ['./edit-prd.component.css']
})
export class EditPrdComponent implements OnInit {

  constructor(
     public prdService:PrdService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  model = new Product();
  id = this.route.snapshot.params['id'];
  
  getProduct(){
    this.prdService.getProduct(this.id)
        .subscribe(product=>{
          this.model = product;
        })
  }

  updateProduct(){
    this.prdService.updateProduct(this.id,this.model)
        .subscribe(()=> this.goBack())
  }

   goBack(){
    this.router.navigate(['/home'])
  }
}