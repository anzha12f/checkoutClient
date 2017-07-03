import { Component, OnInit } from '@angular/core';
import { PrdService } from '../prd.service'
import { Product } from '../product'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-prd',
  templateUrl: './add-prd.component.html',
  styleUrls: ['./add-prd.component.css']
})
export class AddPrdComponent implements OnInit {
		
  constructor(
  	 public prdService:PrdService,
     public route:ActivatedRoute,
     public router:Router	
  ) { }

   ngOnInit() {
  }
  model = new Product();
  addProduct(){
    this.prdService.addProduct(this.model)
        .subscribe(()=> this.goBack())
  }
   goBack(){
    this.router.navigate(['/home'])
  }
}