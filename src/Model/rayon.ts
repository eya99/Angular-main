import { Produit } from 'src/Model/Produit';
export class Rayon {
  idRayon: bigint;
  code: string;
  libelle: string;
  produitList?: Produit[];

  constructor(code: string, libelle: string, idRayon?: bigint) {
    this.code = code;
    (this.libelle = libelle), (this.idRayon = idRayon);
  }
}
