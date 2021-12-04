import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from 'src/Model/Stock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private HS: HttpClient) {}
  private url = 'http://localhost:8089/SpringMVC/stock/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  deleteStock(id: bigint): Observable<bigint> {
    const url = this.url + 'remove-stock/' + id;
    return this.HS.delete<bigint>(url);
  }

  getAllStock(): Observable<Stock[]> {
    return this.HS.get<Stock[]>(this.url + 'retrieve-all-stocks');
  }

  getStockById(id: number): Observable<Stock> {
    return this.HS.get<Stock>(this.url + 'retrieve-stock/' + id);
  }

  addStock(stock: Stock): Observable<Stock> {
    return this.HS.post<Stock>(this.url + 'add-stock', stock, this.httpOptions);
  }
  updateStock(stock: Stock): Observable<Stock> {
    return this.HS.put<Stock>(
      this.url + 'modify-stock',
      stock,
      this.httpOptions
    );
  }
}
