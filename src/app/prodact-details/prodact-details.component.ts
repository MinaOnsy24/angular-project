import { Component } from '@angular/core';
import { ProdactService } from '../services/prodact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodact-details',
  templateUrl: './prodact-details.component.html',
  styleUrls: ['./prodact-details.component.css']
})
export class ProdactDetailsComponent {

  ProdactDetails: any = {};

  constructor(
  private prodactsService: ProdactService,
  private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    //to know what prodact
    const id = this.activatedRoute.snapshot.params['id']
    //get data from api
    this.prodactsService.getProdactDetails(id).subscribe((res: any) => this.ProdactDetails = res)

    console.log(this.ProdactDetails)

    // const id = this.activatedRoute.snapshot.params['id']
    // this.prodactsService.getProdactDetails(id).subscribe((res: any) => this.ProdactDetails = res)
    // console.log(this.prodacts)
  }

}
