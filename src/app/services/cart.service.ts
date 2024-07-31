import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private counter = new BehaviorSubject([]);

  constructor() { }
  getCounter(){
    return this.counter.asObservable();
  }
  setCounter(newValue: any){
    this.counter.next(newValue)
  }
}
