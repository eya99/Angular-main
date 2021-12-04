import { CartItem } from './../../../../Model/CartItem ';
import {OrderItem  } from './../../../../Model/order-item';

import { Facture } from './../../../../Model/Facture';
import { DetailFacture } from '../../../../Model/DetailFacture';

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/ServiceCart/cart.service';
import { FactureService } from 'src/app/ServiceCart/facture.service';
import { HttpResponse } from '@angular/common/http';
import { detailProduit } from 'src/Model/detaiProduit';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  totalPrice: number = 0;
  facturedetail= new DetailFacture();

  totalQuantity: number = 0;
  idfac :number;

  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];


  cartItems: CartItem[] = [];
 
  constructor(private cartService: CartService,private factureService: FactureService,private router: Router) { }

  ngOnInit() {
    this.listCartDetails();
  }


  listCartDetails() {

    // get a handle to the cart items
    this.cartItems = this.cartService.cartItems;

    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
    // compute cart total price and quantity
      this.cartService.computeCartTotals();
  }

  incrementQuantity(theCartItem: CartItem){
    this.cartService.addToCart(theCartItem);
  }
  decrementQuantity(theCartItem: CartItem){
    this.cartService.decrementQuantity(theCartItem);
  }
  
  removeCartItem(theCartItem: CartItem){
    this.cartService.removeCartItem(theCartItem);
  }
//checkout 
checkoutCart(){
  this.ValidationFacture();




}

ValidationFacture(){

  let facture= new Facture();
  
    facture.dateFacture = new Date();
    facture.montantFacture=this.totalPrice;


 console.log(facture) 
 this.factureService.validatefacture(facture).subscribe((res: HttpResponse<any>) => {
   console.log(res['idFacture'])

//facturedetail.orderItems=orderItems

  this.facturedetail.prixTotal = this.totalPrice;
    const cartItems = this.cartService.cartItems;
    let DetailFacture = cartItems
    console.log(cartItems)
    this.facturedetail.idfacture=res['idFacture'];
    for(let result in cartItems){
    console.log(this.facturedetail.prixTotal) 
    let total = this.cartItems[result].quantity * this.cartItems[result].unitPrice
  
 /*   this.factureService.validatefactureDetails(facturedetail).subscribe((res: HttpResponse<any>) => {
      console.log(res);
    });*/
    this.factureService.validatefacturedetail(this.facturedetail.idfacture,total,this.cartItems[result].quantity,this.cartItems[result].id).subscribe(
      (res: HttpResponse<any>) => {
        console.log(res)
        this.resetCart();
        this.router.navigateByUrl(`/home/factures`);
        
         // reset checkout form
       this.resetCart();
      });}},
    )
  }


  resetCart() {
    // reset cart data
    this.cartService.cartItems = [];
    this.cartService.totalPrice.next(0);
    this.cartService.totalQuantity.next(0);

    // reset the form

    // navigate back to the products page
   
  }

ValidationFactureDetails(){

  let facturedetail= new DetailFacture();
  facturedetail.prixTotal = this.totalPrice;
  const cartItems = this.cartService.cartItems;
  let orderItems: OrderItem[] = cartItems.map(tempCartItem => new OrderItem(tempCartItem));
    facturedetail.idfacture=this.idfac;



 
 
}
}