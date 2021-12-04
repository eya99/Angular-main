import { Produit } from './Produit';
import { ImageModel } from "./ImageModel";

export class CartItem {
    id: number;
    name: string;

    imageUrl?:ImageModel;
    unitPrice: number;

    quantity: number;

    constructor(product: Produit){
        this.id = product.idProduit;
        this.name = product.libelle;
        this.imageUrl = product.Image;
        this.unitPrice = product.prixUnitaire;
        this.quantity = 1;
    }
}