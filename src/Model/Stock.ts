import { Produit } from './Produit';

export class Stock {
  idStock?: bigint;
  qte?: number;
  qteMin: number;
  libelleStock: string;
  produitList?: Produit[];

  constructor(qteMin, libelleStock, idStock?) {
    this.qteMin = qteMin;
    this.libelleStock = libelleStock;
    this.idStock = idStock;
  }
}
