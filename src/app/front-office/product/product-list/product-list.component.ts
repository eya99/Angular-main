import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/Model/CartItem ';
import { CategorieProduit } from 'src/Model/CategorieProduit';
import { Produit } from 'src/Model/Produit';
import { ProduitSService } from 'src/ServicesProduct/product-s.service';
import { CartService} from 'src/app/ServiceCart/cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private ps:ProduitSService, private cartService: CartService,private router:Router) { }
  ListProduct:Produit[];
   k:number=0;


  getAllproduits(){
    this.ps.getAllproduct().subscribe((res) => {
      this.ListProduct = res;
      console.log(this.ListProduct);
    });
  }

  getProductBylibelle(libelle:string){
    this.ps.getProductBylibelle(libelle).subscribe(res=> this.ListProduct=res);
    this.k=this.k+1;
    this.router.navigate(['/home/product']);

  }

  getproduitsByprix(price:number){
    this.ps.getProductByprixbetween(price).subscribe(res=> this.ListProduct=res);
  }

  getproduitsBycat(categorie:CategorieProduit){
    console.log(categorie)
    this.ps.getProductByCategory(categorie).subscribe(res=> this.ListProduct=res);
    console.log(this.ListProduct)
  }


  ngOnInit(): void {
if(this.k==0){
this.getAllproduits();
}

  }
  
  addToCart(theProduct: Produit){
    const theCartItem = new CartItem(theProduct);
    console.log(theCartItem);
    this.cartService.addToCart(theCartItem);
    console.log("ok");
  }

}
