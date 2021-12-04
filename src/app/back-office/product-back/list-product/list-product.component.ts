import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/Model/Produit';
import { ProduitSService } from 'src/ServicesProduct/product-s.service';



@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  ListProduct:Produit[]

  addProductStatus = false;
  updateProductStatus = false;
  productToUpdate: Produit;
  productId: number;

  constructor(private ps:ProduitSService) { }
  getAllproduits(){
    this.ps.getAllproduct().subscribe((res) => {
      this.ListProduct = res;
      console.log(this.ListProduct);
    });
  }

  getProductList(p:Produit){
    this.getAllproduits();
  }
  salut(p:Produit){
    console.log(p);
    this.productToUpdate = p;
    
    console.log(this.productToUpdate);
  }
/*   toogleAddStock() {
    this.addstockStatus = !this.addstockStatus;
    this.updateStockStatus = false;
  } */


  ngOnInit(): void {
this.getAllproduits();
  }

  delete() {
    this.ps.delete(this.productId).subscribe((res) => {
      this.getAllproduits();
    });
  }

  addProductToList(product: Produit) {
    this.ListProduct.push(product);
    this.getAllproduits();
  }
  toogleAddProduct() {
    this.addProductStatus = !this.addProductStatus;
    this.updateProductStatus = false;
  }

  toogleStatus() {
    this.addProductStatus = false;
  }
  CloseUpdate() {
    this.updateProductStatus = false;
  }
  getProductID(id: number) {
    this.productId = id;
  }
  toogleUpdateProduct(product: Produit) {
    console.log("Produit  selectionné"+product)
    this.productToUpdate = product;
    console.log("Produit  selectionné"+this.productToUpdate)
    this.updateProductStatus = true;
    this.addProductStatus = false;
  }




}
