import { Facture } from './../../Model/Facture';
import { DetailFacture } from '../../Model/DetailFacture';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {  map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
 
    private url = 'http://localhost:8089/SpringMVC/';
  
  
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  constructor(private http: HttpClient) { }

  validatefacture(facture: Facture): Observable<any> {
    return this.http.post(this.url+"facture/add-invoice/1",facture);
    // .pipe(
    //   map(response=> response.orderTrackingNumber)
    // )
  }
  

  validatefacturedetail(id,prixTotal,quantity,idprod): Observable<any> {
 
    return this.http.post<DetailFacture>(this.url+"detail-invoce/purchase"+"/"+id+"/"+prixTotal+"/"+quantity+"/"+idprod, this.httpOptions);

    // .pipe(
    //   map(response=> response.orderTrackingNumber)
    // )
  }
//facture
 
getFactureById(id: number): Observable<Facture[]> {
  return this.http.get<Facture[]>(this.url +'facture/retrive-invoice-by-client-id/'+id);
}
//detail facture 


getFactureDetailById(id: number): Observable<DetailFacture[]> {
  return this.http.get<DetailFacture[]>(this.url +'detail-invoce/retrive-detailfac/'+id);
}




private getFacture(searchUrl: string): Observable<Facture[]> {
  return this.http.get<Facture[]>(searchUrl).pipe(
    map(response => response)
  );
}

}

