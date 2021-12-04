import { Produit } from './Produit';
import { ImageModel } from "./ImageModel";
import { DetailFacture } from './DetailFacture';

export class Facture {
    idFacture: number;



    dateFacture: Date;
    montantFacture:number;
    detailFacture?:DetailFacture;
    idclient?:number;


    
}