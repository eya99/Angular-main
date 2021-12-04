import { Produit } from './Produit';
import { ImageModel } from "./ImageModel";
import { OrderItem } from './order-item';
import { Facture } from './Facture';

export class DetailFacture {
    idDetailFacture: number;
    prixTotal:number;
    idfacture: number;
    qte:number;
    produit:Produit
  orderItems: OrderItem[];


   // qte: number;

   
}