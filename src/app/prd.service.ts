
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;
@Injectable()
export class PrdService {

  constructor( private http:Http) { }
  getProducts(){
    return this.http.get("http://localhost:3000/products")
        .map(res => res.json());
  }
   addProduct(info){
    return this.http.post("http://localhost:3000/products",info)
        .map(res => res.json());
  }
  getProduct(id){
    return this.http.get("http://localhost:3000/products/"+id)
        .map(res => res.json());
  }
  deleteProduct(id){
    return this.http.delete("http://localhost:3000/products/"+id)
        .map(res => res.json());
  }
  updateProduct(id, info){
    return this.http.put("http://localhost:3000/products/"+id,info)
        .map(res => res.json());
  }
}