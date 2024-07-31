import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdactService {

  constructor(private http:HttpClient) { }

  getProdacts(){
    return this.http.get(`https://dummyjson.com/products`)
  }


  getProdactDetails(id:any){
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
}
