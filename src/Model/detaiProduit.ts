import { CategorieProduit } from "./CategorieProduit";

export class detailProduit{


    idDetailProduit:bigint;
    dateCreation:Date;
    dateDerniereModification:Date;
    prixUnitaire:number;
    categorieProduit:CategorieProduit;
  

    constructor(CategorieProduit){
       this.categorieProduit=CategorieProduit
    }
  
    }