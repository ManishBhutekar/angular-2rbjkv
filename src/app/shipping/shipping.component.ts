import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;
    shippingCosts3;

  constructor(private cartService:CartService) { 
    this.shippingCosts=this.cartService.getShippingPrices();


  
    this.cartService.getShippingPrices()
    .subscribe((shipType:any)=>{
      this.shippingCosts3=shipType;
    })

        console.log(typeof(this.shippingCosts));
        console.log(this.shippingCosts);
        console.log(typeof(this.shippingCosts3));
        console.log(this.shippingCosts3);
  }

  ngOnInit() {
  }

}