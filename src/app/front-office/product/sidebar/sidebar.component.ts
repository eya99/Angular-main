import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LabelType, Options } from 'ng5-slider';
import { CategorieProduit } from 'src/Model/CategorieProduit';
import { Produit } from 'src/Model/Produit';
import { ProduitSService } from 'src/ServicesProduct/product-s.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private ps:ProduitSService) { }


  @Output() libelleSearched = new EventEmitter<string>();
  
  @Output() prixselected = new EventEmitter<any>();
  @Output() salut = new EventEmitter<CategorieProduit>();
  prix:any;
  categorie:any
  libelle:string
  minValue:any
  maxValue:any
  getListProduitByPrix:Produit[];
  getListProduitByCategory:Produit[];


  getProductBylibelle(libelle:string){

    this.libelleSearched.emit(this.libelle)
}
  getproduitsByprix(price:any){
    this.prixselected.emit(this.prix)
  }
  getMax(){
    this.ps.getMax().subscribe(res=> this.maxValue=res.prixUnitaire)
  }
  getMin(){

    this.ps.getMin().subscribe(res=>this.minValue=res.prixUnitaire)
  }

  getproduitsBycat(categorie:CategorieProduit){
    console.log(categorie)
    this.salut.emit(categorie);
  }

  ngOnInit(): void {
    console.log(this.prix)

    this.getMin()
    console.log(this.minValue)
    this.getMax()
    console.log(this.maxValue)
    this.prix=this.minValue
  }

value:number;

}
