import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter: number = 0;
  prodacts !: any[];
  qun: number = 0;
  totalPrice: number = 0;

  constructor(private counterService: CounterService,
    private cartService: CartService) {
  }

  ngOnInit() {
    this.counterService.getCounter().subscribe((res) => this.qun = res)
    this.cartService.getCounter().subscribe((res) => this.prodacts = res)
    this.changAnyValue()
  }

  //to sub total price (((single prosabalty )))
  changAnyValue() {
    this.totalPrice = 0
    this.qun = 0
    this.prodacts.forEach((prodact) => {
      prodact.totalPrice = prodact.qun * prodact.price
      this.totalPrice += prodact.totalPrice
      this.qun += prodact.qun
    })
    console.log(this.qun)
    this.counterService.setCounter(this.qun)
    this.cartService.setCounter(this.prodacts)
  }

  //to increment qun of any prodact
  up(prodact: any) {
    if (!(prodact.qun == prodact.stock)) {

      const index = this.prodacts.findIndex((obj) => {
        return obj.id == prodact.id
      })
      this.prodacts[index].qun++
      console.log(this.prodacts)
      this.changAnyValue()

    }else{}

  }

  remove(prodact: any) {
    const index = this.prodacts.findIndex((obj) => {
      return obj.id == prodact.id
    })
    this.prodacts.splice(index, 1)
    this.changAnyValue()
  }
  //to decrement qun of any prodact
  down(prodact: any) {
    const index = this.prodacts.findIndex((obj) => {
      return obj.id == prodact.id
    })
    this.prodacts[index].qun--
    console.log(this.prodacts)
    this.changAnyValue()
    // if qun 0 remove this prodact in array
    if (prodact.qun == 0) {
      const index = this.prodacts.findIndex((obj) => {
        return obj.id == prodact.id
      })

      this.prodacts.splice(index, 1)
      this.changAnyValue()
    }
  }











}
