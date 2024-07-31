import { Component } from '@angular/core';
import { ProdactService } from '../services/prodact.service';
import { Router } from '@angular/router';
import { CounterService } from '../services/counter.service';
import { CartService } from '../services/cart.service';
// import jsonFile from '../../assets/products-list.json'//from
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  // allData:any = jsonFile;                    //from json file

  //how use interface
  prodacts!: any[];
  counter: number = 0;
  cart !: any[];
  qun :number = 0;
  //to call all services
  constructor(private prodactsService: ProdactService,
    private router: Router,
    private counterService: CounterService,
    private cartService: CartService) { }

  ngOnInit() {
    //get data from api
    this.prodactsService.getProdacts().subscribe((res: any) => this.prodacts = res.products)
    //to Connect with service counter
    this.counterService.getCounter().subscribe((res) => this.counter = res)
    //to Connect with service cart
    this.cartService.getCounter().subscribe((res) => this.cart = res)


}

  //to hold data whene i click it
  add(prodact: any) {
    //check if this prodact first one
    if (this.cart.length == 0) {
      //add new key and value
      prodact['qun'] = 1
      this.cart.push(prodact)

      //if this prodact already exists
    } else {
      if (!(prodact.qun == prodact.stock)) {

      }

      //find this prodact
      const addSameProdact = this.cart.find((obj) => obj.id == prodact.id)
      //if true
      if (addSameProdact) {
        //add one to qun key
        addSameProdact.qun = addSameProdact.qun + 1
      } else {
        //if the prodact is not exists push it in array
        this.cart.push(prodact)
        prodact['qun'] = 1
      }
    }
    this.cartService.setCounter(this.cart)
    //to add quns to counter in navbar
    if (!(prodact.qun == prodact.stock)) {
    this.qun = this.qun + 1;
    this.counterService.setCounter(this.qun)
    console.log(this.qun)
    }
  }


  redirectToDetails(id:any){
    this.router.navigate(['prodact-detalis',id])
  }


}
